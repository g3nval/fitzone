import React from 'react';

export default function PackageModal({ visible, packageInfo, onClose }) {
    if (!visible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Đăng ký gói tập thành công!');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
                <h3 className="text-2xl font-bold mb-4">Đăng ký gói tập</h3>
                <div className="mb-6 text-center">
                    <h4 className="text-xl font-bold text-purple-600">{packageInfo?.name}</h4>
                    <p className="text-2xl font-bold">{packageInfo?.price}/tháng</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input className="w-full px-4 py-3 border rounded-lg mb-3" placeholder="Họ và tên" required />
                    <input className="w-full px-4 py-3 border rounded-lg mb-3" placeholder="Số điện thoại" required />
                    <input type="email" className="w-full px-4 py-3 border rounded-lg mb-3" placeholder="Email" required />
                    <div className="flex space-x-4">
                        <button type="submit" className="flex-1 bg-purple-600 text-white py-3 rounded-lg">Đăng ký ngay</button>
                        <button type="button" onClick={onClose} className="flex-1 bg-gray-300 py-3 rounded-lg">Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
