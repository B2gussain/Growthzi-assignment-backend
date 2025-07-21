const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow CORS
app.use(express.json()); // Parse JSON

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working....");
});

// Update section endpoint
app.post("/update-section", (req, res) => {
  const { component, field, value } = req.body;

  console.log("FRONTEND EDIT DETECTED");
  console.log("Component:", component);
  console.log("Field:", field);
  console.log("New Value:", value);
  console.log("-".repeat(50));

  res.status(200).json({ message: "Edit logged successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
