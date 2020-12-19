import Loadable from 'react-loadable';

// Components
import Loading from '../../components/Loading';

const LoadableHome = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

export default LoadableHome;
