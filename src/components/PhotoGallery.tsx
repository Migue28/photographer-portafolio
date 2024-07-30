import { useEffect, useState } from 'react'

import { Photo } from '@src/types/photo'

import PhotoCard from './PhotoCard'

const PHOTO_API_URL = import.meta.env.VITE_PHOTO_API_URL

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[] | []>([])
  // const [loading, setLoading] = useState(false)
  const getPhoto = async () => {
    try {
      const response = await fetch(PHOTO_API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data: Photo[] = await response.json()
        setPhotos(data)
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  useEffect(() => {
    getPhoto()
  }, [])
  console.log(photos)

  return (
    <div className='grid gap-4 grid-cols-4'>
      {photos.map((photo) => (
        <PhotoCard {...photo} />
      ))}
    </div>
  )
}

export default PhotoGallery
