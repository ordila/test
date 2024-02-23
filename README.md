# User Cards Project

This repository contains the implementation of user cards with interactive features.

## Table of Contents

- [Features](#features)
- [Backend - Mockapi.io](#backend---mockapio)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Author](#author)

## Features

- **Follow/Following Interaction:** Clicking on the "Follow" button changes the text to "Following" and adjusts the button color. The number of followers is also updated accordingly.

- **Persistent State:** The user's interactions persist even after refreshing the page. If a user was followed, the "Following" state is maintained.

- **Unfollow:** Clicking the "Following" button reverts it to the initial "Follow" state, and the number of followers decreases.

## Backend - Mockapi.io

A custom backend was created using [Mockapi.io](https://www.mockapi.io/) to simulate user data. The `users` resource includes fields like `id`, `user`, `tweets`, `followers`, and `avatar`. There are 13 users in total with varying values for testing.

## Installation

1. Clone the repository:

   git clone https://github.com/your-username/user-cards-project.git

2. Install dependencies:
   cd user-cards-project
   npm install

3. Run the project:
   npm start

## Technologies Used

### Frontend

- HTML
- SCSS
- TypeScript (React)

### Backend

- [Mockapi.io](https://www.mockapi.io/)

### Dependencies

- React
- Axios

## Folder Structure

- **public/:** Static files and favicon.
- **src/:** React application source code.
  - **components/:** Reusable React components.
  - **constants/:** Contains all main static variables in project.
  - **helpers/:** API service (Axios instance), аunction to redact numbers, function to use localStorage.
    **pages/:** Pages components.
  - **App.tsx:** Main React component.
  - **main.tsx:** Entry point.
  - **styles.scss:** Global styles.
