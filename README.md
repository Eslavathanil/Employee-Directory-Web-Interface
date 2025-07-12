# 👥 Employee Directory Web Interface

A responsive and interactive **Employee Directory Web Interface** developed using **HTML, CSS, JavaScript**, and **Freemarker templates**. This project enables adding, editing, deleting, searching, filtering, and sorting employee records with smooth UI functionality—all using client-side JavaScript and simulated data.

## 🚀 Features

- 🔍 Search by name or email
- 🎚️ Filter by department or role
- 🔃 Sort by first name or department
- ➕ Add employees (with form validation)
- ✏️ Edit employee details
- 🗑️ Delete employees with confirmation
- 🎨 Modal-based form UI
- 💻 Responsive layout for all screen sizes
- 🧾 Clean code with modular file structure

## 📁 Folder Structure

employee-directory/
├── src/
│ ├── templates/
│ │ └── index.ftlh # Main Freemarker template
│ └── static/
│ ├── css/
│ │ └── style.css # Styling for layout, modal, etc.
│ └── js/
│ ├── data.js # Mock employee data array
│ ├── app.js # App logic: add/edit/delete
│ └── filters.js # Filtering, sorting, and search
├── README.md # Project documentation

## 📦 Technologies Used

- ✅ HTML5, CSS3, JavaScript (Vanilla)
- ✅ Freemarker Template Engine (Simulated or Server-Rendered)
- ✅ Flexbox & Responsive Layout
- ✅ Modular JS structure
- ✅ Simulated backend using JavaScript arrays or `<#assign>` in Freemarker

## 📸 Screenshots

> Replace the paths below with actual screenshots in your repo (e.g., `/assets/dashboard.png`)

| 🧭 Dashboard | 📝 Add/Edit Modal |
|-------------|-------------------|
| ![Dashboard](assets/dashboard.png) | ![Modal](assets/modal.png) |

## 🧪 Running Locally

### Option 1: Static Mode (No backend)

1. Ensure your structure is like this:
src/templates/index.ftlh
src/static/js/app.js, filters.js, data.js
src/static/css/style.css


2. Run a local static server:
cd src/templates
npx serve .
# OR
python3 -m http.server

3. Open in browser:
http://localhost:8000/index.ftlh


Note: If Freemarker is not set up, rename index.ftlh to index.html and simulate the data with mockEmployees in data.js.
