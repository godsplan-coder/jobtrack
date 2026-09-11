# JobTrack

A simple and modern **Job & Internship Application Tracker** built with React and Vite.

JobTrack helps you keep track of the opportunities you've applied to, monitor application statuses, and manage your applications from one place.

## 🚀 Features

* 📊 Dashboard with application overview
* 💼 View all job and internship applications
* ➕ Add new applications
* ✏️ Edit existing applications
* 🔍 View application details
* 🏷️ Track application status
* 🧭 Client-side routing with React Router
* 💾 Application state management with React Context
* 📱 Responsive interface
* 🎨 Clean UI built with Tailwind CSS
* ⚡ Fast development and production builds with Vite

## 🛠️ Tech Stack

* **React**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **React Context API**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**

## 📂 Project Structure

```text
src/
├── components/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── StatusBadge.jsx
│
├── context/
│   └── ApplicationContext.jsx
│
├── pages/
│   ├── AddApplication.jsx
│   ├── ApplicationDetails.jsx
│   ├── Applications.jsx
│   ├── Dashboard.jsx
│   ├── EditApplications.jsx
│   └── Notfound.jsx
│
├── App.jsx
├── index.css
└── main.jsx

public/
├── favicon.svg
└── icons.svg

index.html
vite.config.js
package.json
```

## 🧭 Routes

| Route                    | Description              |
| ------------------------ | ------------------------ |
| `/`                      | Dashboard                |
| `/applications`          | View applications        |
| `/applications/add`      | Add a new application    |
| `/applications/:id`      | View application details |
| `/applications/:id/edit` | Edit an application      |
| `*`                      | 404 page                 |

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/godsplan-coder/jobtrack.git
```

### 2. Navigate into the project

```bash
cd jobtrack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🎯 What I Learned

This project was built to practice and apply core React concepts, including:

* Component-based architecture
* Props and reusable components
* React Router
* Dynamic routes
* Nested/layout routes
* React Context API
* State management
* Forms and controlled inputs
* CRUD-style application flows
* Conditional rendering
* Responsive UI development
* Production deployment with Vercel

## 🔮 Future Improvements

Possible future features include:

* User authentication
* Backend API
* PostgreSQL database
* Search and filtering
* Application deadline reminders
* Job bookmarking
* Resume management
* Application analytics
* Cloud deployment with a backend
* AI-powered job matching

## 🌐 Live Demo

**Coming soon — deployed with Vercel.**

## 👨‍💻 Author

**Abhinav A**

Built as a practical React project to strengthen frontend development and prepare for full-stack and AI engineering projects.
