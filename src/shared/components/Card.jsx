import styled from 'styled-components';
import React  from 'react';

import Button from './Button';
import Image from './Image';
import Text from './Text';

const CardContainer = styled.div`
  padding: 16px;
  border: 3px solid #e4e4e4;
  background-color: #fff;
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 24px;
  }
`;

const TextColumnDesktop = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    padding-left: 24px;
  }
`;

const ExtraInfoContainer = styled.div`
  padding-bottom: 16px;
  border-bottom: 2px solid #e4e4e4;

  @media (min-width: 1024px) {
    padding-bottom: 24px;
    display: flex;

    > div {
      flex-basis: 50%;
    }
  }
`;

const CardImage = styled(Image)`
  align-self: center;
`;

const CardButton = styled(Button)`
  margin-top: 16px;
  width: 100%;

  @media (min-width: 1024px) {
    width: auto;
    float: right;
  }
`;

const TextBold = styled(Text)`
  font-weight: bold;
  margin-top: 8px;

  @media (min-width: 1024px) {
    margin-top: ${props => props.desktop ? "0" : "8px"};
  }
`;

const TextWrapper = styled.div`
`;

const Card = ({
  imageSrc, 
  imageUrl, 
  titleOne, 
  titleTwo, 
  titleThree, 
  infoOne, 
  infoTwo, 
  infoThree, 
  buttonText
}) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc}></CardImage>
      <TextColumnDesktop>
        <TextWrapper>
          <TextBold desktop>
            {titleOne}
          </TextBold>
          <Text>{infoOne}</Text>
        </TextWrapper>
        
        <ExtraInfoContainer>
          
          <TextWrapper>
            <TextBold>{titleTwo}</TextBold>
            <Text>{infoTwo}</Text>
          </TextWrapper>
          
          <TextWrapper>
            <TextBold>{titleThree}</TextBold>
            <Text>{infoThree}</Text>
          </TextWrapper>

        </ExtraInfoContainer>

        <CardButton
          onClick={ () => window.open(imageUrl, '_blank') }>
          {buttonText}
        </CardButton>
      </TextColumnDesktop>
    </CardContainer>
  );
}

export default Card;
