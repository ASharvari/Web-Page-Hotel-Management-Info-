// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

let users = [];

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = { username, email, password };
    users.push(newUser);
    res.status(201).json({ message: "User registered successfully", user: newUser });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        return res.status(200).json({ message: "Login successful", user });
    } else {
        return res.status(401).json({ message: "Invalid email or password" });
    }
});