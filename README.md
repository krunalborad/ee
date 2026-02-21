# 📄 Real-Time Collaborative Editor

A full-stack **Real-Time Collaborative Text Editor** built using the MERN stack.  
Multiple users can edit the same document simultaneously with live updates.

## 🚀 Features

- ✨ Real-time text synchronization
- 👥 Multi-user collaborative editing
- 🔗 Shareable document links
- 💾 Auto document saving
- 🗄 MongoDB database storage
- 🎨 Modern responsive UI
- 🔄 Live updates using Socket.io

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Quill
- Axios
- Socket.io Client

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB (Mongoose)

---

## 📂 Project Structure

```
collab-editor/
│
├── frontend/   (React + Vite)
├── backend/    (Node + Express + MongoDB)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/collab-editor.git
cd collab-editor
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🔗 How It Works

1. A new document is created and stored in MongoDB.
2. Users join the same document via URL.
3. Socket.io enables real-time content sharing.
4. Changes are saved in MongoDB for persistence.

---

## 🧠 Learning Outcomes

- Real-time communication with WebSockets
- Database integration with MongoDB
- Full-stack MERN application development
- State synchronization across multiple clients

---

## 📸 Demo

<img width="642" height="834" alt="Screenshot 2026-02-20 202533" src="https://github.com/user-attachments/assets/cb235d93-209c-4238-8347-c0b59630a26e" />


## 🌟 Future Improvements

- User authentication
- Version history
- Export to PDF/DOCX
- Live cursor tracking
- Dark mode toggle

## ✅ Conclusion

The Real-Time Collaborative Editor successfully demonstrates the implementation of a full-stack web application using the MERN stack. The project enables multiple users to edit the same document simultaneously with live synchronization powered by Socket.io.
By integrating MongoDB for persistent storage, the application ensures that document data is securely saved and retrievable even after refresh or server restart. The project highlights key concepts such as real-time communication, REST API integration, database management, and modern UI development using React.
This project provided hands-on experience in building scalable, real-world applications and understanding how collaborative platforms like Google Docs function internally. It serves as a strong foundation for developing advanced features such as authentication, version control, and AI-assisted editing in the future.
