import { Outlet } from 'react-router-dom'

import DefaultLayout from '@src/layouts/default'

function Root() {
  return (
    <>
      <DefaultLayout>
        <main>
          <Outlet />
        </main>
      </DefaultLayout>
    </>
  )
}

export default Root
