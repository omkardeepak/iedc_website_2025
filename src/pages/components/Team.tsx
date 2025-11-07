const Team = () => {
  return (
    <section>
      <h2 className="font-serif text-3xl  mb-8 pb-2 border-b border-border">
        CORE TEAM
      </h2>
      <div className="flex flex-col items-center py-12">
        {/* Lead Team Members */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <div className="flex flex-col items-center text-center">
            <img src="https://placehold.co/192x192/EFEFEF/333?text=Ashwin" alt="Ashwin" className="w-48 h-48 rounded-full mb-4 object-cover" />
            <h4 className="font-semibold text-xl">Ashwin</h4>
            <p className="text-base text-muted-foreground">Lead</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="https://placehold.co/192x192/EFEFEF/333?text=Anjana" alt="Anjana" className="w-48 h-48 rounded-full mb-4 object-cover" />
            <h4 className="font-semibold text-xl">Anjana</h4>
            <p className="text-base text-muted-foreground">Co-Lead</p>
          </div>
        </div>

        {/* Core Team Members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img src={`https://placehold.co/144x144/EFEFEF/333?text=Member+${i+1}`} alt={`Team Member ${i+1}`} className="w-36 h-36 rounded-full mb-4 object-cover" />
              <h4 className="font-semibold text-lg">Team Member {i + 1}</h4>
              <p className="text-base text-muted-foreground">Position</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
