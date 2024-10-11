import { ErrorBoundary } from 'react-error-boundary';

import Fallback from '../components/error/Fallback';
import Navbar from '../components/nav/Navbar';

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Navbar />
      <div>Home Page</div>
    </ErrorBoundary>
  );
};

export default Home;
