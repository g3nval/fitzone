// src/views/components/Products.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Products({ onAdd }) {
    const [products, setProducts] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    // Lấy dữ liệu từ backend khi component mount
    useEffect(() => {
        axios.get(`${API_URL}/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.error('❌ Lỗi tải sản phẩm:', err));
    }, [API_URL]);

    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Sản phẩm & Phụ kiện</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((p, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                            <div className="text-4xl mb-4 text-center">{p.emoji || '🛒'}</div>
                            <h3 className="text-lg font-bold mb-2 text-center">{p.name}</h3>
                            <p className="text-gray-600 text-sm mb-3 text-center">{p.description || 'Không có mô tả'}</p>
                            <div className="text-center">
                                <span className="text-xl font-bold text-purple-600">
                                    {p.price ? `${p.price.toLocaleString()}₫` : 'N/A'}
                                </span>
                                <button
                                    onClick={() => onAdd(p.name, p.price)}
                                    className="block w-full mt-3 bg-purple-600 text-white py-2 rounded-lg"
                                >
                                    Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
