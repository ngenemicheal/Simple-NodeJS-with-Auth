# Node.js Modular MVC Application

## Overview
This is a modular Node.js application built with Express and EJS, following the MVC (Model-View-Controller) architecture pattern. The application includes user authentication, admin functionality, and a clean, organized codebase structure.

## Project Structure
```
├── app.js                  # Application entry point
├── config/                 # Configuration files
│   ├── app.js              # App configuration
│   └── database.js         # Database configuration
├── controllers/            # Controllers for handling business logic
│   ├── adminController.js  # Admin-related controllers
│   ├── authController.js   # Authentication controllers
│   ├── indexController.js  # Home page controllers
│   └── userController.js   # User-related controllers
├── middleware/             # Custom middleware
│   └── auth.js             # Authentication middleware
├── models/                 # Database models
│   └── db.js               # Database connection
├── public/                 # Static assets
│   ├── script.js           # Client-side JavaScript
│   └── styles.css          # CSS styles
├── routes/                 # Route definitions
│   ├── admin.js            # Admin routes
│   ├── auth.js             # Authentication routes
│   ├── index.js            # Home page routes
│   └── user.js             # User routes
└── views/                  # EJS templates
    ├── admin/              # Admin views
    ├── auth/               # Authentication views
    ├── partials/           # Reusable view components
    ├── user/               # User views
    ├── about.ejs           # About page
    └── index.ejs           # Home page
```

## Features
- **Modular Architecture**: Clean separation of concerns using MVC pattern
- **User Authentication**: Login, registration, and session management
- **Admin Panel**: Separate admin login and dashboard
- **Middleware**: Authentication and route protection
- **Templating**: EJS templates with partials for code reuse
- **Database**: MySQL integration with connection pooling

## Prerequisites
- Node.js (v12 or higher)
- MySQL Server
- npm

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ngenemicheal/Simple-NodeJS-with-Auth.git
   cd test-project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up the database
   - Create a MySQL database named `node_js_test_project_db`
   - Update database configuration in `config/database.js` if needed

4. Start the application
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. Access the application
   - Open your browser and navigate to `http://localhost:3000`

## API Routes

### Authentication
- `GET /login` - Login page
- `POST /login` - Handle login
- `GET /register` - Registration page
- `POST /register` - Handle registration
- `GET /logout` - Logout user

### User
- `GET /user/dashboard` - User dashboard (protected)

### Admin
- `GET /admin/login` - Admin login page
- `POST /admin/login` - Handle admin login
- `GET /admin/dashboard` - Admin dashboard (protected)

### General
- `GET /` - Home page
- `GET /about` - About page

## Development

### Adding New Routes
1. Create a new controller in the `controllers` directory
2. Create a new route file in the `routes` directory
3. Import and use the route in `app.js`

### Adding New Views
1. Create a new EJS file in the appropriate directory under `views`
2. Use partials for consistent header/footer

## License
MIT
