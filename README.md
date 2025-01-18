# Twitter Clone

This is a Twitter Clone built using Next.js, Prisma, and MongoDB. The application supports features such as authentication, liking posts, connecting with others, viewing and editing profiles, and more.

## Features

- **Authentication**: Users can sign up, log in, and log out securely.
- **Like Posts**: Users can like and unlike posts.
- **Connect with Others**: Users can follow and unfollow other users.
- **Multiple Profiles**: Users can view profiles of others.
- **Edit Profile**: Users can update their profile information.
- **Create Posts**: Users can create, edit, and delete their posts.
- **View Posts**: Users can view posts from others.
- **Responsive Design**: The application is mobile-friendly.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Prisma**: An ORM (Object-Relational Mapping) tool for database management.
- **MongoDB**: A NoSQL database for storing user and post data.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A MongoDB instance (local or cloud).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AtharvaAnbhule/Twitter-Clone.git
    ```

2. Navigate to the project directory:
    ```bash
    cd twitter-clone
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the root of the project and add the following:
    ```env
    DATABASE_URL=mongodb://localhost:27017/twitter-clone
    NEXTAUTH_SECRET=your-secret
    ```
    Replace `DATABASE_URL` with your MongoDB connection string and `NEXTAUTH_SECRET` with a secret key for NextAuth.

5. Run Prisma migrations:
    ```bash
    npx prisma migrate dev
    ```

6. Start the development server:
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Project Structure

- `pages/`: Contains all the Next.js pages.
- `components/`: Reusable React components.
- `prisma/`: Prisma schema and migrations.
- `styles/`: Global and component-specific styles.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Deployment

To deploy the application:

1. Build the project:
    ```bash
    npm run build
    ```

2. Start the production server:
    ```bash
    npm start
    ```

Alternatively, you can deploy the application on platforms like Vercel or Heroku.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to contribute to this project by submitting issues or pull requests. Happy coding!

