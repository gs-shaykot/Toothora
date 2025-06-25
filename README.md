# [🦷 Toothora – Dental Clinic Website ](https://toothora.netlify.app/) 
A modern, responsive dental clinic web application built using **React-Vite**, **Tailwind CSS + DaisyUI**, **Node.js**, **Express**, and **EmailJS**.

---

## 🛠 Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, DaisyUI  
- **Backend**: Node.js, Express.js  
- **Email Handling**: EmailJS (for contact/appointment forms)  
- **Deployment**: Netlify (frontend), Render (backend)  

---

## 🎯 Objective

Toothora is a clean and user-friendly web application built for a fictional dental clinic. It showcases services, collects appointment requests, and builds trust through professional presentation. The goal was to design and develop a modern single-page application (SPA) that follows good frontend and backend integration practices with form validation and email functionality.

---

## 🔓 Public Pages & Features

### 🏠 Home Page
- Hero section with call-to-action for appointments  
- List of services offered (e.g., Tooth Cleaning, Braces, Surgery)  
- Highlight of experienced doctors  
- Testimonials slider  
- Contact CTA in the footer  

### 📄 About
- Overview of the clinic  
- Mission & values  
- Images and stats to build trust  

### 📋 Services
- Grid layout of all dental services  
- Service detail sections with descriptions and icons  

### 📞 Contact Page
- Contact form (Name, Email, Message)  
- Integrated with **EmailJS** for direct email delivery  
- Contact details (location, phone, email)  
- Embedded Google Map (optional)

---

## 📩 Appointment Form
- Collects user input: `Name`, `Email`, `Phone`, `Service`, and `Message`  
- Sends appointment details with serial number via **EmailJS**  
- Frontend-only form submission with validation and confirmation toast

---

## ✨ Key Features

1. 📱 **Fully responsive design** – Mobile-first layout  
2. 💬 **EmailJS integration** – Sends contact/appointment requests without backend handling  
3. 🎨 **Tailwind + DaisyUI** – Beautiful, customizable component design  
4. ⚡ **Vite** – Fast development and build process  
5. 🚀 **Deployed frontend/backend** – Easy access for demo/review  
6. 🔐 **Environment variables** – Secure handling of EmailJS credentials  

---

## 🔗 Live Site

[🦷 Toothora Live (Demo)](https://toothora.netlify.app/)   
[🦷 Toothora Server Repo](https://github.com/gs-shaykot/Toothora_Server)
---

## 📂 Folder Structure Overview

```
toothora/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── assets/
│   └── App.jsx
├── server/
│   └── index.js (Express backend)
├── .env
├── vite.config.js
└── README.md
```

## ✅ Future Improvements (Optional)

- Admin panel for managing appointment requests  
- Database integration (MongoDB)  
- Login for patients and staff  
- Blog or FAQ section  

---

## 👤 Developer

**Name**: GS SHAYKOT
**Contact**: (https://gsshaykot.tech)
