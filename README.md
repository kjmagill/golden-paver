# Golden Paver Restorations

A modern, responsive marketing website for Golden Paver Restorations, a premier paver sealing and repair company serving the South Jersey shore.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![Website Screenshot](https://i.postimg.cc/3RxRYdp2/j2.jpg)](https://golden-paver.vercel.app/)

> This project is a single-page marketing website designed to showcase the company's services, display a gallery of their work, build trust through testimonials, and capture leads via a contact form.

**[Visit the Live Demo](https://golden-paver.vercel.app/)**

## Table of Contents

- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Form Submission & SMS Notifications](#form-submission--sms-notifications)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Author](#author)

## Key Features

- **Fully Responsive Design:** A seamless experience across desktops, tablets, and mobile devices.
- **Performance Optimized:** Engineered for a fast user experience with techniques like:
    - **Prioritized Loading:** Critical above-the-fold imagery is preloaded for rapid initial rendering (Improved LCP).
    - **Lazy Loading:** Off-screen gallery images are loaded on-demand as the user scrolls.
    - **Layout Shift Prevention:** Images have explicit dimensions to prevent content jumping during load (Improved CLS).
    - **Efficient Rendering:** React components are memoized to prevent unnecessary re-renders.
- **Interactive Before & After Sliders:** A powerful visual tool to demonstrate the quality and impact of the restoration services.
- **Dynamic Components:** Built with React for a modular, maintainable, and interactive user interface.
- **Accessible UI:** Designed with accessibility in mind, incorporating ARIA roles, semantic HTML, and keyboard navigation support.
- **Secure Lead Capture Form:** An integrated contact form that securely submits data to a backend endpoint for processing, complete with client-side validation and clear user feedback.
- **Modern & Professional Aesthetics:** Custom-themed with Tailwind CSS to match the company's brand identity.

## Technologies Used

- **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.

## Form Submission & SMS Notifications

To ensure security and reliability, the contact form does not send SMS messages directly from the user's browser. Instead, it is configured to send the form data to a backend API endpoint.

### Current Implementation

- The form makes a `POST` request to `/api/send-sms` with the user's information.
- Robust error handling and user feedback (submitting, success, error states) are implemented on the frontend.

### Completing the SMS Integration (For Developers)

To make the SMS notifications fully functional, a backend endpoint must be created to handle the incoming `POST` request. Here is the required workflow:

1.  **Create a Server-Side Endpoint:** Set up a backend route or a serverless function that listens for `POST` requests at `/api/send-sms`. This can be done using technologies like Node.js with Express, or serverless platforms like Vercel or Netlify Functions.

2.  **Choose an SMS Provider:** Sign up for an SMS gateway service like [Twilio](https://www.twilio.com/) or [Vonage](https://www.vonage.com/communications-apis/sms/).

3.  **Implement the Logic:** In your backend function:
    a. Receive the JSON payload from the form submission.
    b. Securely use your SMS provider's API key (stored as an environment variable, **never** in the frontend code).
    c. Format the form data into a structured message.
    d. Use the provider's SDK or API to send the formatted message to the desired phone numbers (`609-408-5000` & `609-780-0536`).
    e. Return a success (e.g., `200 OK`) or error (e.g., `500 Internal Server Error`) response to the frontend.

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
│   ├── FadeIn.tsx
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
