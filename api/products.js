import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Listar cursos
router.get('/', async (req, res) => {
  const { q } = req.query;
  const where = q ? { title: { contains: q, mode: 'insensitive' } } : {};
  const courses = await prisma.course.findMany({ where });
  res.json(courses);
});

// Crear curso
router.post('/', async (req, res) => {
  const { title, price, description } = req.body;
  const course = await prisma.course.create({ data: { title, price, description } });
  res.json(course);
});

// Actualizar curso
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, price, description } = req.body;
  const course = await prisma.course.update({
    where: { id: Number(id) },
    data: { title, price, description }
  });
  res.json(course);
});

// Eliminar curso
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.course.delete({ where: { id: Number(id) } });
  res.json({ ok: true });
});

export default router;
