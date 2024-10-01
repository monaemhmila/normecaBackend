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

// Serve static files from the Angular build directory
app.use(express.static(path.join(__dirname, 'NORMECA-angular')));

// API routes (these should come before the catch-all route for Angular)
app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/blog", blogsRoutes);
app.use("/api/contact", contactRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Catch-all route for Angular to handle client-side routing
// Serve index.html for any route that isn't handled by API or static files
app.get('*', (req, res) => {
    const requestedFile = req.path.split('/').pop();
    const fileExtension = path.extname(requestedFile);

    // Check if it's a static file (js, css, etc.) and serve accordingly
    if (!fileExtension) {
        // Serve index.html for routes like /home, /products, etc.
        res.sendFile(path.join(__dirname, 'NORMECA-angular', 'index.html'));
    } else {
        // Return 404 if the requested static file is not found
        res.status(404).send('File not found');
    }
});

// Start the backend server
const port =  3039;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
