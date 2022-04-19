import { createAction, props } from '@ngrx/store';
import { SearchResponse } from '../../youtube/models/search-response.model';

export const searchInputVideo = createAction(
  '[YOUTUBE] search Video',
  props<{ search: string }>(),
);

export const searchRequestVideo = createAction(
  '[YOUTUBE] request Video',
  props<{ youtube: SearchResponse }>(),
);

export default searchInputVideo;
