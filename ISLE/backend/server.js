const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db'); // ✅ Import DB connection

const app = express();
const PORT = 5000;

// ✅ Connect to MongoDB
connectDB();

// ✅ CORS Configuration (must come before any routes)
app.use(cors({
  origin: 'http://localhost:3000',  // Frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// ✅ Parse incoming JSON requests
app.use(express.json());

// ✅ Mount authentication routes
app.use('/api/auth', authRoutes);

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
