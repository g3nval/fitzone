import React from 'react';

export default function CartModal({ visible, cart = [], onClose, onRemove, onCheckout }) {
    if (!visible) return null;

    const total = (cart || []).reduce((acc, i) => {
        const text = String(i?.price || '0').replace(/[^\d]/g, '');
        const n = parseInt(text, 10) || 0;
        return acc + n;
    }, 0);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
                <h3 className="text-2xl font-bold mb-4">Giỏ hàng</h3>
                <div className="mb-6">
                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center">Giỏ hàng trống</p>
                    ) : (
                        cart.map((it, idx) => (
                            <div key={idx} className="flex justify-between items-center py-2 border-b">
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">{it.icon}</span>
                                    <span className="font-semibold">{it.name}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-purple-600">{it.price}</span>
                                    <button onClick={() => onRemove(idx)} className="text-red-500">🗑️</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="text-xl font-bold mb-4 text-center">Tổng cộng: {total}K</div>
                <div className="flex space-x-4">
                    <button onClick={onCheckout} className="flex-1 bg-purple-600 text-white py-3 rounded-lg">Thanh toán</button>
                    <button onClick={onClose} className="flex-1 bg-gray-300 py-3 rounded-lg">Đóng</button>
                </div>
            </div>
        </div>
    );
}
