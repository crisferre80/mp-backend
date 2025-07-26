import express from 'express';
import cors from 'cors';
import userRouter from './users.js';
import courseRouter from './products.js';
import orderRouter from './orders.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/courses', courseRouter);
app.use('/api/orders', orderRouter);

app.get('/api', (req, res) => {
  res.json({ message: 'API de compra de cursos funcionando' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
