import React from 'react';
import './ca.css'
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


export const TwCard = ({title}) => {
  return (
  <Wrapper>
    <Title>This is amazing!!</Title>
  </Wrapper>
  );
};


