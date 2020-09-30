import express from 'express'

const app = express();

//Routes
import Indexroutes from './routes/index.routes'
import TaskRoutes from './routes/tasks.routes'

//Settings
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(express.json());

//Routes
app.use(Indexroutes);
app.use('/tasks',TaskRoutes);

export default app;
