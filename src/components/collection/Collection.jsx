"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Collection() {
  const [header, setHeader] = useState([]);
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/roadData')
      .then(response => response.json())
      .then(({ header, data }) => {
        setHeader(header);
        setData(data);
      });
  }, []);
  const isImageUrl = (path) => {
    return /\.(jpg|jpeg|png|gif)$/i.test(path);
  };

  const getTypeImage = (type) => {
    const typeImages = {
      "Normal": "/image/elements/neutral.png",
      "Fire": "/image/elements/fire.png",
      "Dark": "/image/elements/dark.png",
      "Dragon": "/image/elements/dragon.png",
      "Earth": "/image/elements/ground.png",
      "Electricity": "/image/elements/electric.png",
      "Ice": "/image/elements/ice.png",
      "Leaf": "/image/elements/grass.png",
      "Water": "/image/elements/water.png",
      // 여기에 다른 속성에 대한 이미지 경로 추가
    };

    return type !== "None" ? typeImages[type] || "/image/default.png" : null; // "None"일 경우 null 반환
  };

  const renderCellContent = (cell, columnName, rowIndex) => {
    if (columnName === '속성(타입1)' || columnName === '속성(타입2)') {
      const imagePath = getTypeImage(cell);
      return imagePath ? <Image className='type' src={imagePath} alt={cell} width={30} height={30} /> : <span>-</span>; // 이미지 경로가 없는 경우 대체 텍스트 또는 빈 내용
    }
    if (columnName === '이름') {
      // 도감번호를 찾습니다. '도감번호'는 header 배열에서 해당 문자열의 인덱스를 찾아 데이터에서 접근할 수 있습니다.
      const dexNumberIndex = header.indexOf('도감번호');
      const dexNumber = sortedData[rowIndex][dexNumberIndex];

      return (
        <Link href={`/detail/${dexNumber}`} onclick="return">
          {cell}
        </Link>
      );
    }
    // 이미지 URL인 경우
    if (columnName === '이미지' && typeof cell === 'string') {
      const imagePath = cell.replace('/public', '');
      return <Image src={imagePath} alt="Image" width={300} height={300} />;
    }
    // 야행성이 문자열로 'true' 또는 'false'인 경우
    else if (columnName === '야행성' && typeof cell === "string") {
      return cell === "TRUE" ? "O" : "X";
    }
    // 기타 경우
    return cell;
  };

  const requestSort = (key) => {
    const isImageUrlColumn = isImageUrl(key);
    if (isImageUrlColumn || key === "이미지") return;

    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else {
      direction = 'ascending';
    }
    setSortConfig({ key, direction });
  };


  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];
        // 숫자로 변환 가능한지 확인
        if (!isNaN(aVal) && !isNaN(bVal)) {
          aVal = Number(aVal);
          bVal = Number(bVal);
        }
        if (aVal < bVal) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aVal > bVal) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  // 필터링된 데이터 계산
  const filteredData = React.useMemo(() => {
    if (!searchTerm) return sortedData;

    return sortedData.filter(row => {
      // '이름'과 '도감번호' 컬럼의 인덱스를 찾습니다.
      const nameIndex = header.findIndex(column => column === '이름');
      const dexNumberIndex = header.findIndex(column => column === '도감번호');

      // 해당 컬럼의 데이터만 검색 대상으로 합니다.
      const name = row[nameIndex].toString().toLowerCase();
      const dexNumber = row[dexNumberIndex].toString().toLowerCase();

      return name.includes(searchTerm.toLowerCase()) || dexNumber.includes(searchTerm.toLowerCase());
    });
  }, [sortedData, searchTerm, header]);

  // 검색 입력 처리 함수
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='collection'>
      <div className="collection__title">
        <h2>8Worl:D</h2>
      </div>
      <div className='collection__search'>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="검색할 팰의 번호 혹은 이름을 입력해주세요."
        />
      </div>
      <div className='collection__table'>
        <table>
          <thead>
            <tr>
              {header.map((column, index) => (
                <th key={index} onClick={() => requestSort(index)}>
                  {isImageUrl(column) ? (
                    <Image src={column.replace('/public', '')} alt="Header Image" width={100} height={100} />
                  ) : (
                    <>
                      {column}
                      {sortConfig.key === index && (
                        <Image className={`sort-arrow ${sortConfig.direction}`} src="/image/sort.svg" alt="Sort Image" width={100} height={100} />
                      )}
                    </>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {renderCellContent(cell, header[cellIndex], rowIndex)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
