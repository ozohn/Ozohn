/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainContext } from '../../../context/mainContext';

import MainLoadingAni from '../../presenter/loaders/MainLoadingAni';

const SearchListContainer = styled.div`
  height: 85vh;
  width: 100%;
  overflow-y: scroll;
`;

const UserDataContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  background: center/120% no-repeat url(${props => props.background});
`;

const DimLayer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  opacity: 0.5;
`;

const UserLink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 13px -3px #000;
  width: 40%;
  height: 30vh;
  background: center / contain no-repeat url(${props => props.background});
  background-color: #fff;
`;

const WorkImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 13px -3px #000;
  width: 40%;
  height: 30vh;
  background: center / contain no-repeat url(${props => props.background});
  background-color: #fff;
`;

const SearchList = ({ loading, searched }) => {
  // const { state, showWork, getCreatorWorks } = useContext(MainContext);

  if (loading) return <MainLoadingAni />;
  console.log(searched);
  if (!searched.searchWork && !searched.searchUser) return <div>검색결과없음</div>;
  if (searched.searchUser) {
    return (
      <SearchListContainer>
        {searched.searchUser.map(v => {
          return (
            <UserDataContainer key={v.userid} background={v.userimage}>
              <DimLayer />
              <UserLink
                background={v.userimage}
                to={{ pathname: '/searchedUser', state: { userid: v.userid } }}
                // onClick={() => getCreatorWorks(v.userid)}
              />
            </UserDataContainer>
          );
        })}
      </SearchListContainer>
    );
  }
  if (searched.searchWork) {
    return (
      <SearchListContainer>
        {searched.searchWork.map(v => {
          return (
            <UserDataContainer
              work={v}
              // onClick={() => showWork(v, searched)}
              key={v.workid}
              background={v.workimage}
            >
              <DimLayer />
              <WorkImage background={v.workimage} />
            </UserDataContainer>
          );
        })}
      </SearchListContainer>
    );
  }
  return <></>;
};

export default SearchList;
