import React from 'react';
import Home from '../../Components/Search/Home';
import { useSelector, useDispatch } from 'react-redux';
import { hoverHome, blurHome } from '../../Modules/search';
import { toggleBookmark } from '../../lib/bookmarkUtils';

const HomeContainer = ({ home }) => {
  const { id } = useSelector(state => state.user);
  const { dateDiff } = useSelector(state => state.search.searchForm);
  const { hoveredHome } = useSelector(state => state.search);
  const isHovered = hoveredHome === home.homeId;
  const dispatch = useDispatch();

  const onHoverHome = () =>
    hoveredHome !== home.homeId && dispatch(hoverHome(home.homeId));
  const onBlurHome = () => dispatch(blurHome());

  return (
    <Home
      home={home}
      dateDiff={dateDiff}
      isHovered={isHovered}
      onClickHeart={() => toggleBookmark(id, home, dispatch)}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
    />
  );
};

export default React.memo(HomeContainer);
