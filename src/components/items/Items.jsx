"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

export default function Items() {
    const [data, setData] = useState([]);
    const [pals, setPals] = useState([]);
    const [selectedType, setSelectedType] = useState('all');
    const [types, setTypes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true); // 두 요청이 시작될 때 로딩 상태 활성화

        Promise.all([
            fetch('/item2.json').then(response => response.json()),
            fetch('/pals-eng.json').then(response => response.json()),
        ])
            .then(([itemsData, palsData]) => {
                setData(itemsData);
                setPals(palsData);
                const uniqueTypes = Array.from(new Set(itemsData.map(item => item.type)));
                setTypes(['all', ...uniqueTypes]);
            })
            .catch(error => {
                console.error('Failed to fetch data:', error);
            })
            .finally(() => {
                setIsLoading(false); // 두 요청이 모두 완료되면 로딩 상태 해제
            });
    }, []);

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // 검색어 상태 업데이트
    };

    // 데이터 필터링 로직 업데이트
    const filteredData = data.filter(item =>
        (selectedType === 'all' || item.type === selectedType) &&
        item.korname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="items container">
            <div className="item__wrap">
                <div className="left">
                    {/* 검색 입력 필드 */}
                    <TextField
                        className="search"
                        label="검색"
                        variant="outlined"
                        size="small"
                        fullWidth
                        margin="normal"
                        placeholder="아이템명을 입력해주세요"
                        onChange={handleSearchChange}
                        sx={{
                            // 글씨색 변경
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
                            // 초기 테두리(border) 색 변경
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#1976d2',
                            },
                            // 포커스됐을 때 테두리 색
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#2976d2',
                            },
                            // 포커스됐을 때 테두리 색
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#1976d2',
                            },
                            // 라벨 색상 변경
                            '& .MuiInputLabel-outlined': {
                                color: 'white',
                            },
                        }}
                    />
                    {types.map((type, index) => (
                        <Button
                            key={index}
                            variant={selectedType === type ? "contained" : "outlined"} // 선택된 타입에 따라 스타일 변경
                            color="primary" // 버튼 색상 설정
                            onClick={() => handleTypeClick(type)}
                            style={{ margin: "5px" }}>
                            {type === 'all' ? '전체보기' : type}
                        </Button>
                    ))}
                </div>
                <div className="right">
                    {isLoading ? (
                        <div className="loading">
                            <CircularProgress />
                        </div>
                    ) : (
                        <div className="card__wrap">
                            {filteredData.map((item, index) => { // filteredData를 사용하여 필터링된 결과를 렌더링
                                const matchedPals = pals.filter(pal =>
                                    pal.drops.some(drop =>
                                        item.name.toLowerCase().replace(/[-_ ]+/g, '') === drop.toLowerCase().replace(/[-_ ]+/g, '')
                                    )
                                );

                                return (
                                    <div className="item__card" key={index}>
                                        <div className="img__box">
                                            <Image src={item.image.replace('/public', '')} alt={item.name} width={100} height={100} />
                                        </div>
                                        <div className="name">{item.korname}</div>
                                        {matchedPals.length > 0 && (
                                            <div className="pals">
                                                {matchedPals.slice(0, 3).map((pal, palIndex) => (
                                                    <Image className="palsimg" key={palIndex} src={pal.image.replace('/public', '')} alt={pal.name} width={100} height={100} />
                                                ))}
                                            </div>
                                        )}
                                        <div className="info">
                                            <span className="gold">{item.gold}</span>
                                            <span className="weight">{item.weight}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
