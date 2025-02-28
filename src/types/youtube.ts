export interface YouTubeAPIResponse {
  items?: YoutubeVideoType[];
  etag?: string;
  kind: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: PageInfoVideo;
  regionCode: string;
}

export interface YoutubeVideoType {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

interface PageInfoVideo {
  totalResults: number;
  resultsPerPage: number;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

interface Default {
  url: string;
  width: number;
  height: number;
}

interface Id {
  kind: string;
  videoId: string;
}
