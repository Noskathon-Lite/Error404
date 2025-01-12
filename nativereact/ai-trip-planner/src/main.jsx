import React from 'react'; // Make sure React is explicitly imported
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateTrip from './create-trip';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/create-trip',
    element: <CreateTrip />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
