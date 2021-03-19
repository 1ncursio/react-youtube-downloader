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
    ytdl(url, { quality: 'highestvideo' }).pipe(res);
  } catch (error) {
    return res.status(404).send('해당하는 유튜브 동영상을 찾을 수 없습니다.');
  }
});

app.get('/api/video', async (req, res, next) => {
  try {
    const { url } = req.query;
    const info = await ytdl.getBasicInfo(url);
    return res.json(info.videoDetails);
  } catch (error) {
    // switch (error.message) {
    //   case 'Video unavailable':
    //     return res.status(404).send('해당하는 유튜브 동영상을 찾을 수 없습니다.');
    //     break;

    //   default:
    //     break;
    // }
    return res.status(404).send('해당하는 유튜브 동영상을 찾을 수 없습니다.');

    // next(error);
    // console.error(error.message);
  }
});

const PORT = process.env.PORT || 3095;

app.listen(PORT, () => console.log(`포트 : ${PORT}`));
