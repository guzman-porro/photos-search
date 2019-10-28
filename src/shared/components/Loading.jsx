import styled from 'styled-components';
import React  from 'react';

import loadingGif from '../../assets/loading.gif';

const LoadingGif = styled.img`
  width: 20px;
`;

const Loading = () => {
  return (
    <LoadingGif src={loadingGif}/>
  );
}

export default Loading;
