import { Outlet } from 'react-router-dom'

import DefaultLayout from '@src/layouts/default'

function Root() {
  return (
    <>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </>
  )
}

export default Root
