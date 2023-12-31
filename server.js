const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3500;

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// routes
app.use("/register", require("./routes/register"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
