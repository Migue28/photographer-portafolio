import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from '@src/routes'

import About from './pages/About'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
