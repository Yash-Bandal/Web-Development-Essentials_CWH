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
4. Ensure correct Frontend Structure, setups , installations

### Backend
1. setup `backend` folder
```bash
mkdir backend
```
```bash
cd backend
```

2. set package,json
```bash
npm init -y
```
```
"type":"module"
```

3. create `server.js`
4. fill template below, ensure all installations CORS, body-parser, mongoose, express, nodemon
5. Run server
```bash
nodemon server.js
```
[Express notes](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#9-expressjs-framework)

<br>
   
After proper setup
```
MERN-app/
│
├── backend/
├── frontend/
```

<br>

#### frontend/src/App.jsx
```jsx
import Form1 from "./components/Form1"

export default function App() {
  return (
      <>
      <Form1/>
      </>
  )
}
```

Template form
#### frontend/src/components/Form1.jsx
```jsx
import { useForm } from "react-hook-form";

const Form1 = () => {
    //Define requirements
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    // Delay simulation 
    // const delay = (d) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve()
    //         }, d * 1000);
    //     })
    // }


    
    //Handle All Operations after submit here
    const onSubmit = async (data) => {
        // await delay(3); // simulate network delay

        try {
            const url = "http://localhost:3000/submit"; //makes a post request here `you see cannot /GET` here if get not defined
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Ensure response is OK (status 200-299)
            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            // Use r.json() safely
            // const result = await response.text();
            const result = await response.json();

            console.log("Server response:", result);

            //  Reset the form only if submission is successful
            reset();

        } catch (error) {
            console.error("Submission error:", error);
        }
    };
    

    return (
        <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
         
            {/* Use isSubmitting , Submitting animattion */}

            {/* {isSubmitting && (
                <div
                    className="absolute top-1/2 left-1/2  h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"
                    role="status"
                >
                    <span className="sr-only">Submitting...</span>
                </div>
            )} */}


            {/* Form box */}
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">User Login</h1>

                {/* Form  */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Username Section  */}
                    <div>

                        {/* 1  */}
                        <label htmlFor="username" className="block font-medium mb-1">
                            Username
                        </label>

                        {/* 2  */}
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            {...register("username", {
                                required: "Username is required",
                                minLength: { value: 4, message: "Min length is 4" },
                                maxLength: { value: 12, message: "Max length is 12" },
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        {/* 3  */}
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.username.message}
                            </p>
                        )}
                    </div>


                    {/* Password section  */}
                    <div>

                        {/* 1 */}
                        <label htmlFor="password" className="block font-medium mb-1">
                            Password
                        </label>

                        {/* 2  */}
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            {...register("password", { required: "Password is required" })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        {/* 3  */}
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <input
                            disabled={isSubmitting}
                            type="submit"
                            value="Submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer transition duration-200 disabled:opacity-50"
                        />
                    </div>

                    {/* custom errors defined using seterror  */}
                    {/* {errors.myform && <div className='red'>{errors.myform.message}</div>}
              {errors.blocked && <div className='red'>{errors.blocked.message}</div>} */}
                </form>
            </div>
        </div>
    );
}

export default Form1

```

#### backend/server.js - simple connection
```js
//import modules
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"


const app = express()
const port = 3000

// In-memory store for submissions..a submission list that will be pushed with data
const submissions = [];

//use modules
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Backend Connected!!!')
})


// const result = await response.text();
//Text
// app.post('/submit', (req, res) => {
//     console.log("Form Data Received:", req.body); // See username & password
//     res.send("Received user data!");
// });

// const result = await response.json();
//json
app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log("Form Data Received:", formData);
    submissions.push(formData);     // Save to submissions array
    res.json({ success: true, message: 'Data received', data: formData });  //send JSON data
});

// View all submissions
app.get('/submissions', (req, res) => {
    res.json(submissions);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



//when you visit here without defining the app.get(/submit,  )..you wont see data
//http://localhost:3000/submit
```

#### backend/servermongo.js - Mongo connection
```jsx
// servermongo.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { FormMongo } from "./models/FormMongo.js";  //this is designed schema

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (same DB name is fine, just the model name is updated)..chk form username and pass ids same as here
mongoose
    .connect("mongodb://localhost:27017/FormMongoDB") 
    .then(() => console.log(" Connected to FormMongoDB"))
    .catch((err) => console.error(" Connection error:", err));

// Root route
app.get("/", (req, res) => {
    res.send("Backend Connected to MongoDB!");
});

// Submit form data and save to MongoDB
app.post("/submit", async (req, res) => {
    try {
        const { username, password } = req.body;

        const newForm = new FormMongo({ username, password });
        await newForm.save();

        console.log("Saved to MongoDB:", newForm);
        res.json({ success: true, message: "Saved to DB", data: newForm });
    } catch (err) {
        console.error(" Save failed:", err);
        res.status(500).json({ success: false, message: "Error saving data" });
    }
});

//  Fetch all submissions from MongoDB
app.get("/submissions", async (req, res) => {
    try {
        const data = await FormMongo.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ success: false, message: "Fetch error" });
    }
});

// Start server
app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
});
```

<br>


create two **seperate terminals `backend` `frontend`** **`CMD`** to handle both backend and frontend seperately  

**Backend terminal**
```bash
nodemon server.js
```
```bash
nodemon servermongo.js
```
<br>

**Frontend terminal**

```bash
npm run dev
```


