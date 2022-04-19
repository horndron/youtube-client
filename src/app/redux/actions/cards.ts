import { createAction, props } from '@ngrx/store';
import { CustomCards } from 'src/app/core/models/customCards';
import { SearchResponse } from '../../youtube/models/search-response.model';

export const addCustomVideo = createAction(
  '[YOUTUBE] Add Custom Video',
  props<{ card: CustomCards }>(),
);

export const searchRequestVideo = createAction(
  '[YOUTUBE] request Video',
  props<{ youtube: SearchResponse }>(),
);

export default addCustomVideo;
