import axios from 'axios';

import {
  KEY,
  API_URL
} from './constants';

const itemsPerPage = 10;
const sharedConfig = {
  'api_key': KEY,
  'format': 'json',
  'nojsoncallback': 1
}

export const getPhotoInfo = (photoId) => {
  return axios.get(
    API_URL,
    {
      params: {
        ...sharedConfig,
        'method': 'flickr.photos.getInfo',
        'photo_id': photoId
      }
    }
  )
};

export const getPhotoSizes = (photoId) => {
  return axios.get(
    API_URL,
    {
      params: {
        ...sharedConfig,
        'method': 'flickr.photos.getSizes',
        'photo_id': photoId
      }
    }
  )
};

// Using this approach of filters, the one who uses the client can decided which filters used
// For this app, the action will use 'tags' so filters = {tags: 'xxx'}
export const searchPhotos = (filters, page) => {
  return axios.get(
    API_URL,
    {
      params: {
        ...sharedConfig,
        ...filters,
        'method': 'flickr.photos.search',
        'page': page,
        'per_page': itemsPerPage,
        'sort': 'date-taken-desc'
      }
    }
  )
    .then(data => data.data.photos)
    .then(photos => {
      const promises = [];

      // Result: Each promise is an array which contains a promise 
      // for the info and another for the picture data.
      photos.photo.forEach(photo => {
        promises.push(axios.all([
          getPhotoInfo(photo.id), 
          getPhotoSizes(photo.id)
        ]));
      })

      return axios.all([
        photos.pages,
        axios.all(promises)
      ])
    }).then(axios.spread((totalPages, photos) => {
      // I will retrieve always the original size
      // Since is the only key the api is always sending.
      
      const photosMapped = photos.map(photoArray => {
        return {
          info: photoArray[0].data.photo,
          picture: photoArray[1].data.sizes.size.pop()
        };
      })

      return {
        totalPages: totalPages,
        photos: photosMapped
      };
    }))

};
