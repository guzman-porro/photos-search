import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import searchIcon from '../../assets/search-icon.svg';
import { 
  TextInput, 
  Button,
  Loading
} from '../../shared/components'

import searchPhotosAction from './actions';

const Container = styled.div`
  display: flex;
  margin-top: 24px;
`;

const SeachInput = styled(TextInput)`
  background-image: url(${searchIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 5px;
`;

class SearchPhotos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: ''
    };
  }

  handleChange(event) {
    this.setState({tags: event.target.value});
  }

  render() {
    return (
      <Container>
        <SeachInput 
          placeholder="Search"
          value={this.state.tags}
          onChange={ event => this.handleChange(event) }>
        </SeachInput>
        <Button 
          onClick={ () => this.props.onSearchPhotos({ tags: this.state.tags }) }
          disabled={!this.state.tags || this.props.searchLoading}>
           { this.props.searchLoading ? <Loading /> : 'Search' }
        </Button>
      </Container>
    )

  }
}

const mapStateToProps = state => {
  return {
    searchLoading: state.search.searchLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchPhotos: filters => {
      dispatch(searchPhotosAction(filters))
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SearchPhotos);
