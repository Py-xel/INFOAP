import { createBrowserRouter } from 'react-router-dom';

import Home from './routes/Home';
import Contact from './routes/Contact';
import Form from './routes/Form';

import NotFound from './components/error/NotFound';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/contact', element: <Contact /> },
  { path: '/form', element: <Form /> },
  { path: '*', element: <NotFound /> },
]);
