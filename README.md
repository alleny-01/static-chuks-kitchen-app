# Food E-commerce App

This repository contains a static food e-commerce web application built using modern frontend tooling. The project showcases a fully responsive user interface where customers can explore, search, and review meals, place orders, and manage account actions without a backend server. It's intended as a demonstration of UI design, component structure, and state management using React and Vite.

# Live link
View the live link of the project here

**[Hosted Link](https://static-chuks-kitchen-app.vercel.app/)**

## Project Overview

- **Static Application**: All data is hardcoded or retrieved from static assets. No backend or API is required.
- **Pages Included**:
  - HomePage Landing page with search and popular categories.
  - ExplorePage Browse meal categories and filter options.
  - FoodDetailsPage View details for a specific dish.
  - OrdersPage & OrderSummary Simulated ordering and summary screens.
  - SignInPage / SignUpPage Authentication mockups.
  - ConfirmationPage & DeliveryDetails Checkout and order confirmation flows.
  - PaymentPage Static payment screen.
  - LoaderPage Loading indicator page.
  - WelcomePage Intro screen after login.

- **Components**: Structured under src/components with specialized folders for Explore, Home, and layout (navbar, footer).
- **public / Images**: Images and other static resources under src/assets.
- **Styles**: Component-specific and page-specific CSS under src/styles and nested folders.

## 🛠 Technologies & Tools

- **[React](https://reactjs.org/)** – Frontend library for building UI components.
- **[React Router](https://reactrouter.com/)** – Client-side routing for page navigation within the app.
- **[Vite](https://vitejs.dev/)** – Build tool and development server, providing fast startup and HMR.
- **ESLint** – Configured for linting JavaScript/JSX to maintain code quality (`eslint.config.js`).
- **CSS Modules/Plain CSS** – Styles are managed with standard `.css` files scoped by component structure.
- **Node.js & npm** – Package manager for dependencies defined in `package.json`.

## Getting Started

1. **Clone the repository**
   `ash
git clone https://github.com/yourusername/food-ecommerce-app.git
cd food-ecommerce-app
`

2. **Install dependencies**
   `ash
npm install
`

3. **Run the development server**
   `ash
npm run dev
`

   Open [http://localhost:5173](http://localhost:5173) to view in the browser. The app reloads on file changes.

4. **Build for production**
   `ash
npm run build
`

   The static files will be generated in the dist folder.

## Repository Structure

`src/
 public/ Images    # Images and other static resources
 components/       # Reusable UI pieces organized by feature
 pages/            # Route-level components representing pages
 styles/           # CSS files, one per component/page
 App.jsx           # Root component with routing logic
 main.jsx          # Entry point where React mounts`

## Notes

- This project is designed for learning and demonstration purposes. There is no real authentication or payment processing.
- Feel free to extend by connecting a backend or integrating real APIs.
- Accessibility and SEO considerations should be added for production usage.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for enhancements.

---

Made with by the developer to showcase front-end development skills using React and Vite.
