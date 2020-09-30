import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {res.send('Bienvenido al API de Pedidos, Para ingresar a la base de datos ingresar al puerto Localhost:3000/Tasks')});

export default router;