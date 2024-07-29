import './App.css'
import { city, forest, mountain, woman } from './assets/images/index'
import PhotoGallery from './components/PhotoGallery'
import DefaultLayout from './layouts/default'

const photoSource = [city, woman, mountain, forest, forest, mountain, woman, city]

function App() {
  return (
    <>
      <DefaultLayout>
        <PhotoGallery photoSource={photoSource} />
      </DefaultLayout>
    </>
  )
}

export default App
