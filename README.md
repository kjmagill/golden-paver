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
- [Automated Lead Management](#automated-lead-management)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
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
- **Automated Lead Management:** The contact form uses a serverless Google Apps Script to save submissions to a private Google Sheet and send an instant SMS notification to the business owners via Twilio.
- **Modern & Professional Aesthetics:** Custom-themed with Tailwind CSS to match the company's brand identity.

## Technologies Used

- **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.

## Automated Lead Management

This project features a robust, serverless backend for handling contact form submissions, ensuring that new leads are captured and acted upon immediately. The system is built using Google Apps Script, providing a cost-effective and maintenance-free solution.

When a potential customer submits the "Request Your Free Estimate" form:

1.  **Data is Sent to a Private Google Sheet:** The submission data—including name, address, and project details—is securely transmitted to a private Google Sheet. This sheet acts as a simple and effective Customer Relationship Management (CRM) system, allowing the business owners to track and manage all incoming leads in one organized place.

2.  **Instant SMS Notifications via Twilio:** Simultaneously, the script triggers an API call to Twilio, sending an instant SMS notification to the business owners' phone line. This alert contains the new lead's essential information, enabling a rapid response and improving the chances of converting the inquiry into a customer.

This two-pronged approach ensures that no lead is missed and that follow-up is both timely and efficient. The form also includes a "honeypot" field for basic spam prevention.

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

## Configuration

To use the automated lead management feature with your own Google Sheet and Twilio account, you will need to configure the contact form endpoint.

1.  **Set up Google Apps Script:** Create a web app using Google Apps Script that saves form data to a Google Sheet and optionally triggers a Twilio SMS.
2.  **Deploy the Script:** Deploy your script as a web app and copy its unique URL.
3.  **Update the Endpoint:** Open the `components/Contact.tsx` file and replace the placeholder URL in the `spreadsheetEndpoint` constant with your own Google Apps Script URL:

    ```javascript
    // In components/Contact.tsx
    const spreadsheetEndpoint = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
    ```

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

## Contributing

Contributions are welcome! If you have suggestions for improving the project, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for details.

## Author

This website was designed and developed by:

- **KJ Magill** - [kjmagill.com](https://kjmagill.com)
- **Cape May Web Design** - [capemaywebdesign.com](https://capemaywebdesign.com)
