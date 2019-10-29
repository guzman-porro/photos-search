import { FlickrAPI } from '../../app';
import * as actionCreators from './action-creators';
import { DateFormat } from '../../shared/utils';

const handlePhotoItem = photo => {
  return {
    title: photo.info.title._content,
    taken: DateFormat.longFormat(photo.info.dates.taken),
    owner: photo.info.owner.realname || photo.info.owner.username,
    url: photo.picture.url,
    source: photo.picture.source
  }
}

const searchPhotosAction = (filters, loadMore = false) => {
  return (dispatch, getState) => {
    const { currentPage, currentFilters } = getState().search;
    const page = loadMore ? currentPage + 1 : 1;
    const filtersObj = filters ? filters : currentFilters;
    
    if (!loadMore) {
      dispatch(actionCreators.searchPhotosPending(filtersObj))
    } else {
      dispatch(actionCreators.loadMorePhotosPending())
    }

    return FlickrAPI.searchPhotos(filtersObj, page)
      .then(result => {
        const photos = result.photos.map(handlePhotoItem);
        if (loadMore) {
          return dispatch(actionCreators.loadMorePhotosSuccess(photos))
        }
        
        return dispatch(actionCreators.searchPhotosSuccess(photos, result.totalPages))
      })
      .catch((error) => {
        dispatch(actionCreators.fetchPhotosReject(error))
      })

  }
}

export default searchPhotosAction;
