Notesync

Notesync is a secure and responsive notes-taking application designed for easy and accessible note management across devices. With features like user authentication, CRUD operations, smooth animations, and efficient state management, Notesync offers a seamless and engaging experience for users to organize and access their notes anytime, anywhere.

Features

    User Authentication
        Integrated a secure authentication system using Appwrite, providing encrypted and robust user login and registration for data protection.

    Anywhere Access
        Designed with responsiveness in mind, Notesync allows users to access their notes on any device, ensuring flexibility in note-taking and management.

    Intuitive Sign-Up Flow
        The sign-up flow is smooth and guides users through the registration process, capturing necessary information while maintaining ease of use.

    Animations with Framer Motion
        Framer Motion provides smooth transitions and animations across the app, adding visual appeal and enhancing user engagement.

    Centralized State Management with Redux Toolkit
        Redux Toolkit is used for handling application state, ensuring efficient data flow, improved performance, and better maintainability.

    CRUD Operations
        Full CRUD functionality allows users to create, view, edit, and delete notes. Users can also download notes for offline access, enhancing convenience.

Tech Stack

    Frontend: React.js, Tailwind CSS (for responsive and modern styling)
    Backend: Appwrite (for authentication, database, and other backend services)
    State Management: Redux Toolkit
    Animations: Framer Motion

Installation

To run this project locally, you will need Node.js and npm installed.

    Clone the Repository

git clone https://github.com/tusharr911/mini-docs-app.git

Install Dependencies

npm install

Environment Variables

    Create a .env file in the root directory and add necessary variables for Appwrite configuration, such as project ID and endpoint. .env.sample file is provided for reference.

Run the Application

npm start

Build for Production

    npm run build

Requirements

    Node.js (v14 or higher)
    npm (v6 or higher)
    Appwrite Account: Set up and configure Appwrite for authentication and database needs.

Contribution Guidelines

We welcome contributions! Please fork the repository, create a new branch for your feature, make your changes, and open a pull request.
License

This project is licensed under the MIT License.