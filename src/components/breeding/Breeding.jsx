"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Breeding() {
  const [data, setData] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [breedingResults, setBreedingResults] = useState([]);

  useEffect(() => {
    fetch('/api/roadData')
      .then(response => response.json())
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  const handleSelect1Change = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelectedValue2(event.target.value);
  };

  useEffect(() => {
    if (selectedValue1 !== '' && selectedValue2 !== '' && data[0]) {
      const selectedObject1 = data.find(item => item[3] === selectedValue1);
      const selectedObject2 = data.find(item => item[3] === selectedValue2);
      const calculatedValue = (parseFloat(selectedObject2[3]) + parseFloat(selectedValue1)) / 2;

      // 가장 가까운 값의 data 객체를 찾아옵니다.
      const closestObject = data.reduce((closest, current) => {
        const currentDiff = Math.abs(parseFloat(current[3]) - calculatedValue);
        const closestDiff = Math.abs(parseFloat(closest[3]) - calculatedValue);

        return currentDiff < closestDiff ? current : closest;
      });

      // select1과 select2의 결과만을 업데이트
      setBreedingResults([
        {
          pal1: selectedObject1,
          pal2: selectedObject2,
          result: closestObject,
        }
      ]);
    } else if (selectedValue1 !== '' && data[0]) {
      const selectedObject1 = data.find(item => item[3] === selectedValue1);
      const results = data.map(item => {
        const calculatedValue = (parseFloat(item[3]) + parseFloat(selectedValue1)) / 2;

        // 가장 가까운 값의 data 객체를 찾아옵니다.
        const closestObject = data.reduce((closest, current) => {
          const currentDiff = Math.abs(parseFloat(current[3]) - calculatedValue);
          const closestDiff = Math.abs(parseFloat(closest[3]) - calculatedValue);

          return currentDiff < closestDiff ? current : closest;
        });

        return {
          pal1: selectedObject1,
          pal2: { ...item },
          result: closestObject,
        };
      });
      setBreedingResults(results);
    }
  }, [selectedValue1, selectedValue2, data]);

  return (
    <>
      <div className='breeding__select'>
        <div className='select1'>
          <label htmlFor="select1">팰 1</label>
          <select id="select1" value={selectedValue1} onChange={handleSelect1Change}>
            <option value="default" hidden>팰을 선택해주세요.</option>
            {data.map((item, index) => (
              <option key={index} value={item[3]}>
                {`No.${item[0]} ${item[1]} (${item[3]})`}
              </option>
            ))}
          </select>
        </div>
        <div className='select2'>
          <label htmlFor="select2">팰 2</label>
          <select id="select2" value={selectedValue2} onChange={handleSelect2Change}>
            <option value="default" hidden>팰을 선택해주세요.</option>
            {data.map((item, index) => (
              <option key={index} value={item[3]}>
                {`No.${item[0]} ${item[1]} (${item[3]})`}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='breeding__result'>
        <h3>결과</h3>
        <p>팰1만 선택한 경우 모든 비교값을 보여줍니다.</p>
        <div className="result__inner">
          <table>
            <thead>
              <tr>
                <th>팰1</th>
                <th>팰2</th>
                <th>결과</th>
              </tr>
            </thead>
            {breedingResults && (
              <tbody>
                {breedingResults.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div>
                        <div>No.{item.pal1[0]} <Link href={`/detail/${item.pal1[0]}`}>{item.pal1[1]}</Link> ({item.pal1[3]})</div> <Image src={item.pal1[2].replace('/public', '')} width={100} height={100} alt={item.pal1[1]} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <div>No.{item.pal2[0]} <Link href={`/detail/${item.pal2[0]}`}>{item.pal2[1]}</Link> ({item.pal2[3]})</div> <Image src={item.pal2[2].replace('/public', '')} width={100} height={100} alt={item.pal1[1]} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <div>No.{item.result[0]} <Link href={`/detail/${item.result[0]}`}>{item.result[1]}</Link> ({item.result[3]})</div> <Image src={item.result[2].replace('/public', '')} width={100} height={100} alt={item.pal1[1]} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  )
}