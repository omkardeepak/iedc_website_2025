interface EventCardProps {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  registerText?: string;
  registerUrl?: string;
  footer?: string;
  imageUrl?: string;
}

const EventCard = ({
  title,
  description,
  linkText,
  linkUrl,
  registerText,
  registerUrl,
  footer,
  imageUrl,
}: EventCardProps) => {
  return (
    <div className="border-2 border-black p-0 flex flex-col md:flex-row gap-0 md:gap-8">
      <div className="flex-1 p-8">
        <h3 className="font-serif text-3xl mb-6">{title}</h3>
        <p className="mb-6 leading-relaxed text-lg whitespace-pre-wrap">{description}</p>
        {linkText && linkUrl && (
          <p className="mb-4 text-lg">
            <a href={linkUrl} className="text-blue-600 underline hover:text-blue-800">
              {linkText}
            </a>
          </p>
        )}
        {registerText && registerUrl && (
          <>
            <p className="mb-4 text-lg">Already SOLD? Register now:</p>
            <p className="mb-6">
              <a href={registerUrl} className="text-blue-600 underline hover:text-blue-800">
                {registerText}
              </a>
            </p>
          </>
        )}
        {footer && <p className="font-medium text-lg">{footer}</p>}
      </div>
      {imageUrl && (
        <div className="w-full md:w-64 flex-shrink-0">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default EventCard;
