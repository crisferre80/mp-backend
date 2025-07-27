import express from 'express';
const router = express.Router();

// Endpoint para crear preferencia de pago
router.post('/preference', (req, res) => {
  // Aquí va tu lógica para Mercado Pago, por ahora solo simula una respuesta:
  const { courseId, userId, amount, currency, description, payerEmail, payerName } = req.body;

  // Simulación de preferencia
  const preference = {
    id: 'fake_preference_id_' + Date.now(),
    init_point: 'https://www.mercadopago.com.ar/checkout/v1/redirect?preference_id=fake',
    sandbox_init_point: 'https://sandbox.mercadopago.com.ar/checkout/v1/redirect?preference_id=fake'
  };

  res.json({ success: true, preference });
});

export default router;
