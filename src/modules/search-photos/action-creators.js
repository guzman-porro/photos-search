import * as types from './action-types';

export const searchPhotosPending = currentFilters => ({
  type: types.SEARCH_PHOTOS_PENDING,
  payload: {
    currentFilters
  }
});

export const searchPhotosSuccess = (photos, pages) => ({
  type: types.SEARCH_PHOTOS_SUCCESS,
  payload: {
    photos,
    pages
  }
});

export const loadMorePhotosPending = () => ({
  type: types.LOAD_MORE_PHOTOS_PENDING
});

export const loadMorePhotosSuccess = photos => ({
  type: types.LOAD_MORE_PHOTOS_SUCCESS,
  payload: {
    photos
  }
});

export const fetchPhotosReject = error => ({
  type: types.FETCH_PHOTOS_REJECT,
  payload: {
    error
  }
});
