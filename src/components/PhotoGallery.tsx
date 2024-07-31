import { useEffect, useState } from 'react'

import { Photo } from '@src/types/photo'

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
      throw error
    }
    if (photos) {
      setLoading(false)
    }
  }
  useEffect(() => {
    getPhoto()
  })

  return (
    <div className='grid gap-4 grid-cols-4'>
      {loading && !photos ? (
        <div className='border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
          <div className='animate-pulse flex space-x-4'>
            <div className='rounded-full bg-slate-700 h-10 w-10'></div>
            <div className='flex-1 space-y-6 py-1'>
              <div className='h-2 bg-slate-700 rounded'></div>
              <div className='space-y-3'>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='h-2 bg-slate-700 rounded col-span-2'></div>
                  <div className='h-2 bg-slate-700 rounded col-span-1'></div>
                </div>
                <div className='h-2 bg-slate-700 rounded'></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        photos.map((photo) => <PhotoCard {...photo} />)
      )}
    </div>
  )
}

export default PhotoGallery
