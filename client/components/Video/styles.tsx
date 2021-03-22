import styled from '@emotion/styled';

export const VideoContainer = styled.div`
  /* display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9; */
  background: #e9ecef;
  padding: 20px;
  text-align: left;
  display: flex;
  margin: 28px 0 25px;
`;

export const VideoDetail = styled.div`
  margin-left: 20px;

  p {
    margin: 0 0 10px;
  }
`;

export const Title = styled.h3`
  color: #333;
  font-weight: 600;
  font-size: 14px;
  margin: 0 0 5px 0;
`;

export const VideoThumbnail = styled.img`
  width: 336px;
  height: 188px;
`;

export const Button = styled.a`
  margin-top: 10px;
  padding: 9px 20px;
  border-radius: 6px;
  background: #27ae60;
  color: #fff;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #0f9949;
  }
`;
