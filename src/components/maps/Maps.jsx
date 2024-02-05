"use client"

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Maps() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const [selectedPal, setSelectedPal] = useState(null);
  const [time, setTime] = useState("day");

  useEffect(() => {
    // JSON 파일을 불러옵니다.
    fetch('/pals.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
      });
  }, [setSelectedPal]);

  // 팰을 필터링하는 함수
  const filteredData = data && data.filter((item) => {
    return item.name.includes(value);
  });

  // 팰을 클릭할 때 호출되는 함수
  const handlePalClick = (pal) => {
    // 팰을 선택한 후 검색 입력값을 초기화
    setSelectedPal(pal);
    // setValue("");
  };

  // 엔터 키를 눌렀을 때 검색되도록 처리
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // 엔터 키를 눌렀을 때 검색 로직을 수행
      // 여기에서는 간단하게 첫 번째 검색 결과를 선택하도록 했습니다.
      if (filteredData && filteredData.length > 0) {
        handlePalClick(filteredData[0]);
      }
    }
  };

  // 야행성
  const handleTime = (e) => {
    setTime(e.target.value);
  }

  return (
    <div className='maps container'>
      <div className="maps__title">
        <h2>8Worl:D</h2>
      </div>
      <div className='maps__inner'>
        <div className='maps__list'>
          <div className="home__search">
          <div className='search__select'>
            <label htmlFor="time" className='blind'>야행성</label>
            <select name="time" id="time" value={time} onChange={handleTime}>
              <option value="day">
                DAY
              </option>
              <option value="night">
                NIGHT
              </option>
            </select>
          </div>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='검색할 팰의 이름을 입력해주세요.'
            />
            {value && !selectedPal && (
              <ul className="home__searchDrop">
                {filteredData?.map((item) => (
                  <li key={item.name} onClick={() => handlePalClick(item)}>
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='maps__map'>
          <TransformWrapper
            initialScale={1}
          >
            <React.Fragment>
              {/* <div className="tools">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>x</button>
              </div> */}
              <TransformComponent>
                {selectedPal ? (
                  <Image src={`/image/maps/${selectedPal.key}-${time}.png`} width={500} height={500} alt={selectedPal.name} />
                ) : (
                  <Image src="/image/maps/T_WorldMap.png" width={500} height={500} alt='palworld world map' fallback="/image/maps/T_WorldMap.png" />
                )}
              </TransformComponent>
            </React.Fragment>
          </TransformWrapper>
        </div>
      </div>
    </div >
  )
}
