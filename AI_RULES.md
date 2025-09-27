# AI Assistant Rules for Prompt Architect App

This document outlines the technical stack and specific library usage guidelines for developing the Prompt Architect application. Adhering to these rules ensures consistency, maintainability, and leverages the strengths of our chosen technologies.

## Tech Stack Overview

*   **React:** The application is built using React for a component-based, declarative UI.
*   **TypeScript:** All new code should be written in TypeScript for type safety and improved developer experience.
*   **Tailwind CSS:** Used for all styling, providing utility-first CSS for rapid and consistent UI development.
*   **shadcn/ui & Radix UI:** Pre-built, accessible, and customizable UI components are available from shadcn/ui (which is built on Radix UI).
*   **Lucide React:** A library for vector icons, integrated for consistent iconography.
*   **React Router:** Manages client-side routing within the application.
*   **Supabase:** Our backend-as-a-service for database, authentication, and serverless functions.
*   **Vercel Serverless Functions:** Used for backend logic, API integrations (like fetching holidays), and interacting with Supabase.
*   **react-hot-toast:** For displaying user notifications and feedback.

## Library Usage Guidelines

To maintain a cohesive and efficient codebase, please follow these guidelines when implementing new features or modifying existing ones:

*   **UI Components:**
    *   Prioritize using components from `shadcn/ui` for common UI elements (buttons, forms, modals, etc.).
    *   If a specific `shadcn/ui` component doesn't fit the need, create new, small, and focused React components.
    *   All custom components *must* be styled using `Tailwind CSS` classes.
    *   Avoid modifying `shadcn/ui` component files directly; create wrappers or new components if customization is extensive.
*   **Styling:**
    *   Exclusively use `Tailwind CSS` for all styling. Do not write custom CSS in separate `.css` files unless absolutely necessary for global styles (e.g., `index.css` for base styles).
    *   Ensure designs are responsive by utilizing Tailwind's responsive utility classes.
*   **Icons:**
    *   Use icons from the `lucide-react` library.
*   **Routing:**
    *   Manage all client-side navigation using `React Router`. Keep route definitions within `src/App.tsx`.
*   **Backend & Database:**
    *   All data storage and retrieval should be handled via `Supabase`.
    *   Client-side interactions with Supabase should use the `@supabase/supabase-js` library.
    *   For server-side logic, API-to-API communication, or handling sensitive data, implement `Vercel Serverless Functions` (located in the `api/` directory).
    *   **Security:** Always enable Row Level Security (RLS) on all Supabase tables and define appropriate policies for `SELECT`, `INSERT`, `UPDATE`, and `DELETE` operations.
*   **Notifications:**
    *   Use `react-hot-toast` for all toast notifications (success, error, loading, etc.).
*   **File Structure:**
    *   Place pages in `src/pages/`.
    *   Place components in `src/components/`.
    *   Ensure new components or hooks are created in their own dedicated files.
    *   Keep directory names all lower-case.
*   **Code Quality:**
    *   Write clean, simple, and elegant code. Avoid over-engineering.
    *   Ensure all new features are fully functional and complete; no partial implementations or `TODO` comments for the user.
    *   Do not use `try/catch` for error handling unless explicitly requested, to allow errors to bubble up for debugging.