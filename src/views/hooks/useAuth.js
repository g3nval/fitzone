import { useState } from "react";

export function useAuth() {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("fitzoneUser")) || null
    );

    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

    const register = async (user) => {
        try {
            const res = await fetch(`${API_URL}/api/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });
            const data = await res.json();
            if (res.ok) {
                alert("Đăng ký thành công!");
                return true;
            } else {
                alert(data.message || "Lỗi khi đăng ký!");
                return false;
            }
        } catch (err) {
            console.error("Register error:", err);
            return false;
        }
    };

    const login = async (email, password) => {
        try {
            const res = await fetch(`${API_URL}/api/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("fitzoneUser", JSON.stringify(data));
                setCurrentUser(data);
                return true;
            } else {
                alert(data.message || "Sai thông tin đăng nhập!");
                return false;
            }
        } catch (err) {
            console.error("Login error:", err);
            return false;
        }
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("fitzoneUser");
    };

    return { currentUser, register, login, logout };
}
