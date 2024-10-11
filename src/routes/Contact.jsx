import { ErrorBoundary } from 'react-error-boundary';

import Fallback from '../components/error/Fallback';
import Navbar from '../components/nav/Navbar';

const Contact = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Navbar />
      <div>Contact Page</div>
    </ErrorBoundary>
  );
};

export default Contact;
