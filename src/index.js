// Importing required modules
import express from 'express';
import logger from './middlewares/logger.js';
import cors from 'cors'
import api from './router/index.js'



// Creating an instance of express app
const app = express();

//middlewares
app.use(logger)
app.use(cors())
app.use(express.static('public'))
// Router
app.use('/api', api);

// Starting the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
