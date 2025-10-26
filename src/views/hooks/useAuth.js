// src/views/hooks/useAuth.js
import { useState, useEffect } from 'react';

function read(key, init) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : init; } catch { return init; }
}
function write(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch { } }

export function useAuth() {
    const [users, setUsers] = useState(() => read('fitzone_users', []));
    const [currentUser, setCurrentUser] = useState(() => read('fitzone_current_user', null));

    useEffect(() => write('fitzone_users', users), [users]);
    useEffect(() => write('fitzone_current_user', currentUser), [currentUser]);

    function login(emailOrPhone, password) {
        const u = users.find(u => (u.email === emailOrPhone || u.phone === emailOrPhone) && u.password === password);
        if (u) { setCurrentUser(u); return true; } return false;
    }
    function register(userData) {
        if (users.find(u => u.email === userData.email || u.phone === userData.phone)) {
            return { success: false, message: 'Email hoặc số điện thoại đã được sử dụng!' };
        }
        const newU = { id: Date.now(), ...userData, createdAt: new Date().toISOString() };
        setUsers([...users, newU]); return { success: true, user: newU };
    }
    function logout() { setCurrentUser(null); }

    return { users, currentUser, login, register, logout, setCurrentUser };
}
