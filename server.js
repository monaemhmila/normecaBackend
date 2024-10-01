const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { mongoose, connectDB } = require("./Middleware/connect");
const userRoutes = require("./Routes/admin");
const categoryRoutes = require("./Routes/category");
const articleRoutes = require("./Routes/article");
const blogsRoutes = require("./Routes/blogs");
const contactRoutes = require("./Routes/contact");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve the Angular build from the 'NORMECA-angular' folder
app.use(express.static(path.join(__dirname, 'NORMECA-angular')));

const port = process.env.PORT || 3000; // Use the port specified by Vercel

// API routes
app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/blog", blogsRoutes);
app.use("/api/contact", contactRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve the Angular app for all other routes not handled by API
app.get('*', (req, res) => {
    if (!req.url.startsWith('/api') && !req.url.startsWith('/uploads')) {
        res.sendFile(path.join(__dirname, 'NORMECA-angular', 'index.html'));
    }
});


// Start the backend server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
