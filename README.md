# KnitK E-commerce Website

Welcome to the KnitK E-commerce website repository on GitHub. This project is a React-based e-commerce platform for KnitK, a brand specializing in knitting patterns and test knitting calls. In this repository, you'll find all the source code and assets related to the website.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Product Categories**: The website features a navigation bar with a filter, allowing users to easily browse and filter products by categories, including knitwear, patterns, test calls, and all.

2. **Product Detail Pages**: Each product has a dedicated detail page where users can find comprehensive information about the item, including descriptions, images, and pricing.

3. **Test Knitting Calls**: Users can apply for test knitting calls directly through the website, enhancing engagement with the knitting community.

## Technologies Used

This project leverages the following technologies and libraries:

- React: The website is built using the React JavaScript library.
- Firestore Database: Firestore is used to store product data and images.
- React Router: Navigation is managed using React Router's Link and NavLink components.
- Firebase SDK: Firebase is utilized for authentication and serverTimestamp.
- Google Fonts: Custom fonts are integrated into the website for a unique design.

## Getting Started

To get this project up and running on your local machine, follow these steps:

1. **Clone the Repository**: Use `git clone` to clone this repository to your local machine.

   ```bash
   git clone https://github.com/karifermor/knitk-ecommerce.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies using npm or yarn.

   ```bash
   cd knitk-ecommerce
   npm install
   ```

3. **Firebase Configuration**: Set up a Firebase project and configure it according to your needs. Replace the Firebase configuration in your code with your own.

4. **Start the Development Server**: Run the development server to see the website in action.

   ```bash
   npm run dev
   ```

5. **Open in Browser**: Open your web browser and navigate to `http://localhost:3000` to view the website.

## Installing Dependencies
Before running the project, make sure you have the following dependencies installed:

- Node.js: If you don't have Node.js installed, download and install it from nodejs.org.
Project Dependencies
This project relies on the following dependencies, which will be installed when you run npm install:

- Firebase:
  - Description: Firebase is used for authentication and serverTimestamp.
  - Installation: No additional steps required, as it's already included in the project's `package.json`.

- React:
  - Description: The website is built using the React JavaScript library.
  - Installation: No additional steps required, as it's already included in the project's `package.json`.

- React DOM:
  - Description: React DOM is used for rendering React components in the browser.
  - Installation: No additional steps required, as it's already included in the project's `package.json`.

- React Router DOM:
  - Description: React Router DOM is used for managing navigation in the application.
  - Installation: No additional steps required, as it's already included in the project's `package.json`.

To install these dependencies manually in another project, you can use the following command:
 ```bash
  npm install firebase react react-dom react-router-dom
   ```

## Folder Structure

The project directory is structured as follows:

- `/src`: Contains the source code for the React application.
  - `/components`: React components used throughout the website.
  - `/contexts`: Context providers for managing state.
  - `/firebase`: Firebase configuration and initialization.
  - `/pages`: React components for different website pages.
  - `/styles`: CSS and stylesheets.
- `/public`: Static assets such as images and icons.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please open an issue or create a pull request. Make sure to follow the project's coding standards and guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Thank you for using KnitK's E-commerce website repository. Happy knitting!
