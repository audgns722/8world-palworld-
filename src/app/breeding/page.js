"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export default function Page() {
    const [header, setHeader] = useState([]);
    const [data, setData] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
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

    return (
        <div className='breeding'>

            <table className='breeding__table'>
                <thead>
                    <tr>
                        {header.map((column, index) => (
                            <th key={index} onClick={() => requestSort(index)}>
                                {isImageUrl(column) ?
                                    <Image src={column.replace('/public', '')} alt="Header Image" width={100} height={100} />
                                    : column
                                }
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, rowIndex) => (
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
    );
}
