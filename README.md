# GearNest Backend

Backend API for **GearNest**, an automobile spare parts marketplace connecting customers with suppliers in Pakistan.

## 🚀 Features
- User authentication with JWT (Login, Signup)
- Role-based access (Customer, Supplier, Admin)
- Product management (CRUD operations)
- Order management (Place, track, update orders)
- User profile management
- Secure password hashing with bcrypt
- Image upload handling (Multer)
- Email notifications (Nodemailer)
- Centralized error handling
- MongoDB integration with Mongoose

---

## 📂 Project Structure
GearNest-Backend/
├── config/ # Configuration files
│ ├── db.js # MongoDB connection setup
│ ├── env.js # Environment variables loader
├── controllers/ # Route controllers
│ ├── authController.js # Login, signup, JWT auth
│ ├── productController.js
│ ├── orderController.js
│ ├── userController.js
├── models/ # Database models
│ ├── user.js
│ ├── product.js
│ ├── review.js
├── routes/ # API routes
│ ├── authRoutes.js
│ ├── productRoutes.js
│ ├── orderRoutes.js
│ ├── userRoutes.js
├── middleware/ # Middleware functions
│ ├── authMiddleware.js
│ ├── errorHandler.js
├── utils/ # Utility functions
│ ├── sendEmail.js
│ ├── fileUpload.js
├── uploads/ # Uploaded images
├── logs/ # Logs (errors, requests)
├── .env # Environment variables
├── package.json # Dependencies & scripts
├── server.js # Main server entry point
└── README.md # Documentation


---

## ⚙️ Installation & Setup
### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/gearnest-backend.git
cd gearnest-backend

2️⃣ Install dependencies
bash

npm install

3️⃣ Setup environment variables
Create a .env file in the root directory and add:

ini

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
PORT=5000

4️⃣ Run the server
bash

npm run dev


##############################################

API Endpoints
Auth
POST /api/auth/signup – Create account

POST /api/auth/login – Login user

Products
GET /api/products – Get all products

POST /api/products – Create new product

PUT /api/products/:id – Update product

DELETE /api/products/:id – Delete product

Orders
POST /api/orders – Place new order

GET /api/orders/:id – Get order details

################################################

Tech Stack
Node.js + Express.js – Backend framework

MongoDB + Mongoose – Database & ODM

JWT – Authentication

Bcrypt.js – Password hashing

Multer – File uploads

Nodemailer – Email sending

Morgan – Request logging

Dotenv – Environment variables

##############################################

License
This project is licensed under the MIT License – see the LICENSE file for details.

