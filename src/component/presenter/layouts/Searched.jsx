import React from 'react';
import Header from '../../container/header/header';
import SearchList from '../../container/searchList/SearchList';
import WorkDetail from '../../container/work/WorkDetail';

const Searched = () => {
  return (
    <>
      <Header />
      <WorkDetail />
      <SearchList />
    </>
  );
};

export default Searched;
