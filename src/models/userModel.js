import e from 'express';
import pool from '../config/db.js';

// Hàm lấy tất cả người dùng
export const getAllUsers = async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
};

// Hàm lấy người dùng theo ID
export const getUserById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0]; // Trả về phần tử đầu tiên (hoặc undefined nếu không thấy)
};

// Hàm tạo người dùng mới
export const createUser = async (name) => {
    const [result] = await pool.query("INSERT INTO users (name) VALUES (?)", [name]);
    return { id: result.insertId, name };
};

export const deleteUser = async (id) => {
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
    return result.affectedRows > 0;
}

// Hàm cập nhật thông tin người dùng
export const updateUser = async (id, name) => {
    // Câu lệnh UPDATE set name mới tại vị trí id tương ứng
    const [result] = await pool.query(
        "UPDATE users SET name = ? WHERE id = ?", 
        [name, id]
    );
    return result.affectedRows; // Trả về số dòng bị ảnh hưởng (sửa thành công)
};