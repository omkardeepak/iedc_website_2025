interface PastEventCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePlaceholder?: string;
}

const PastEventCard = ({ title, description, imageUrl, imagePlaceholder }: PastEventCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <h4 className="font-serif text-2xl font-bold mb-4">{title}</h4>
      <p className="mb-6 leading-relaxed text-base">{description}</p>
      <div className="overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 hover:brightness-110"
        />
      </div>
    </div>
  );
};

export default PastEventCard;
