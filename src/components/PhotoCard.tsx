type PhotoCardProps = {
  source: string;
};

const PhotoCard = ({ source }: PhotoCardProps) => {
  return (
    <div className="w-full">
      <img className="object-cover aspect-square w-fit" src={source} alt={source} />
    </div>
  );
};

export default PhotoCard;
