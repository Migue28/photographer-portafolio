import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Photo } from '@src/types/photo'

import LoadingPhotoCard from './LoadingPhotoCard'
import PhotoCard from './PhotoCard'

const PHOTO_API_URL = import.meta.env.VITE_PHOTO_API_URL

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[] | []>([])
  const [loading, setLoading] = useState(false)
  const getPhoto = async () => {
    setLoading(true)
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
      toast.error('An error occurred while getting the photos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPhoto()
  }, [])

  return (
    <div className='grid gap-4 grid-cols-4'>
      {loading
        ? [...Array(12)].map((_, i) => <LoadingPhotoCard key={`${i}-loadingPhotoCard`} />)
        : photos.map((photo) => <PhotoCard {...photo} key={photo.id} />)}
    </div>
  )
}

export default PhotoGallery
