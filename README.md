# **Siraat Frontend**

The frontend of **Siraat**, a social networking platform designed for Muslims, built using **Next.js (TypeScript), Redux Toolkit, Tailwind CSS**, and integrated with the **Siraat Backend (Spring Boot + NestJS).**

## **📌 Tech Stack**

| **Technology**                   | **Purpose**                                |
| -------------------------------- | ------------------------------------------ |
| **Next.js (TypeScript)**         | Full-stack React framework for SEO & SSR   |
| **Redux Toolkit**                | State management for user data & API calls |
| **Tailwind CSS**                 | Utility-first CSS framework for styling    |
| **NextAuth.js**                  | Authentication with JWT & OAuth            |
| **Axios**                        | API requests to backend services           |
| **WebSockets**                   | Real-time messaging & notifications        |
| **React Query**                  | API data fetching and caching              |
| **Server Actions (Next.js 14+)** | Backend logic inside Next.js               |

## **🚀 Getting Started**

### **1️⃣ Prerequisites**

Make sure you have the following installed:

- **Node.js 18+**
- **Yarn or npm**
- **Backend API running** (`siraat-backend`)

---

### **2️⃣ Clone the Repository**

```bash
git clone https://github.com/your-org/siraat-frontend.git
cd siraat-frontend
```

---

### **3️⃣ Environment Configuration**

Create an `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
NEXT_PUBLIC_WEBSOCKET_URL=ws://localhost:3000
NEXTAUTH_SECRET=yourauthsecret
NEXTAUTH_URL=http://localhost:3000
```

---

### **4️⃣ Install Dependencies**

```bash
yarn install
# or
npm install
```

---

### **5️⃣ Run the Frontend**

```bash
yarn dev
# or
npm run dev
```

This will start the frontend on `http://localhost:3000`

---

## **📌 Summary**

✅ **Next.js (TypeScript) with Redux Toolkit**  
✅ **Server-Side Rendering (SSR) for SEO**  
✅ **API calls using Axios**  
✅ **JWT Authentication & WebSockets**  
✅ **Docker + Vercel for fast deployment**
