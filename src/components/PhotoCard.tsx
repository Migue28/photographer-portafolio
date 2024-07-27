type PhotoCardProps = {
  source: string;
};

const PhotoCard = ({ source }: PhotoCardProps) => {
  return (
    <div className="sm:w-52 sm:h-52 md:w-72 md:h-72 2xl:w-96 xl:h-96">
      <img className="object-cover aspect-square w-fit" src={source} alt={source} />
    </div>
  );
};

export default PhotoCard;
