import { Router } from 'express'
import { ObjectID } from 'mongodb';

const router = Router();

//Database connection
import { connect} from '../database'

router.get('/', async (req, res) =>{ 
    const db = await connect();
    const result = await db.collection('Tasks').find({}).toArray();
    res.json(result);
});

router.post('/', async (req, res)=> {
    const db = await connect();
    const task = {CodigoPedido: req.body.CodigoPedido, CodigoProducto:req.body.CodigoProducto, Cantidad:req.body.Cantidad, Valor:req.body.Valor, Fecha:req.body.Fecha};
    const result = await db.collection('Tasks').insertOne(task);
    res.json(result.ops[0])
});

router.delete('/:id', async(req,res) =>{
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('Tasks').deleteOne({_id: ObjectID(id)})
    res.json({
        message: 'El pedido ' + id + ' Eliminado', 
        result
    });
});

router.put('/:CodigoPedido', async (req, res) =>{
    const { CodigoPedido } = req.params;
    const updatePedido ={
        CodigoPedido: req.body.CodigoPedido, 
        CodigoProducto:req.body.CodigoProducto, 
        Cantidad:req.body.Cantidad, 
        Valor:req.body.Valor, 
        Fecha:req.body.Fecha
    };
    const db = await connect();
    await db.collection('Tasks').updateOne({CodigoPedido: ObjectID(CodigoPedido)},{$set: updatePedido});
    res.json({ 
        message: 'El pedido '+ CodigoPedido +' Actualizado'
    })
});

export default router;