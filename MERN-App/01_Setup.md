### Structure

```
my-mern-app/
│
├── backend/              # Express server
│   ├── controllers/      # Route logic (optional)
│   ├── models/           # Mongoose models (User.js etc.)
│   │   └── MongoConnectDB.js 
│   ├── routes/           # Express routes
│   ├── .env              # Environment variables (PORT, DB_URL)
│   ├── server.js         # Entry point of Express backend
│   └── package.json      # Backend dependencies
│
├── frontend/             # React app (created with Vite or CRA)
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   │    └── Form.jsx   # React form component
│   │   ├── pages/        # Route-level pages (Home.jsx, Login.jsx)
│   │   ├── App.jsx       # Root component
│   │   ├── main.jsx      # ReactDOM render
│   │   └── index.css     # Global styles
│   ├── vite.config.js    # Or config files if CRA used
│   └── package.json      # Frontend dependencies
│
├── .gitignore            # Ignore node_modules, .env, etc.
└── README.md             # Project description
```

## Setup

### FrontEnd
1. Install (use small letters)
```bash
npm create vite@latest frontend  -- --template react
```

2. [React-With-Tailwind](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#for-react-app)

3. Install other dependenccies when required like `react-router-dom` or `react-hook-form`
```bash
npm install react-hook-form
```
