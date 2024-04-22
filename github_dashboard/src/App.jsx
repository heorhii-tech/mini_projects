import { useState } from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import HomeRoute from './routes/HomeRoute';
import ErrorRout from './routes/ErrorRout';
import Layout from './pages/Layout';
import BattleRout from './routes/BattleRout';
import RepositoryRout from './routes/RepositoryRout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <  Layout />,
      children: [
        {
          path: '/',
          element: <HomeRoute />,
          errorElement: <ErrorRout />
        },
        {
          path: 'battle',
          element: <BattleRout />
        },
        {
          path: 'repository/:id',
          element: <RepositoryRout />

        }
      ]

    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
