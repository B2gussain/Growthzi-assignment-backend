const express = require("express");
const app = express();
const PORT = 5000;



app.use(express.json());

app.get("/",(req,res)=>{
    res.send("backend is working....")
})
app.post("/update-section", (req, res) => {
  const { component, field, value } = req.body;

  console.log("FRONTEND EDIT DETECTED");
  console.log("Component:", component);
  console.log("Field:", field);
  console.log("New Value:");
  console.log(value);
  console.log("-".repeat(50));

  res.status(200).json({ message: "Edit logged successfully" });
});

app.listen(PORT, () => {
  console.log(` Server running ${PORT}`);
  
});