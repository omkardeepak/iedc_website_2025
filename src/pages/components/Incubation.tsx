const Incubation = () => {
  return (
    <section>
      <h2 className="font-serif text-3xl mb-8 pb-2 border-b border-border">
        INCUBATION
      </h2>
      
      <div className="text-center py-12 space-y-4 text-xl">
        <p className="leading-relaxed">
          Got a great idea but missing the resources to make it real?
        </p>
        <p className="text-lg leading-relaxed">No worries!</p>
        <p className="text-lg leading-relaxed">
          This is the place where you can team up with others,
        </p>
        <p className="text-lg leading-relaxed">
          collaborate on projects, and transform your concepts into actual prototypes.
        </p>
        <p className="text-lg leading-relaxed mt-8">
          Share your vision with us, and together we'll help you bring it to life.
        </p>
      </div>

      <div className="flex flex-col space-y-12 mt-12 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-1/2 md:pr-8">
            <p className="leading-relaxed text-lg">
              CITTIC is the Innovation and Technology Incubation Centre at Cochin University of Science and 
              Technology. It provides a platform for students and faculty to transform their innovative ideas into 
              successful ventures. With state-of-the-art infrastructure, mentorship, and funding opportunities, CITTIC supports 
              startups in various domains, fostering a vibrant entrepreneurial ecosystem within the university.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center overflow-hidden">
            <img 
              src="/Cittic Logo.svg" 
              alt="CITTIC Logo" 
              className="w-80 h-80 mb-6 md:mb-0 transform transition-transform duration-500 ease-in-out hover:scale-110 hover:brightness-110"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-right">
          <div className="md:w-1/2 md:pl-8">
            <p className="leading-relaxed text-lg">
              As we know, early stage funding is a big challenge for innovators, especially student 
              start-ups who are trying to commercialize innovative ideas. Understanding this 
              challenge, CUSAT has decided to set up a start-up fund with financial support from RUSA. 
              The fund is managed by CUSAT-TBI of CUSATECH FOUNDATION with the objective 
              of helping our students and researchers to convert their innovative ideas into full-fledged ventures. 
              RUSA also established a start-up incubation centre in CUSAT called RISE TBI(RUSA Innovation 
              Start-up Ecosystem Technology Business Incubator)
            </p>
          </div>
          <div className="md:w-1/2 md:pr-8 flex justify-center overflow-hidden">
            <img 
              src="/rusa.jpeg" 
              alt="RUSA Logo" 
              className="w-80 h-80 mb-6 md:mb-0 transform transition-transform duration-500 ease-in-out hover:scale-110 hover:brightness-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incubation;
