# 🛍️ Shoplify Store

A full-stack web application for managing products. Built with **React**, **Chakra UI**, **Express.js**, **MongoDB**, and **Vite**.

---

## 🚀 Features

- 🛒 Add, update, delete, and view products
- ❤️ Mark/unmark products as **favorites**
- 🩷 **Favorites appear first** in the product list
- 🔥 Heart **pop animation** on favorite toggle
- ⚡ Responsive UI powered by Chakra UI
- 🌐 Global state management using Zustand
- 🧾 RESTful API with Express.js
- 💾 MongoDB for backend storage
- ✅ Toast notifications for user feedback
- 🔄 Unified dev server (`npm run start`) for both frontend & backend

---

## 🧑‍💻 Tech Stack

**Frontend:**
- React + Vite
- Chakra UI v3
- Zustand

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose

---

## 📦 API Endpoints

| Method | Endpoint                     | Description                   |
|--------|------------------------------|-------------------------------|
| GET    | `/api/products`              | Get all products              |
| POST   | `/api/products`              | Create a new product          |
| DELETE | `/api/products/:id`          | Delete a product by ID        |
| PUT    | `/api/products/:id`          | Update a product by ID        |
| PUT    | `/api/products/favorite/:id` | Toggle favorite for a product |

---

## ⚙️ Installation & Run

```bash
# Install root dependencies
npm install

# Build the Project
npm run build

# Start both frontend and backend together
npm run start
