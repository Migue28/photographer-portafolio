type PhotoCardProps = {
  source: string;
};

const PhotoCard = ({ source }: PhotoCardProps) => {
  return (
    <div className="w-80 h-80">
      <img src={source} alt="" />
    </div>
  );
};

export default PhotoCard;
