const express = require('express');
const app = express();
const ytdl = require('ytdl-core');

const URL = 'https://www.youtube.com/watch?v=gSXFn4Ai6CQ';

app.get('/download/:url', (req, res, next) => {
  const { url } = req.params;

  res.json({ url });
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`포트 : ${PORT}`));
