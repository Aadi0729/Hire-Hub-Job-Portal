import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
import path from "path"

dotenv.config({});
const PORT = process.env.PORT || 8080;
const app = express();

const __dirname = path.resolve();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
    origin: "https://hirehubplatform.onrender.com/",
    credentials: true
}
app.use(cors(corsOptions));

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(__dirname, "Frontend/dist")));
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "Frontend/dist", "index.html"));
});

// "http://localhost:8000/api/v1/users/register"
// "http://localhost:8000/api/v1/users/login"
// "http://localhost:8000/api/v1/users/profile/update"

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});