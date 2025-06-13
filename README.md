🧠 Kernel Thoughts – A Modern Blog Platform
Kernel Thoughts is a full-stack blogging platform where users can share insightful, technical content. Designed with scalability, security, and a clean developer experience in mind, this project demonstrates microservices architecture, modern frontend frameworks, and robust authentication.

🚀 Features
📝 Create, edit, and delete blog posts

🔒 Google OAuth 2.0 authentication

🧑‍💻 Author profiles with bio and social links

💬 Comment system (if implemented)

🔍 SEO-ready, with metadata and favicons

🎨 Responsive UI built with Tailwind CSS and shadcn/ui

📸 Upload profile pictures and render avatars

⚡ Fast loading with Next.js + dynamic routing

🧱 Tech Stack
Frontend

Next.js 14+ App Router

Tailwind CSS + shadcn/ui

TypeScript

Vercel (deployment)

Backend (Microservices)

Express.js

MongoDB & Mongoose

PostgreSQL (for comments or auth)

Redis (for caching)

Docker (for containerization)

Google OAuth (for secure login)

RabbitMQ (used for communication)

🗂 Architecture
The project is structured as multiple services:

User Service – Handles login, profile, and auth

Blog Service – Manages posts, titles, tags, and CRUD

Comment Service – Manages comments and discussions

🌐 Live Demo
🟢 Visit Kernel Thoughts
https://kt-blogs.vercel.app
