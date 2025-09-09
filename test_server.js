import express from 'express';

const PORT = 3000;
const app = express();

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}. Connect at http://localhost:${PORT}`);
});
