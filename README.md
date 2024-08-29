# Handheld Tracker

This is the frontend project for the Handheld Tracker. This application allows users to track and manage their handheld console items. The frontend consumes a backend API, which handles user authentication, console item management, and more. The backend part of this project can be found [here](https://github.com/rene-ruiz/handheld-tracker-drf).

## Features

- **User Authentication**: Sign up, sign in, and sign out functionalities with JWT-based token management.
- **Console Item Management**: View, modify, and add favorite handheld console items.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **Global State Management**: Context API is used to manage global states like authentication across the app.
- **Form Validation**: Implemented with custom form components and validation logic.
- **API Integration**: Services are created to interact with the backend API.

## Installation and Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rene-ruiz/handheld-tracker-next
   cd handheld-tracker-next
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install git hooks**:

   ```bash
   npm prepare
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at http://localhost:3000.

5. **Building for Production**:
   ```bash
   npm run build
   npm start
   ```

## Dependencies

- Next.js: The React framework for building server-rendered applications.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Husky: Git hooks that ensure code quality checks before committing.

To see the full list of dependencies see package.json file.
