const express = require('express');
const app = express();
const cors = require('cors');
const ytdl = require('ytdl-core');

const URL = 'https://www.youtube.com/watch?v=gSXFn4Ai6CQ';

app.use(cors());

app.get('/download', (req, res, next) => {
  const { url } = req.query;

  res.header('Content-Disposition', 'attachment; filename="video.mp4');

  ytdl(url, { format: 'mp4' }).pipe(res);
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`포트 : ${PORT}`));
