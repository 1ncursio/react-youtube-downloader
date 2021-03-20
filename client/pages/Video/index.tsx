import React, { useCallback, useEffect } from 'react';
import queryString, { ParsedQuery } from 'query-string';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { IVideo } from '@typings/IVideo';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { VideoThumbnail, Title, VideoContainer, VideoDetail } from '@pages/Video/styles';
import { FadeLoader } from 'react-spinners';

dayjs.extend(duration);

const Video = () => {
  const { url }: ParsedQuery<string> = queryString.parse(location.search);

  const { data: videoData, error: videoError } = useSWR<IVideo>(`/api/video?url=${url}`, fetcher);

  useEffect(() => {
    if (videoData) console.log(videoData);
  }, [videoData]);

  const convertSeconds = useCallback(
    (sec: string) => {
      if (!videoData) return;

      const s = parseInt(sec, 10);

      if (s >= 3600) return dayjs.duration(s, 'seconds').format('hh:mm:ss');
      return dayjs.duration(s, 'seconds').format('mm:ss');
    },
    [videoData]
  );

  if (!videoData && !videoError) {
    return <FadeLoader color="D74C36" />;
  }

  if (videoError) {
    return <>에러개꿀</>;
  }

  return (
    <>
      {videoData && (
        <VideoContainer>
          <VideoThumbnail src={videoData.thumbnails[3].url} />
          <VideoDetail>
            <Title>{videoData.title}</Title>
            <div>{videoData.author.name}</div>
            <div>{convertSeconds(videoData.lengthSeconds)}</div>
            <a href={`http://localhost:3095/api/download?url=${url}`} target="_blank" rel="noopener noreferrer">
              Download
            </a>
            {/* <AiOutlineLoading3Quarters /> */}
          </VideoDetail>
        </VideoContainer>
      )}
    </>
  );
};

export default Video;
