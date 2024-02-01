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
        {closestData !== null && closestData !== undefined && (
          <Link href={`/detail/${closestData[0]}`}>
            <div className="card__top">
              <div className="card__left">
                <div className="left__top">
                  <div className="key">
                    <i>No.</i>{closestData[0]}
                  </div>
                  <ul>
                    <li>
                      {closestData[4] && (
                        <Image src={getTypeImage(closestData[4])} width={30} height={30} alt={closestData[4]} />
                      )}
                    </li>
                    <li>
                      {closestData[5] === "None" ? (
                        <span></span>
                      ) : (
                        <Image src={getTypeImage(closestData[5])} width={30} height={30} alt={closestData[5]} />
                      )}
                    </li>
                  </ul>
                </div>
                <h3 className="name">
                  {closestData[1]} ({closestData[3]})
                </h3>
              </div>
              <div className="card__right">
                <Image src={closestData[2].replace('/public', '')} width={100} height={100} alt={closestData[1]} />
              </div>
            </div>
          </Link>
        )}
      </div>
    </>
  )
}
