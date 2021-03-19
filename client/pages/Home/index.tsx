import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=OT9Sr4SBBg4');

  const onChangeUrl = useCallback((e) => {
    setUrl(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`/video?url=${url}`);
    },
    [url]
  );

  return (
    <>
      {/* <h1>React Youtube Downloader</h1>
      <p>Convert and download Youtube videos for free</p> */}
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChangeUrl} value={url} placeholder="paste Youtube link here" />
        <button type="submit" disabled={!url || !url.trim()}>
          convert
        </button>
      </form>
    </>
  );
};

export default Home;
