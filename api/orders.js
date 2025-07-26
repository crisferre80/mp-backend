import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Simular compra de curso
router.post('/', async (req, res) => {
  const { userId, courseId } = req.body;
  const order = await prisma.order.create({
    data: {
      user: { connect: { id: userId } },
      course: { connect: { id: courseId } }
    }
  });
  res.json(order);
});

// Listar compras de usuario
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const orders = await prisma.order.findMany({
    where: { userId: Number(userId) },
    include: { course: true }
  });
  res.json(orders);
});

export default router;
