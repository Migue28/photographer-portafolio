import PhotoCard from "./PhotoCard";


export type PhotoSourceList = {
    photoSource: string[]
}

const PhotoGallery = ({photoSource}:PhotoSourceList) =>{
    const photos = photoSource.slice()

    return (
        <div className="grid sm:grid-cols-4 md:grid-cols-2 grid-cols-4">
            {photos.map((photo) => (
                <PhotoCard source={photo}/>
            ))}
        </div>
    )
}

export default PhotoGallery