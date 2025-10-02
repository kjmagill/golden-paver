# Golden Paver Restorations

A modern, responsive marketing website for Golden Paver Restorations, a premier paver sealing and repair company serving the South Jersey shore.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![Website Screenshot](https://i.postimg.cc/3RxRYdp2/j2.jpg)](https://www.goldenpaverrestorations.com/)

> This project is a single-page marketing website designed to showcase the company's services, display a gallery of their work, build trust through testimonials, and capture leads via a contact form.

**[Visit the Live Demo](https://www.goldenpaverrestorations.com/)**

## Table of Contents

- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Author](#author)

## Key Features

- **Fully Responsive Design:** A seamless experience across desktops, tablets, and mobile devices.
- **Interactive Before & After Sliders:** A powerful visual tool to demonstrate the quality and impact of the restoration services.
- **Dynamic Components:** Built with React for a modular, maintainable, and interactive user interface.
- **Accessible UI:** Designed with accessibility in mind, incorporating ARIA roles, semantic HTML, and keyboard navigation support.
- **Lead Capture Form:** An integrated contact form with client-side validation and clear submission status feedback.
- **Modern & Professional Aesthetics:** Custom-themed with Tailwind CSS to match the company's brand identity.

## Technologies Used

- **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need a modern web browser and a simple local server to handle module imports correctly. If you have Node.js or Python installed, you can use the commands below.

### Installation & Launch

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/golden-paver-restorations.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd golden-paver-restorations
    ```
3.  **Start a local server:**

    *Using Python:*
    ```sh
    python3 -m http.server
    ```
    *Or using Node.js with the `serve` package:*
    ```sh
    npx serve .
    ```
4.  **Open your browser** and navigate to `http://localhost:8000` (or the port specified by your server).

## Project Structure

The project is organized into modular components for easy maintenance and scalability.

```
/
├── components/
│   ├── BeforeAfterSlider.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Logo.tsx
│   ├── Services.tsx
│   └── Testimonials.tsx
├── App.tsx
├── index.html
├── index.tsx
└── README.md
```

## Author

This website was designed and developed by:

- **KJ Magill** - [kjmagill.com](https://kjmagill.com)
- **Cape May Web Design** - [capemaywebdesign.com](https://capemaywebdesign.com)
