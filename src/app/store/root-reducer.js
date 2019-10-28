import { combineReducers } from 'redux';

import { searchPhotosReducer } from '../../modules/search-photos';

// The application has only one reducer, and is not necessary to combine the reducers
// but using it, the app is ready for future extension
export default combineReducers({
  search: searchPhotosReducer
});
