🛒 Mini E-Commerce App (React + TypeScript)
📌 Project Overview

This is a Mini E-Commerce web application built using React and TypeScript.
The app fetches product data from FakeStoreAPI and allows users to browse, search, and filter products by category.

This project focuses on learning modern React development, proper TypeScript usage, and API integration.

✨ Features

Fetches products from FakeStoreAPI

Displays products in a clean card layout

Search products by title (case-insensitive)

Filter products by category

Responsive UI using Tailwind CSS

Component-based architecture

Type-safe code using TypeScript interfaces

⚠️ Note: Pagination is not implemented in this version.

🛠 Tech Stack

React 18

TypeScript

Vite (Build Tool)

Tailwind CSS

FakeStoreAPI

🏗 Project Structure
src/
├── API/
│   └── productsApi.ts        # API logic & Product interface
├── components/
│   ├── Filters.tsx           # Search & category filters
│   ├── ProductCards.tsx      # Single product card
│   └── ProductList.tsx       # Filtered product list
├── App.tsx                   # Main application component
├── main.tsx                  # ReactDOM entry point

⚙️ How to Run Locally

Clone the repository

git clone <your-repository-url>
cd <project-folder>


Install dependencies

npm install


Start the development server

npm run dev


Open in browser

http://localhost:5173

📝 Notes

This project is built for learning purposes.

Products are fetched live from FakeStoreAPI (limited dataset).

Pagination, sorting, and loading states can be added in future improvements.

API keys are not required for FakeStoreAPI.
