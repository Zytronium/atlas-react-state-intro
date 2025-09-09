import express from 'express';
import dotenv from 'dotenv'

dotenv.config( {quiet: true} );

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}. Connect at http://localhost:${PORT}`);
});
