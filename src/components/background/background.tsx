import React from 'react';
import styled from '@emotion/styled';
import {Table} from '../table'

const BackgroundDiv = styled.div`
  width: 80%;
  height: 100vh;
  margin: 10%;
  border: 1px solid black;
  background-color: #efefef
`;

const HeaderDiv = styled.div`
  display: flow-root;
  border-bottom: 1px solid black;
  height: 120px;
  background-color: #fff2cc;
  text-align: center;
  h2 {
    font-size: 1em;
    font-weight: normal;
    padding-top: 20px;
  }
  p {
    display: inline-block;
    font-size: 0.7em;
    width: 40%;
  }
`;

export const Header = () => {
  return (
    <HeaderDiv>
      <h2>Mobalytics Test Assignment</h2>
      <p>
        The goal of this assignment is to reveal applicant's basic markup and programming skills
      </p>
    </HeaderDiv>
  );
};

export const Background = () => {
  return (
    <BackgroundDiv>
      <Header />
      <Table name="Champions pool" />
      <Table name="Matchup pool" />
    </BackgroundDiv>
  );
};
