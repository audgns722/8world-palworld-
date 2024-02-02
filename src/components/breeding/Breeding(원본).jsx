"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Breeding() {
  const [data, setData] = useState([]);
  // console.log(data);
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [breedingResult, setBreedingResult] = useState(null);
  const [closestData, setClosestData] = useState(null);

  useEffect(() => {
    fetch('/api/roadData')
      .then(response => response.json())
      .then(({ data }) => {
        setData(data);
      });
  }, []);
  // console.log(data);

  const handleSelect1Change = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelectedValue2(event.target.value);
  };

  useEffect(() => {
    if (selectedValue1 !== '' && selectedValue2 !== '') {
      const result = (parseFloat(selectedValue1) + parseFloat(selectedValue2)) / 2;
      setBreedingResult(result);

      const closestItem = data.reduce((closest, item) => {
        const itemValue = parseFloat(item[3]);
        const currentDiff = Math.abs(result - itemValue);
        const closestDiff = Math.abs(result - parseFloat(closest[3]));

        return currentDiff < closestDiff ? item : closest;
      }, data[0]);

      setClosestData(closestItem);
    } else {
      setBreedingResult(null);
      setClosestData(null);
    }
  }, [selectedValue1, selectedValue2, data]);

  const getTypeImage = (type) => {
    const typeImages = {
      "Normal": "/image/elements/neutral.png",
      "Fire": "/image/elements/fire.png",
      "Dark": "/image/elements/dark.png",
      "Dragon": "/image/elements/Dragon.png",
      "Earth": "/image/elements/ground.png",
      "Electricity": "/image/elements/electric.png",
      "Ice": "/image/elements/ice.png",
      "Leaf": "/image/elements/grass.png",
      "Water": "/image/elements/water.png",
    };

    return type !== "None" ? typeImages[type] || "/image/default.png" : null;
  };

  return (
    <>
      <div className='breeding__select'>
        <div className='select1'>
          <h3>팰 1</h3>
          <select value={selectedValue1} onChange={handleSelect1Change}>
            <option value="default" hidden>팰을 선택해주세요.</option>
            {data.map((item, index) => (
              <option key={index} value={item[3]}>
                {`No.${item[0]} ${item[1]} (${item[3]})`}
              </option>
            ))}
          </select>
        </div>
        <div className='select2'>
          <h3>팰 2</h3>
          <select value={selectedValue2} onChange={handleSelect2Change}>
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
        <table>
          <thead>
            <tr>
              <th>도감번호</th>
              <th>이름</th>
              <th>이미지</th>
              <th>교배값</th>
              <th>속성(타입1)</th>
              <th>속성(타입2)</th>
            </tr>
          </thead>
          <tbody>
            {closestData !== null && closestData !== undefined && (
              <tr>
                <td><i>No.</i>{closestData[0]}</td>
                <td>
                  <Link href={`/detail/${closestData[0]}`}>
                    {closestData[1]}
                  </Link>
                </td>
                <td>
                  <Image src={closestData[2].replace('/public', '')} width={100} height={100} alt={closestData[1]} />
                </td>
                <td>{closestData[3]}</td>
                <td>
                  {closestData[4] && (
                    <Image src={getTypeImage(closestData[4])} width={30} height={30} alt={closestData[4]} />
                  )}
                </td>
                <td>
                  {closestData[5] === "None" ? (
                    <span></span>
                  ) : (
                    <Image src={getTypeImage(closestData[5])} width={30} height={30} alt={closestData[5]} />
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
