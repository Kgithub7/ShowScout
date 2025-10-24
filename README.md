# ShowScout

ShowScout is a Single-Page Application built with React and Vite that functions as a client for the TVMaze API. It enables users to search for TV shows and view detailed information on these shows. The project is structured with a clear separation of components and pages, featuring reusable UI elements like navigation bars and search bars, and it is styled for a fully responsive layout.

## Features

* **Homepage:** A clean landing page with a prominent title and  search bar.
* **Dynamic Search Results Page:**  Search results page that displays all matching TV shows in a clean, responsive grid layout. 
* **Detailed Show Information:** A dedicated page for each show that displays the it's poster, title, and summary in a two-column layout, with a conditional link to it's official website.
* **Responsive Design:** The application is styled with a responsive layout that adapts to various screen sizes, from mobile devices to desktops.
* **API Integration:** Uses `axios` to make asynchronous requests to the public TVMaze API to fetch all television show data.
* **Client-Side Routing:** Leverages `react-router-dom` for seamless navigation between pages without a full page reload.
* **Iconography:** Employs Font Awesome React components for clean and scalable vector icons throughout the application.
* **Code Quality:** ESLint is configured to enforce a consistent code style and identify potential errors, ensuring the codebase is clean and maintainable.

## Tech Stack

- React
- Vite
- Axios
- Font Awesome
- React Router DOM
- ESLint

## Project Structure

- `index.html` — Application HTML shell
- `src/` — Application source (components, pages, assets)
- `src/main.jsx` — Application JavaScript entry point
- `docs/`— Built static site files
- `package.json` — Scripts and dependencies

## Getting started

Requirements: Node.js 16+ and npm

1. Clone the repository.

2. Install dependencies with `npm install`.

3. Run the development server with `npm run dev`.

## License

This project is licensed under the MIT License.