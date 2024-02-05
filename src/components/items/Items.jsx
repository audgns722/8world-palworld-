"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Items() {
    const [data, setData] = useState([]);
    const [pals, setPals] = useState([]);
    const [dropMapping, setDropMapping] = useState({});

    useEffect(() => {
        // 아이템 정보를 불러옵니다.
        fetch('/item.json')
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error('Failed to fetch items:', error));

        // 팔스 정보를 불러오고, 드롭 매핑 생성
        fetch('/pals-eng.json')
            .then((response) => response.json())
            .then((jsonData) => {
                const mapping = jsonData.reduce((acc, pal) => {
                    pal.drops.forEach(drop => {
                        if (!acc[drop]) acc[drop] = [];
                        acc[drop].push({ name: pal.name, image: pal.image }); // 팔스의 이름과 이미지 URL을 저장
                    });
                    return acc;
                }, {});
                setDropMapping(mapping);
            })
            .catch((error) => console.error('Failed to fetch pals:', error));
    }, []);



    return (
        <div className="items container">
            <div className="item__wrap">
                <div className="left"></div>
                <div className="right">
                    <div className="card__wrap">
                        {data && data.map((item, index) => (
                            <div className="item__card" key={index}>
                                <div className="img__box">
                                    <Image src={item.image.replace('/public', '')} alt={item.name} width={100} height={100} />
                                </div>
                                <div className="name">{item.name}</div>
                                <div className="pals">
                                    {/* 아이템을 드롭하는 팔스의 정보를 렌더링 */}
                                    {dropMapping[item.name] ? (
                                        dropMapping[item.name].map((pal, idx) => (
                                            // 여기서 pal은 { name, image } 객체입니다.
                                            <div key={idx}>
                                                <Image src={pal.image.replace('/public', '')} alt={pal.name} width={50} height={50} />
                                                <div>{pal.name}</div>
                                            </div>
                                        ))
                                    ) : (
                                        <div>No pals drop this item</div>
                                    )}
                                </div>
                                <div className="info">
                                    <span className="gold">{item.gold}</span>
                                    <span className="weight">{item.weight}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
