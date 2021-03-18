export interface IVideo {
  embed: IEmbed;
  title: string;
  description: string;
  lengthSeconds: string;
  ownerProfileUrl: string;
  externalChannelId: string;
  isFamilySafe: boolean;
  availableCountries: string[];
  isUnlisted: boolean;
  hasYpcMetadata: boolean;
  viewCount: string;
  category: string;
  publishDate: string;
  ownerChannelName: string;
  uploadDate: string;
  videoId: string;
  keywords: string[];
  channelId: string;
  isOwnerViewing: boolean;
  isCrawlable: boolean;
  averageRating: number;
  allowRatings: boolean;
  author: IAuthor;
  isPrivate: false;
  isUnpluggedCorpus: false;
  isLiveContent: false;
  media: {};
  likes: number;
  dislikes: number;
  age_restricted: boolean;
  video_url: string;
  storyboards: IStoryboard[];
  thumbnails: IThumbnail[];
}

export interface IAuthor {
  id: string;
  name: string;
  user: string;
  channel_url: string;
  external_channel_url: string;
  user_url: string;
  thumbnails: IThumbnail[];
  verified: boolean;
  subscriber_count: number;
}

export interface IEmbed {
  iframeUrl: string;
  flashUrl: string;
  width: number;
  height: number;
  flashSecureUrl: string;
}

export interface IStoryboard {
  templateUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailCount: number;
  interval: number;
  columns: number;
  rows: number;
  storyboardCount: number;
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}
