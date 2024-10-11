import { ErrorBoundary } from 'react-error-boundary';

import Fallback from '../components/error/Fallback';
import Navbar from '../components/nav/Navbar';

const Form = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Navbar />
      <div>Form Page</div>
    </ErrorBoundary>
  );
};

export default Form;
