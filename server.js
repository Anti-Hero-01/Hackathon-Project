import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allow frontend to connect

// In-memory user storage (use a database in production)
const users = [];
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with environment variable in production

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { email, password: hashedPassword };
  users.push(user);
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  const user = users.find((u) => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected profile endpoint
app.get('/profile', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = users.find((u) => u.email === decoded.email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ email: user.email });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Start server
app.listen(8080, () => console.log('Server running on http://localhost:8080'));