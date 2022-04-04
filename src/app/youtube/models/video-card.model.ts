export interface Statistics {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}

export interface PreviewData {
  url: string;
  width: number;
  height: number;
}

export interface Localized {
  title: string;
  description: string;
}

export interface SnippetItem {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: PreviewData;
    medium: PreviewData;
    high: PreviewData;
    standart: PreviewData;
    maxres: PreviewData;
  };
  channelTitle: string;
  tags: string[];
  categoryId: number;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetItem;
  statistics: Statistics;
}
