# 🔧 Fixitronics - Electronics Service Sharing Web Application

---

## 🔗  Assignment-11-assignment_category_02 Live Site URL

**Live Client Site:** [https://fixitronics-app.web.app](https://fixitronics-app.web.app)

---

## ✨ Features

### ✅ General Features
- 🔄 **Dynamic Routing** with protected/private routes
- 🌗 **Light/Dark Theme Toggle**
- ⚠️ **404 Error Page** with redirect to homepage
- 🧭 **Navbar & Footer** with conditional content based on login state

### ✅ Authentication
- 🔐 Email/Password Authentication
- 🔓 Google Social Login
- 🔁 JWT token generation & usage
- ✅ Logged-in state persists using context

### ✅ Pages & Functionalities

#### 🏠 Home Page
- Hero Banner / Slider
- Popular Services Section (Max 6)
- "Show All" button to go to All Services
- Two extra sections with animation
- Protected "View Details" button

#### 🔍 All Services Page
- List of all added services
- Service search functionality
- "View Details" to see individual service (Private route)

#### 📄 Service Details Page (Private)
- Full info about a service
- Book Now functionality with modal/form
- Booking stored with `status: pending`

#### ➕ Add Service Page (Private)
- Add service form
- Automatically includes current user’s name, email, and photo
- Sends data to backend

#### 🛠 Manage Services (Private)
- Shows logged-in user’s services only
- Edit / Delete functionality with confirmation

#### 📚 Booked Services Page (Private)
- Shows all services **current user has booked**
- Message if no data found

#### ⚙️ Service-To-Do Page (Private)
- Shows services **booked from current user**
- Dropdown to change status: `pending → working → completed`

---

## 🛠 Tech Stack

| Frontend             | Backend             | Auth & Storage         |
|----------------------|---------------------|-------------------------|
| React + Vite         | Node.js + Express   | Firebase Auth + JWT     |
| TailwindCSS + DaisyUI| MongoDB             | Firebase Storage        |
| Framer Motion / AOS  | CORS + Cookie Parser|                         |


## 🔒 JWT Implementation

- On login, the client requests a token from the backend
- The token is stored in an HTTP-only cookie
- Token is sent with protected requests and validated in backend middleware

---

## 📱 Responsive Design

- Fully responsive across mobile, tablet, and desktop
- Accessible input fields and buttons

---

## 🧪 More Features

- ✅ Dynamic document titles using `react-helmet`
- ✅ SweetAlert2 for notifications
- ✅ Lottie animations for visual enhancement

---

## 🤝 Author

Developed by `Habibur Rahman` as part of  Assignment-11-assignment_category_02 
📧 Contact: rahman.habibur2421k@gmail.com

---