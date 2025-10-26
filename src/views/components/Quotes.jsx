// src/views/components/Quotes.jsx
import React, { useState, useEffect } from 'react';
export default function Quotes() {
    const [index, setIndex] = useState(0);
    const quotes = [
        { emoji: '💪', text: '"Cơ thể bạn có thể làm được. Chính tâm trí bạn cần thuyết phục."', author: 'Fitness Motivation' },
        { emoji: '🏆', text: '"Thành công bắt đầu từ việc bạn quyết định thử."', author: 'GenVal' },
        { emoji: '🔥', text: '"Đau đớn tạm thời, nhưng từ bỏ sẽ đau đớn mãi mãi."', author: 'Lance Armstrong' },
        { emoji: '⚡', text: '"Không có thang máy đến thành công. Bạn phải đi cầu thang."', author: 'Zig Ziglar' },
        { emoji: '🎯', text: '"Hãy tập trung vào mục tiêu, không phải trở ngại."', author: 'Fitness Quote' },
        { emoji: '💯', text: '"Bạn mạnh mẽ hơn những gì bạn nghĩ."', author: 'Motivational' }
    ];
    useEffect(() => { const id = setInterval(() => setIndex(i => (i + 1) % quotes.length), 5000); return () => clearInterval(id); }, [quotes.length]);
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Động lực mỗi ngày</h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden rounded-2xl">
                        <div className="relative h-64 flex items-center justify-center text-center">
                            {quotes.map((q, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-opacity duration-700 flex flex-col items-center justify-center text-white rounded-2xl p-12 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                    style={{ background: 'linear-gradient(45deg,#f093fb 0%,#f5576c 100%)' }}
                                >
                                    <div className="text-6xl mb-6">{q.emoji}</div>
                                    <p className="text-2xl font-medium mb-6">{q.text}</p>
                                    <p className="text-lg opacity-80">- {q.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
