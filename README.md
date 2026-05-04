# Gestion Formateurs / Stagiaires - CRUD

A full-stack web application for managing trainers (formateurs) and trainees (stagiaires), with complete CRUD functionality (Create, Read, Update, Delete).

## Project Focus

This project emphasizes three core principles:

1. **Clean & Readable Code** — Every function, variable, and module is named explicitly. The code is self-documenting, with a logical and consistent structure.
2. **Separation of Concerns** — Clear modular architecture:
   - **Classes** — Data models (`Stagaire`, `Formateur`)
   - **Components** — Display & UI logic (tables, forms, alerts, spinners)
   - **Services** — API communication (GET, POST, PUT, DELETE)
   - **Utils** — Utility functions (validation, error handling, input extraction)
   - **Routes** — Server-side endpoints
   - **Config** — Configuration (database connection)
3. **Rigorous Error Handling** — Every error is caught, identified, and made visible. Nothing slips through the cracks:
   - Try/catch on every async operation
   - Client-side validation before submission
   - Visual alerts for the user
   - Console logs for debugging

Features

- Toggle between Trainee and Trainer views
- Add a new trainee or trainer via modal form
- Edit existing entries
- Delete entries
- Real-time search (by name, filière/specialty, email)
- Visual f

## Tech Stack

### Frontend

- Vanilla JS (ES Modules)
- jQuery (DOM manipulation, event delegation, animations)
- Day.js (date formatting)
- Material Design Icons

### Backend

- Node.js + Express
- MySQL (via mysql2/promise)
- dotenv (environment variables)
- CORS
