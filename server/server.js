require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('⚙️ 개발 서버 구동 중...'));

app.use(cors());
app.use('/api', routes);

app.listen(PORT, () =>
  console.log(`⚙️ http://localhost:${PORT} 개발 서버 구동 중...`)
);
