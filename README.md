# 🌍 Digital World Clock with Horizontal Carousel

A sleek, responsive, and modern Digital Clock application built using **HTML**, **Tailwind CSS**, and vanilla **JavaScript**. This application features a prominent centered local clock display along with a custom-built, interactive horizontal world clock track showcasing real-time data across different global time zones.

(https://vanshsomal.github.io/Digital-Clock/)

## ✨ Features

* **Real-time Master Clock:** Displays your local system time and date formatted in a highly readable, elegant digital layout.
* **Global Time Zone Cards:** Includes persistent tracking for multiple global cities across different continents (e.g., New York, London, Tokyo, Helsinki, Moscow, Cairo, and Antarctica).
* **Custom Horizontal Track UI:** Ditch the ugly default browser scroll bars! The app uses a customized horizontal slide layout that keeps the main display uncluttered.
* **Smooth Button Navigation:** Integrated sleek Left (`❮`) and Right (`❯`) trigger arrows to effortlessly navigate through global cities with smooth scroll physics.
* **Fully Responsive Design:** Crafted with mobile-first Tailwind utility principles to scale down components seamlessly on compact viewports without breaking layout structures.

## 🛠️ Tech Stack

* **Structure:** HTML5 (Semantic Elements)
* **Styling:** Tailwind CSS (via CLI / standalone output)
* **Logic:** Vanilla JavaScript (ES6+ integration using `Intl.DateTimeFormat`)

## 📁 Project Structure

```text
├── index.html        # Main web layout structure
├── script.js         # Core JS clock updating and carousel loop logic
├── input.css         # Custom Tailwind directives
└── output.css        # Compiled production stylesheet used by index.html