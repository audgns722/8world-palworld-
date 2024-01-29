"use client"

// app/breeding/page.js 또는 다른 클라이언트 사이드 컴포넌트
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [header, setHeader] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/roadData')
            .then(response => response.json())
            .then(({ header, data }) => {
                setHeader(header);
                setData(data);
            });
    }, []);

    return (
        <div style={{ color: "#fff" }}>
            <table>
                <thead>
                    <tr>
                        {header.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
