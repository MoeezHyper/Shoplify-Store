# 🛍️ Product Management App

A full-stack web application for managing products. Built with **React**, **Chakra UI**, **Express.js**, **MongoDB**, and **Vite**.

---

## 🚀 Features

- Add, view, and delete products
- Responsive UI with Chakra UI
- Global state management using Zustand
- RESTful API built with Express.js
- MongoDB for data persistence
- Toast notifications for better UX
- Unified dev server (`npm run start`) for both frontend & backend

---

## 🧑‍💻 Tech Stack

**Frontend:**
- React + Vite
- Chakra UI V3
- Zustand

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose

---

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Create new product
DELETE	/api/products/:id	Delete a product by ID
PUT  /api/products/:id	Updates a product by ID

---

### ⚙️ Installation & Run

```bash
# Install root dependencies
npm install

# Start both frontend and backend together
npm run start
