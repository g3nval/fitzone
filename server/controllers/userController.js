import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email đã tồn tại" });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });
    await user.save();
    res.status(201).json({ message: "Đăng ký thành công" });
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Không tìm thấy người dùng" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Sai mật khẩu" });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "3h" });
    res.json({ message: "Đăng nhập thành công", token });
};
