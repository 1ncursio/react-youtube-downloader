import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Input, Button, Section } from '@pages/Home/styles';

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
      <Section>
        <h1>Youtube Downloader</h1>
        <p>Convert and download Youtube videos in for free</p>
        <form onSubmit={onSubmit}>
          <Input type="text" onChange={onChangeUrl} value={url} placeholder="paste Youtube link here" />
          <Button type="submit" disabled={!url || !url.trim()}>
            Convert
          </Button>
        </form>
      </Section>
    </>
  );
};

export default Home;
