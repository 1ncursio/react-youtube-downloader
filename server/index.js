const express = require('express');
const app = express();
const cors = require('cors');
const ytdl = require('ytdl-core');

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
    const info = await ytdl.getInfo(url);
    const formats = ytdl.filterFormats(info.formats, (format) => format.itag >= 37);
    return res.json(formats);
    return res.json(info.videoDetails);
  } catch (error) {
    return res.status(404).send('해당하는 유튜브 동영상을 찾을 수 없습니다.');
  }
});

const PORT = process.env.PORT || 3095;

app.listen(PORT, () => console.log(`포트 : ${PORT}`));
