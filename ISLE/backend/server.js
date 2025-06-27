const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

// ✅ CORS Configuration (must come before any routes)
app.use(cors({
  origin: 'http://localhost:3000',  // Frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true                // If you're sending cookies or auth headers
}));

// ✅ Parse incoming JSON requests
app.use(express.json());

// ✅ Mount authentication routes
app.use('/api/auth', authRoutes);

// ✅ Basic health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
