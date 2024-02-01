"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function formatDexNumber(dexNumber) {
    // 숫자 부분과 문자 부분을 분리
    const numPart = dexNumber.match(/\d+/)[0];
    const charPart = dexNumber.match(/[a-zA-Z]+/)?.[0] || '';

    // 숫자 부분을 세 자리 형식으로 포매팅
    const formattedNumPart = numPart.padStart(3, '0');

    return `${formattedNumPart}${charPart}`;
}

export default function page({ params }) {
    const [selectedPal, setSelectedPal] = useState(null);
    const [activeIndexes, setActiveIndexes] = useState([]);

    const { dexNumber } = params;

    useEffect(() => {
        if (dexNumber) {
            const formattedDexNumber = formatDexNumber(dexNumber);

            fetch('/pals.json')
                .then((response) => response.json())
                .then((jsonData) => {
                    // 변환된 dexNumber와 일치하는 팰을 찾습니다.
                    const pal = jsonData.find(pal => pal.key === formattedDexNumber);
                    setSelectedPal(pal);
                })
                .catch((error) => {
                    console.error('Failed to fetch data:', error);
                });
        }
    }, [dexNumber]);

    // 스킬 항목을 클릭했을 때 해당 스킬의 active 상태를 변경
    const handleSkillClick = (index) => {
        // 현재 인덱스가 이미 활성화된 인덱스 목록에 있는지 확인
        if (activeIndexes.includes(index)) {
            // 이미 있으면 목록에서 제거
            setActiveIndexes(activeIndexes.filter(i => i !== index));
        } else {
            // 없으면 목록에 추가
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    if (!selectedPal) {
        return <div>Loading...</div>; // selectedPal이 설정되지 않았을 때 로딩 표시
    }
    const getTypeImage = (type) => {
        const typeImages = {
            "무속성": "/image/elements/neutral.png",
            "불속성": "/image/elements/fire.png",
            "물속성": "/image/elements/water.png",
            "풀속성": "/image/elements/grass.png",
            "번개속성": "/image/elements/electric.png",
            "얼음속성": "/image/elements/ice.png",
            "땅속성": "/image/elements/ground.png",
            "어둠속성": "/image/elements/dark.png",
            "용속성": "/image/elements/Dragon.png",
        };

        return typeImages[type] || null; // 해당하는 이미지가 없는 경우 null 반환
    };

    // 적성 타입에 따른 이미지 경로를 반환하는 함수
    const getSuitabilityImage = (type) => {
        const suitabilityImages = {
            "수작업": "/image/works/handiwork.png",
            "운반": "/image/works/transporting.png",
            "채집": "/image/works/gathering.png",
            "채굴": "/image/works/mining.png",
            "파종": "/image/works/planting.png",
            "벌목": "/image/works/lumbering.png",
            "제약": "/image/works/medicine_production.png",
            "관개": "/image/works/watering.png",
            "발전": "/image/works/generating_electricity.png",
            "냉각": "/image/works/cooling.png",
            "목장": "/image/works/farming.png",
            "불 피우기": "/image/works/kindling.png",
            // 기타 적성 타입에 대한 이미지 경로
        };

        return suitabilityImages[type] || null; // 해당하는 이미지가 없는 경우 null 반환
    };

    return (
        <div className="card">
            <div className="card__top">
                <div className="card__left">
                    <div className="left__top">
                        <div className="key">
                            <i>No.</i>{selectedPal.key}
                        </div>
                        <ul>
                            {selectedPal.types.map((type, index) => {
                                const imagePath = getTypeImage(type);
                                return (
                                    <li key={index}>
                                        {imagePath ? <Image src={imagePath} alt={type} width={30} height={30} /> : type}
                                    </li>
                                );
                            })}
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
                                <div
                                    className={`active__top ${activeIndexes.includes(index) ? 'active' : ''}`}
                                    onClick={() => handleSkillClick(index)}
                                >
                                    <div className='top__left'>
                                        <p><i>Lv</i>{item.level}</p>
                                        <p>{item.name}</p>
                                    </div>
                                    <div>
                                        {item.type && getTypeImage(item.type) ? (
                                            <Image src={getTypeImage(item.type)} alt={item.type} width={30} height={30} />
                                        ) : (
                                            <p>{item.type}</p>
                                        )}
                                    </div>
                                </div>
                                <div className={`active__bottom ${activeIndexes.includes(index) ? 'active' : ''}`}>
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
                                <div className="suitability-item">
                                    {getSuitabilityImage(item.type) && (
                                        <Image className='type' src={getSuitabilityImage(item.type)} alt={item.type} width={50} height={50} />
                                    )}
                                    <span>{item.type}</span>
                                </div>
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

    )
}
