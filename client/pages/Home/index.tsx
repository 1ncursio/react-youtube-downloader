import React, { useCallback, useState } from 'react';
import { HomeContainer } from '@pages/Home/styles';
import SearchForm from '@components/SearchForm';
import Video from '@components/Video';

const Home = () => {
  const [url, setUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChangeUrl = useCallback((e) => {
    setUrl(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setIsSubmitted(true);
      console.log(url);
      //   history.push(`/video?url=${url}`);
    },
    [url]
  );

  return (
    <HomeContainer>
      <h1>Youtube Downloader</h1>
      <p>Convert and download Youtube videos in for free</p>
      {isSubmitted ? <Video url={url} /> : <SearchForm onSubmit={onSubmit} onChangeUrl={onChangeUrl} url={url} />}
    </HomeContainer>
  );
};

export default Home;
