import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Input, Button, HomeContainer } from '@pages/Home/styles';

const Home = () => {
  const history = useHistory();
  const [url, setUrl] = useState('');

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
    <HomeContainer>
      <h1>Youtube Downloader</h1>
      <p>Convert and download Youtube videos in for free</p>
      <form onSubmit={onSubmit}>
        <Input type="search" name="q" onChange={onChangeUrl} value={url} placeholder="Paste Youtube link here" />
        <Button type="submit" disabled={!url || !url.trim()}>
          Convert
        </Button>
      </form>
    </HomeContainer>
  );
};

export default Home;
