import React, { useEffect } from 'react';
import queryString from 'query-string';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { IVideo } from '@typings/IVideo';

const Video = () => {
  const { url } = queryString.parse(location.search);

  const { data: videoData } = useSWR<IVideo>(`/api/video?url=${url}`, fetcher);

  useEffect(() => {
    console.log(videoData);
  }, [videoData]);

  return (
    <>
      {videoData && (
        <>
          <h1>{videoData.title}</h1>
          <h2>{videoData.author.name}</h2>
          <span>{videoData.lengthSeconds}</span>
          <img src={videoData.thumbnails[3].url} />
          <a href={`http://localhost:3095/api/download?url=${url}`} target="_blank">
            다운로드
          </a>
        </>
      )}
    </>
  );
};

export default Video;
