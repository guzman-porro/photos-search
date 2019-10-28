import React from 'react';

import { GlobalStyles } from '../shared/components';
import { SearchPhotos, LoadMorePhotos } from './search-photos';
import { PhotosList } from './photos-list';

const App = () => (
  <React.Fragment>
    <GlobalStyles/>
    <SearchPhotos/>
    <PhotosList/>
    <LoadMorePhotos/>
  </React.Fragment>
);

export default App;
