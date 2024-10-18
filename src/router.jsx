import { createBrowserRouter } from 'react-router-dom';

import Home from './routes/Home';
import Contact from './routes/Contact';
import Form from './routes/Form';
import ThankYou from './components/form/ThankYou';

import NotFound from './components/error/NotFound';

export const router = createBrowserRouter([
  { path: '/INFOAP/', element: <Home /> },
  { path: '/INFOAP/contact', element: <Contact /> },
  { path: '/INFOAP/form', element: <Form /> },
  { path: '/INFOAP/thankyou', element: <ThankYou /> },
  { path: '*', element: <NotFound /> },
]);
