# CrowdFund

CrowdFund is a crowdfunding platform where people can create campaigns, explore causes, and track donations.

## Features

- User registration and login
- Create and manage fundraising campaigns
- Browse approved campaigns
- NGO profiles and dashboards
- Campaign comments and saved campaigns
- Donation records and campaign total updates
- Admin campaign review
- Real-time donation updates with Socket.IO

> The project records donations but does not currently connect to a third-party payment gateway.

## Technology

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens
- **Real-time updates:** Socket.IO

## Project structure

```text
CrowdFund/
├── client/   # React frontend
└── server/   # Express API and Socket.IO server
```

## Requirements

- Node.js and npm
- MongoDB running locally, or a MongoDB Atlas cluster

## Run locally

### 1. Configure the backend

Create a file named `server/.env`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/fundRaisingPlatformDB
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

For MongoDB Atlas, use your Atlas connection string as the `MONGO_URI` value.

Keep `server/.env` private. Do not commit it to GitHub.

### 2. Start the backend

In a terminal:

```bash
cd server
npm install
npm run dev
```

The API runs at `http://localhost:5000`.

### 3. Start the frontend

Open a second terminal:

```bash
cd client
npm install
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`.

## Frontend environment variable

The frontend uses `http://localhost:5000` by default during local development.

For a deployed frontend, set this Vite environment variable to the public URL of the backend:

```env
VITE_API_BASE_URL=https://your-backend-url
```

Set it in the frontend hosting dashboard. Vite variables are included in browser code, so never put passwords or private keys in a `VITE_` variable.

## Build the frontend

From the `client` folder:

```bash
npm run build
```

Vite writes the production build to `client/dist`.

## Deployment notes

- The frontend can be deployed to Vercel with `client` as the project root, `npm run build` as the build command, and `dist` as the output directory.
- The Express backend needs its own hosting configuration and public environment variables, including `MONGO_URI`, `JWT_SECRET`, and `CLIENT_URL`.
- Campaign uploads currently use the server's local `uploads` folder. Configure persistent or cloud storage before relying on uploaded images in a deployed environment.
- Do not commit `.env` files, passwords, database connection strings, `node_modules`, or generated build folders.