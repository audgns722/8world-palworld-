"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Page() {
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

  const renderCellContent = (cell, columnName) => {
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

  const requestSort = (columnIndex) => {
    // 이미지 컬럼이면 정렬하지 않습니다.
    if (isImageUrl(header[columnIndex]) || header[columnIndex] === "이미지") return;

    let direction = 'ascending';
    if (sortConfig.key === columnIndex && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else {
      direction = 'ascending';
    }
    setSortConfig({ key: columnIndex, direction });
  }


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
    <main id='main'>
      <div className='collection'>
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
                      {renderCellContent(cell, header[cellIndex])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
