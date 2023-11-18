const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Import axios instead of fetch

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json()); // Add this line to parse JSON in the request body

app.post('/api/login', async (req, res) => {
  try {
    const apiUrl = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp';
    
    // Use axios for making the request
    const response = await axios.post(apiUrl, req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if the response status is OK
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/", async (req, res) => {
  res.json({ message: "Welcome." });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});