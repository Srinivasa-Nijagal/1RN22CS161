import express from 'express';
import routes from './routes/routes.js';
const app = express();
const PORT = 3000;
app.use('/numbers', routes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});