# Gamor Proyect
This proyect is split in two parts:
- **/client** (frontend)
- **/server** (backend)

---

# Requirements: 
Make sure you've installed:
- Node.js (>= 18)
- npm

---

## 1. Install dependencies
### 1.1 Client
```bash
cd client
npm install
```

### 1.2 Server
```bash
cd server
npm install
```

## 2. Enviroment configuration
### 2.1 Server
Inside the /server folder, you will find a file named .env.example.
Rename it to .env and fill in the following variables:
```bash
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
BACKEND_URL=http://localhost:3000
```
⚠️ For BACKEND_URL, if you want to share the backend with other devices on your local network, replace localhost with the IP address of the machine running the server.
Example:
```bash
BACKEND_URL=http://192.168.1.100:3000
```
Run the server with:
```bash
npm run dev
```

### 2.2 Client
Inside the /client folder, you will find a file named env.development.example.
Rename it to .env.development and set:
```bash
VITE_BACKEND_BASE_URL=http://localhost:3000
```
⚠️ Important: This URL must match the backend BACKEND_URL.

## 3. Running the project
### 3.1 Client
```bash
cd client
npm run dev
```
Or to share on your local network:
```bash
npm run dev -- --host
```
### 3.2 Server
```bash
cd server
npm run dev
```

## Notes
- Both routes (BACKEND_URL in the backend and VITE_BACKEND_BASE_URL in the frontend) must match for the app to work correctly.
- Once the .env files are properly configured, you can run the application.
