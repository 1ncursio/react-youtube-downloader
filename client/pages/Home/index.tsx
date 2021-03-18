import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=ivruPOXQFuA');

  const onChangeUrl = useCallback((e) => {
    setUrl(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      window.location.href = `http://localhost:3095/api/download?url=${url}`;
      console.log(url);
    },
    [url]
  );

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChangeUrl} value={url} />
        <button type="submit">다운로드</button>
      </form>
    </>
  );
};

export default Home;
