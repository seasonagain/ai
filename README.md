# AI Battle Platform

This is a multi-technology stack AI battle game platform project that includes frontend display, backend services, and AI modules.

## 📁 Project Structure

```
ai/
├── app/                    # Vue 3 + Vite Demo Application
│   ├── src/
│   │   ├── App.vue        # Main application component
│   │   ├── main.js        # Application entry point
│   │   └── components/    # Vue components directory
│   ├── package.json       # Project dependencies configuration
│   └── vite.config.js     # Vite build configuration
│
├── backend/               # Spring Boot Backend Service
│   ├── src/main/java/com/ai/backend/
│   │   ├── BackendApplication.java    # Spring Boot startup class
│   │   └── controller/
│   │       └── pk/                    # PK battle related controllers
│   │           ├── BotInfoController.java  # AI bot information API
│   │           └── IndexController.java    # Page routing controller
│   ├── pom.xml           # Maven project configuration
│   └── src/main/resources/
│       ├── application.properties     # Application configuration
│       └── templates/                 # Thymeleaf template files
│
└── web/                   # Vue 3 + CLI Main Frontend Application
    ├── src/
    │   ├── App.vue        # Main application component
    │   ├── main.js        # Application entry point
    │   ├── router/        # Vue Router configuration
    │   ├── store/         # Vuex state management
    │   ├── views/         # Page view components
    │   │   ├── HomeView.vue           # Home page
    │   │   ├── AboutView.vue          # About page
    │   │   └── error/                 # Error pages
    │   └── components/    # Reusable components
    └── package.json       # Project dependencies configuration
```

## 🛠️ Technology Stack

### Frontend Technologies
- **app module**: Vue 3 + Vite (Modern build tool)
- **web module**: Vue 3 + Vue CLI + Vue Router + Vuex
- **UI Framework**: Bootstrap 5 + jQuery
- **Development Tools**: ESLint code linting

### Backend Technologies
- **Framework**: Spring Boot 2.7.1
- **Template Engine**: Thymeleaf
- **Build Tool**: Maven
- **Java Version**: JDK 8

## 🚀 Module Features

### app Module
- Basic Vue 3 demo application
- Uses Vite as build tool for fast development experience
- Contains basic Vue component examples

### backend Module
- Provides RESTful API services
- Contains PK battle related backend logic
- AI bot information management
- Uses Thymeleaf for frontend page rendering

### web Module
- Main frontend user interface
- Complete Single Page Application (SPA) architecture
- Includes routing management and state management
- Responsive design supporting multiple devices

## 📦 Quick Start

### Frontend Application Setup

**Start app module:**
```bash
cd app
npm install
npm run dev
```

**Start web module:**
```bash
cd web
npm install
npm run serve
```

### Backend Service Setup

```bash
cd backend
./mvnw spring-boot:run
```

Or using Maven:
```bash
cd backend
mvn spring-boot:run
```

## 🔧 Development Notes

1. **Port Configuration**:
   - app module runs on Vite default port
   - web module runs on Vue CLI default port
   - backend module runs on port 8080

2. **API Endpoints**:
   - Backend provides `/pk/getbotinfo/` endpoint for bot information
   - Uses Spring Boot auto-configuration features

3. **Build & Deploy**:
   - Frontend applications can be built for production using `npm run build`
   - Backend application can be packaged as executable JAR file via Maven

## 📋 Upcoming Features

- [ ] Complete AI battle logic
- [ ] Add user authentication system
- [ ] Implement real-time battle functionality
- [ ] Add leaderboard feature
- [ ] Complete game record functionality

---

> This is an AI battle platform project under development, aiming to provide a complete AI game battle solution.
