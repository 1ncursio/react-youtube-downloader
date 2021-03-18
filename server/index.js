const express = require('express');
const app = express();
const cors = require('cors');
const ytdl = require('ytdl-core');

const URL = 'https://www.youtube.com/watch?v=gSXFn4Ai6CQ';

app.use(cors());

app.get('/api/download', async (req, res, next) => {
  try {
    const { url } = req.query;
    const info = await ytdl.getInfo(url);
    const { title } = info.videoDetails;

    res.header('Content-Disposition', `attachment; filename="${encodeURIComponent(title)}.mp4"`);
    ytdl(url, { format: 'mp4' }).pipe(res);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.get('/api/video', async (req, res, next) => {
  try {
    const { url } = req.query;
    const info = await ytdl.getInfo(url);
    const { title } = info.videoDetails;
    const [, , , test] = info.videoDetails.thumbnails;
    const { url: thumbnailUrl } = test;
    return res.json(info.videoDetails);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const PORT = process.env.PORT || 3095;

app.listen(PORT, () => console.log(`포트 : ${PORT}`));
