import * as types from './action-types';

const initialState = {
  searchLoading: false,
  loadMoreLoading: false,
  photos: [],
  currentPage: 1,
  pages: 1,
  currentFilters: null,
  error: null
};

const searchPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_PHOTOS_PENDING:
      return {
        ...state,
        searchLoading: true,
        currentFilters: action.payload.currentFilters
      }
    case types.LOAD_MORE_PHOTOS_PENDING:
      return {
        ...state,
        loadMoreLoading: true
      }
    case types.SEARCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload.photos,
        pages: action.payload.pages,
        searchLoading: false,
        error: null
      }
    case types.LOAD_MORE_PHOTOS_SUCCESS:
      return {
        ...state,
        currentPage: state.currentPage + 1,
        photos: [...state.photos, ...action.payload.photos],
        loadMoreLoading: false,
        error: null
      }
    case types.FETCH_PHOTOS_REJECT:
      return {
        ...state,
        searchLoading: false,
        loadMoreLoading: false,
        currentPage: 1,
        pages: 1,
        filters: null,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default searchPhotosReducer;
