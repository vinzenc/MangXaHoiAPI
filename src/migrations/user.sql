-- 1. Tạo bảng users
Create table users (
    id Int auto_increment primary key,
    name nvarchar(100) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    role Enum('admin', 'user','collaborator') default 'user',
    created_at timestamp default current_timestamp
);
-- 2. Tài khoản admin mặc định
INSERT INTO users (name, email, password, role) VALUES 
('Admin', 'admin@example.com', '$2b$10$0oT7l9oQhU6q7m5aob9ACu2pmVBhiS46DPFP8pJRYs8hDWnpjVZUG', 'admin')