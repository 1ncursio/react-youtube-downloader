import React, { useCallback, useEffect } from 'react';
import queryString from 'query-string';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { IVideo } from '@typings/IVideo';
// @ts-ignore
import TimeFormat from 'hh-mm-ss';

const Video = () => {
  const { url } = queryString.parse(location.search);

  const { data: videoData } = useSWR<IVideo>(`/api/video?url=${url}`, fetcher);

  useEffect(() => {
    console.log(videoData);
  }, [videoData]);

  const convertSeconds = useCallback(
    (sec: string) => {
      if (!videoData) return;

      const s = parseInt(sec, 10);

      if (s >= 3600) return TimeFormat.fromS(s, 'hh:mm:ss');
      return TimeFormat.fromS(s, 'mm:ss');
    },
    [videoData]
  );

  return (
    <>
      {videoData && (
        <>
          <h1>{videoData.title}</h1>
          <h2>{videoData.author.name}</h2>
          <span>{convertSeconds(videoData.lengthSeconds)}</span>
          <span>{}</span>
          <img src={videoData.thumbnails[3].url} />
          <a href={`http://localhost:3095/api/download?url=${url}`} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </>
      )}
    </>
  );
};

export default Video;
