import PhotoCard from './PhotoCard'

export type PhotoSourceList = {
  photoSource: string[]
}

const PhotoGallery = ({ photoSource }: PhotoSourceList) => {
  const photos = photoSource.slice()

  return (
    <div className='grid gap-4 grid-cols-4'>
      {photos.map((photo) => (
        <PhotoCard source={photo} />
      ))}
    </div>
  )
}

export default PhotoGallery
