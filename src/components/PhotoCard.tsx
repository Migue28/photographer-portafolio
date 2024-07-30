import { Photo } from '@src/types/photo'

const PhotoCard = (photo: Photo) => {
  const { download_url, author, id } = photo

  return (
    <div className='w-full'>
      <img
        className='object-cover aspect-square w-fit'
        src={download_url}
        alt={`${author} photo ${id}`}
        id={id}
      />
    </div>
  )
}

export default PhotoCard
