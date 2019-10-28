import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  Card
} from '../../shared/components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class PhotosList extends React.Component {

  renderCardPhoto(photo, key) {
    return (
      <Card
        key={key}
        imageSrc={photo.source}
        imageUrl={photo.url}
        titleOne="Title"
        titleTwo="Owner Name"
        titleThree="Date"
        infoOne={photo.title}
        infoTwo={photo.owner}
        infoThree={photo.taken}
        buttonText="View large image">
      </Card>
    );
  }

  render() {
    if (!this.props.searchLoading) {
      return (
        <Container>
          {this.props.photos.map((photo, key) => this.renderCardPhoto(photo, key))}
        </Container>
      )
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    searchLoading: state.search.searchLoading,
    photos: state.search.photos
  }
}

export default connect(
  mapStateToProps,
  null
)(PhotosList);
