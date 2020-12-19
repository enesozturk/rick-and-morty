import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Header from '../../components/Header';

// State
import Loading from '../../components/Loading';
import { loadingState, stopLoadingAsync } from '../../components/Loading/LoadingSlice';

// Styles
import './Home.scss';

const Home: FunctionComponent = () => {
  const loading = useSelector(loadingState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(stopLoadingAsync());
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="main"></div>
        </>
      )}
    </div>
  );
};

export default Home;
