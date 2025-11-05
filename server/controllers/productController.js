import Product from '../models/Product.js';

// ✅ Hàm thêm 1 hoặc nhiều sản phẩm
export const addProduct = async (req, res) => {
    try {
        const data = req.body;

        // Nếu là mảng → thêm nhiều sản phẩm
        if (Array.isArray(data)) {
            const inserted = await Product.insertMany(data);
            return res.status(201).json({
                message: '✅ Thêm nhiều sản phẩm thành công',
                count: inserted.length,
                products: inserted
            });
        }

        // Nếu là object → thêm 1 sản phẩm
        const { name, price, emoji, description, category, stock } = data;
        if (!name || !price) {
            return res.status(400).json({ message: 'Thiếu tên hoặc giá sản phẩm' });
        }

        const newProduct = new Product({ name, price, emoji, description, category, stock });
        await newProduct.save();

        res.status(201).json({ message: '✅ Thêm sản phẩm thành công', product: newProduct });
    } catch (error) {
        console.error('❌ Lỗi khi thêm sản phẩm:', error);
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
};

// ✅ Lấy tất cả sản phẩm
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
};
