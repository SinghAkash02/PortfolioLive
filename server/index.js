const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// middleware
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

// ✅ MongoDB Connection (fixed)
mongoose.connect(
  "mongodb+srv://admin:amin123@portfoliocluster.qsrgqir.mongodb.net/contactDB?retryWrites=true&w=majority&tls=true",
  {
    serverSelectionTimeoutMS: 30000
  }
)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB ERROR:", err));
// routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// server
app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});