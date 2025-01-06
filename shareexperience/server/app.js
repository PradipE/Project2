const express = require('express');
const app = express();

const helmet = require('helmet');
const port = 4001;
const db = require("./DataBase.js");
const cors = require('cors');
const bodyParser = require('body-parser');

// Connect to the database
db.connect();

// Middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add data route
app.post('/add', async (req, res) => {
  try {
    const { title, description, blogcontent } = req.body;

    if (!title || !description || !blogcontent) {
      return res.status(400).json({ error: "Title, description, and blog content are required." });
    }

    const date = new Date();
    const add_data = await db.query(
      'INSERT INTO adddata (title, description, imgurl, blog_content, time_stamp) VALUES($1, $2, $3, $4, $5)', 
      [title, description, "xdvv", blogcontent, date]
    );

    res.json({ message: "Data added successfully." });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
