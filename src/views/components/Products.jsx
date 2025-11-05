// src/views/components/Products.jsx
import React, { useEffect, useState } from 'react';

export default function Products({ onAdd }) {
    const [products, setProducts] = useState([]);        // state chứa sản phẩm thật
    const [loading, setLoading] = useState(true);        // để hiển thị trạng thái tải
    const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

    // danh sách mặc định (phòng khi backend không trả dữ liệu)
    const defaultProducts = [
        { name: 'Whey Protein', price: '850K', emoji: '🍶' },
        { name: 'Găng tay tập', price: '150K', emoji: '🧤' },
        { name: 'Áo tập FitZone', price: '250K', emoji: '👕' },
        { name: 'BCAA', price: '450K', emoji: '💊' },
        { name: 'Pre-Workout', price: '550K', emoji: '🧴' },
        { name: 'Túi tập gym', price: '350K', emoji: '🎒' },
        { name: 'Bình nước', price: '120K', emoji: '💧' },
        { name: 'Ứng dụng PT', price: '99K', emoji: '📱' }
    ];

    // gọi backend khi component vừa load
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(`${API_URL}/api/products`);
                if (!res.ok) throw new Error('Không thể tải sản phẩm từ server');
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) {
                    setProducts(data);
                } else {
                    setProducts(defaultProducts);
                }
            } catch (err) {
                console.warn("⚠️ Lỗi API, dùng dữ liệu mặc định:", err);
                setError(err.message);
                setProducts(defaultProducts);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [API_URL]);

    if (loading) {
        return (
            <section id="products" className="py-20 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold mb-8">Đang tải sản phẩm...</h2>
            </section>
        );
    }

    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                    Sản phẩm & Phụ kiện
                </h2>

                {error && (
                    <p className="text-center text-red-500 mb-6">
                        ⚠️ {error}
                    </p>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((p, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 shadow-lg card-hover"
                        >
                            <div className="text-4xl mb-4 text-center">{p.emoji || '🏋️'}</div>
                            <h3 className="text-lg font-bold mb-2 text-center">{p.name}</h3>
                            <p className="text-gray-600 text-sm mb-3 text-center">
                                Mô tả ngắn
                            </p>
                            <div className="text-center">
                                <span className="text-xl font-bold text-purple-600">
                                    {p.price}
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
