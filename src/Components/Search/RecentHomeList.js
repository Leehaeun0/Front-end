import React from 'react';
import RecentHome from './RecentHome';
import styled from 'styled-components';
import RecentPagenation from './RecentPagenation';

const RecentHomeList = () => {
  return (
    <StWrapper>
      <StHeader>최근 숙소</StHeader>
      <StSpan>
        현재 검색 결과와 일치하도록 날짜와 가격이 업데이트되었습니다.
      </StSpan>
      <RecentPagenation />
      <StHomeWrapper>
        <RecentHome />
        <RecentHome />
        <RecentHome />
        <RecentHome />
        <RecentHome />
      </StHomeWrapper>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  margin: 4rem 0;
  position: relative;
`;

const StHomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const StHeader = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 1rem 0;
`;

const StSpan = styled.span`
  font-size: 1.6rem;
`;

export default RecentHomeList;