"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const [selectedPal, setSelectedPal] = useState(null);

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

  const handlePalClick = (pal) => {
    setSelectedPal(pal);
  };

  return (
    <main id='main' className='home container'>
      <div className="home__inner">
        <div className="home__title">
          <h1>Palworld</h1>
        </div>
        {data && (
          <>
            <div className="home__search">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='검색할 팰의 이름을 적어주세요.'
              />
              {value && (
                <ul className="home__searchDrop">
                  {filteredData.map((item) => (
                    <li key={item.name} onClick={() => handlePalClick(item)}>
                      <p>{item.name}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {selectedPal && (
              <div className="card">
                <div className="card__top">
                  <div className="card__left">
                    <div className="left__top">
                      <div className="key">
                        <i>No.</i>{selectedPal.key}
                      </div>
                      <ul>
                        {selectedPal.types.map((item, index) => (
                          <li
                            key={index}
                            className={item === "무속성" ? "neutral" : item === "불속성" ? "fire" : item === "물속성" ? "water" : item === "풀속성" ? "grass" : item === "번개속성" ? "electric" : item === "얼음속성" ? "ice" : item === "땅속성" ? "ground" : item === "어둠속성" ? "dark" : item === "용속성" ? "dragon" : ""}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h3 className="name">
                      {selectedPal.name}
                    </h3>
                  </div>

                  <div className="card__right">
                    <Image src={selectedPal.imageWiki} width={100} height={100} alt={selectedPal.name} />
                  </div>
                </div>
                <div className="card__bottom">
                  <div className="skill">
                    <h4>파트너 스킬</h4>
                    <div className="aura">
                      <h3>
                        {selectedPal.aura.name}
                      </h3>
                      <p>
                        {selectedPal.aura.description}
                      </p>
                    </div>
                  </div>
                  <div className="activeSkill">
                    <h4>액티브 스킬</h4>
                    <ul>
                      {selectedPal.skills.map((item, index) => (
                        <li key={index}>
                          <div className='active__top'>
                            <div className='top__left'>
                              <p><i>Lv</i>{item.level}</p>
                              <p>{item.name}</p>
                            </div>
                            <p
                              className={item.type === "무속성" ? "neutral" : item.type === "불속성" ? "fire" : item.type === "물속성" ? "water" : item.type === "풀속성" ? "grass" : item.type === "번개속성" ? "electric" : item.type === "얼음속성" ? "ice" : item.type === "땅속성" ? "ground" : item.type === "어둠속성" ? "dark" : item.type === "용속성" ? "dragon" : ""}
                            >
                              {item.type}
                            </p>

                          </div>
                          <div className='active__bottom'>
                            <div className='bottom__top'>
                              <p><i>공격</i>{item.power}</p>
                              <p><i>쿨타임</i>{item.cooldown}</p>
                            </div>
                            <p>{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='aptitude'>
                    <h4>작업 적성</h4>
                    <ul>
                      {selectedPal.suitability.map((item, index) => (
                        <li key={index}>
                          <div>{item.type}</div>
                          <div><i>Lv</i>{item.level}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='item'>
                    <h4>드롭하는 아이템</h4>
                    <ul>
                      {selectedPal.drops.map((item, index) => (
                        <li key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
