import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {  
  Button 
} from '../../shared/components'
import { searchPhotosAction } from './actions';

const LoadMoreButton = styled(Button)`
  width: 100%;
  margin: 24px 0;
`;

class LoadMorePhotos extends React.Component {
  render() {
      if (this.props.havesPages 
        && this.props.photosLength 
        && !this.props.isLoading) {
        return (
        <LoadMoreButton
          onClick={ () => this.props.onLoadMore() }>
          Load more
        </LoadMoreButton>
        )
      }

      return null;
  } 
}

const mapStateToProps = state => {
  const havesPages = state.search.currentPage <= state.search.pages;
  const isLoading = state.search.searchLoading || state.search.loadMoreLoading;

  return {
    photosLength: state.search.photos.length,
    havesPages,
    isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadMore: () => {
      dispatch(searchPhotosAction(null, true))
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LoadMorePhotos);
