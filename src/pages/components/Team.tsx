// const Team = () => {
//   return (
//     <section>
//       <h2 className="font-serif text-3xl  mb-8 pb-2 border-b border-border">
//         CORE TEAM
//       </h2>
//       <div className="flex flex-col items-center py-12">
//         {/* Lead Team Members */}
//         <div className="flex flex-wrap justify-center gap-12 mb-16">
//           <div className="flex flex-col items-center text-center">
//             <img src="https://placehold.co/192x192/EFEFEF/333?text=Ashwin" alt="Ashwin" className="w-48 h-48 rounded-full mb-4 object-cover" />
//             <h4 className="font-semibold text-xl">Ashwin</h4>
//             <p className="text-base text-muted-foreground">Lead</p>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <img src="https://placehold.co/192x192/EFEFEF/333?text=Anjana" alt="Anjana" className="w-48 h-48 rounded-full mb-4 object-cover" />
//             <h4 className="font-semibold text-xl">Anjana</h4>
//             <p className="text-base text-muted-foreground">Co-Lead</p>
//           </div>
//         </div>

//         {/* Core Team Members */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-12">
//           {[...Array(12)].map((_, i) => (
//             <div key={i} className="flex flex-col items-center text-center">
//               <img src={`https://placehold.co/144x144/EFEFEF/333?text=Member+${i+1}`} alt={`Team Member ${i+1}`} className="w-36 h-36 rounded-full mb-4 object-cover" />
//               <h4 className="font-semibold text-lg">Team Member {i + 1}</h4>
//               <p className="text-base text-muted-foreground">Position</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function ArcAvatarMotion() {
  // team array: 8 team members (include display text and linkedin for each)
  const team = [
    { name: "Ashwin Menon", src: "https://iedc-website-2k25-26.vercel.app/images/team/AshwinMenon.jpg", color: "#f97316", title: "Student Lead", bio: "", linkedin: "https://www.linkedin.com/in/ashwin-menon-13168a259" },
    { name: "Anjana Sankar", src: "https://iedc-website-2k25-26.vercel.app/images/team/anjanasankar.jpg", color: "#fb7185", title: "Student Lead", bio: "", linkedin: "https://www.linkedin.com/in/anjana-sankar-1ba508243/" },
    { name: "Rohit M R", src: "https://iedc-website-2k25-26.vercel.app/images/team/Rohit.jpg", color: "#60a5fa", title: "Branding and Marketing Lead", bio: "", linkedin: "https://www.linkedin.com/in/%20rohit-mr" },
    { name: "Najmudheen K", src: "https://iedc-website-2k25-26.vercel.app/images/team/Najmudheen.jpg", color: "#34d399", title: "Operations & Quality Lead", bio: "", linkedin: "https://www.linkedin.com/in/najmudheenk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Anand B Vijay", src: "https://iedc-website-2k25-26.vercel.app/images/team/anand.jpg", color: "#f59e0b", title: "Financial Lead", bio: "", linkedin: "https://www.linkedin.com/in/anandbvijay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Lakshmikha Rejith", src: "https://iedc-website-2k25-26.vercel.app/images/team/Lakshmikha.jpg", color: "#a78bfa", title: "Creative and Innovation Lead", bio: "", linkedin: "https://www.linkedin.com/in/lakshmikha-rejith" },
    { name: "Aisha Nama", src: "https://iedc-website-2k25-26.vercel.app/images/team/Aisha_Nama.jpg", color: "#06b6d4", title: "WIE Lead", bio: "", linkedin: "https://www.linkedin.com/in/aisha-nama-06256b253/" },
    { name: "Abinash Singh", src: "https://iedc-website-2k25-26.vercel.app/images/team/abinash.jpg", color: "#ef4444", title: "Technology Lead", bio: "", linkedin: "https://www.linkedin.com/in/abinashsinghlalotra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  const singleDuration = 7;
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [isLaptopOrLarger, setIsLaptopOrLarger] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % team.length);
      setAnimKey((k) => k + 1);
    }, singleDuration * 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsLaptopOrLarger(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // responsive semicircle path anchored at left edge and vertically centered
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [path, setPath] = useState(["M0,100 A400,400 0 0,1 0,900"]);
  const [svgSize, setSvgSize] = useState({ w: 1000, h: 1000 });

useLayoutEffect(() => {
  function update() {
    const el = containerRef.current;
    const w = el?.clientWidth ?? window.innerWidth;
    const h = el?.clientHeight ?? window.innerHeight;
    const r = Math.min(h * 0.45, w * 0.45);
    const cy = Math.round(h / 2);
    const topY = Math.round(cy - r);
    const bottomY = Math.round(cy + r);

    // Use freshly measured w, not svgSize.w
    const leftX = isLaptopOrLarger ? Math.round(w * 0.08) : 0;
    const rightX = isLaptopOrLarger ? Math.round(w * 0.75) : w;

    const leftPath = `M${leftX},${topY} A${r},${r} 0 0,1 ${leftX},${bottomY}`;
    const rightPath = `M${rightX},${topY} A${r},${r} 0 0,0 ${rightX},${bottomY}`;

    setPath(isLaptopOrLarger ? [leftPath, rightPath] : [leftPath]);
    setSvgSize({ w, h });
  }

  update();
  window.addEventListener('resize', update);
  return () => window.removeEventListener('resize', update);
}, [isLaptopOrLarger]);
  return (
    <div
      ref={containerRef}
      className="w-screen  h-screen bg-white overflow-hidden relative"
    >
      <style>{`
        @keyframes orbit {
          from { offset-distance: 0%; -webkit-offset-distance: 0%; }
          to   { offset-distance: 100%; -webkit-offset-distance: 100%; }
        }
        @keyframes textIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* visual semicircle guide */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={svgSize.w}
        height={svgSize.h}
        viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {path.map((p, idx) => (
          <path key={idx} d={p} fill="none" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />
        ))}
      </svg>

      {/* single avatar that travels the semicircle (left-edge, vertically centered) */}
      {isLaptopOrLarger ? (
        <>
{/* Left path: only one even-indexed avatar at a time */}
{(() => {
  const leftTeam = team.filter((_, i) => i % 2 === 0);
  const leftIndex = index % leftTeam.length;
  const member = leftTeam[leftIndex];

  return (
    <>
      {/* Left Avatar */}
      <div
        key={`left-${leftIndex}`}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 60,
          height: 60,
          transform: "translate(30px,-50%)",
          offsetPath: `path('${path[0]}')`,
          offsetDistance: "0%",
          offsetRotate: "0deg",
          animation: `orbit 7s linear infinite`,
          zIndex: 20,
          willChange: "transform, offset-distance",
        }}
      >
        <div
          style={{
            width: "300%",
            height: "300%",
            borderRadius: "50%",
            overflow: "hidden",
            background: member.color,
            border: "3px solid #fff",
            boxSizing: "border-box",
            display: "flex",
          }}
        >
          <img
            src={member.src}
            alt={member.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>

      {/* Left Info Text */}
      <div
        key={`left-text-${leftIndex}`}
        style={{
          position: "absolute",
          left: 80, // near avatar
          top: "50%",
          transform: "translateY(-50%)",
          color: "#000",
          zIndex: 30,
        }}
      >
        <div
          className="fadeSlideText"
          style={{ fontWeight: 700, fontSize: 32, marginBottom: 8 }}
        >
          {member.name}
        </div>
        <div
          className="fadeSlideText"
          style={{ fontSize: 20, color: "#333" }}
        >
          {member.title}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .fadeSlideText {
          opacity: 0;
          animation: fadeSlideIn 0.8s ease forwards;
        }
      `}</style>
    </>
  );
})()}


{/* Right path: only one odd-indexed avatar at a time */}
{(() => {
  const rightTeam = team.filter((_, i) => i % 2 === 1);
  const rightIndex = index % rightTeam.length;
  const member = rightTeam[rightIndex];

  return (
    <>
      {/* Right Avatar */}
      <div
        key={`right-${rightIndex}`}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 60,
          height: 60,
          transform: "translate(-30px,-50%)",
          offsetPath: `path('${path[1]}')`,
          WebkitOffsetPath: `path('${path[1]}')`,
          offsetRotate: "0deg",
          WebkitOffsetRotate: "0deg",
          animation: `orbit 7s linear infinite`,
          zIndex: 20,
          willChange: "transform, offset-distance",
        }}
      >
        <div
          style={{
            width: "300%",
            height: "300%",
            borderRadius: "50%",
            overflow: "hidden",
            background: member.color,
            border: "3px solid #fff",
            boxSizing: "border-box",
            display: "flex",
          }}
        >
          <img
            src={member.src}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "rotate(0deg)",
              transformOrigin: "center center",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Right Info Text */}
      <div
        key={`right-text-${rightIndex}`}
        style={{
          position: "absolute",
          right: 280, // near avatar
          top: "50%",
          transform: "translateY(-50%)",
          color: "#000",
          zIndex: 30,
          textAlign: "right",
        }}
      >
        <div
          className="fadeSlideText"
          style={{ fontWeight: 700, fontSize: 32, marginBottom: 8 }}
        >
          {member.name}
        </div>
        <div
          className="fadeSlideText"
          style={{ fontSize: 20, color: "#333" }}
        >
          {member.title}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .fadeSlideText {
          opacity: 0;
          animation: fadeSlideIn 0.8s ease forwards;
        }
      `}</style>
    </>
  );
})()}



        </>
      ) : (
        <div className=""
          key={animKey}
          style={{
            position: "absolute",
            left: -90,
            top: 0,
            width: 60,
            height: 60,
            transform: "translate(30px,-50%)",
            offsetPath: `path('${path[0]}')`,
            WebkitOffsetPath: `path('${path[0]}')`,
            offsetRotate: "0deg",
            WebkitOffsetRotate: "0deg",
            animation: `orbit ${singleDuration}s linear forwards`,
            zIndex: 20,
            willChange: "transform, offset-distance",
          }}
        >
          <div
            style={{
              width: "250%",
              height: "250%",
              borderRadius: "50%",
              overflow: "hidden",
              background: team[index].color,
              border: "3px solid #fff",
              boxSizing: "border-box",
              display: "flex",
            }}
          >
            <img
              src={team[index].src}
              alt={team[index].name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e: any) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      )}

      {/* Middle-right text panel — shows name, title, bio for the current avatar */}
      <div
      className="lg:hidden pl-24"
        key={`text-${animKey}`}
        style={{
          position: "absolute",
          right: "26%",
          top: "50%",
          transform: "translateY(-80%)",
          width: Math.min(420, svgSize.w * 0.32),
          color: "#000",              // black text
          textAlign: "center",
          pointerEvents: "auto",      // allow clicking the linkedin icon
          zIndex: 30,
          animation: `textIn 600ms ease`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 6 }}>
          <div  className="font-serif text-2xl  lg:text-3xl text-gray-800" style={{ fontWeight: 700, textAlign: "center" }}>
            {team[index].name}
          </div>

          {/* linkedin icon (renders only when linkedin provided) */}
          {team[index].linkedin ? (
            <a
              href={team[index].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
              aria-label={`LinkedIn - ${team[index].name}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 4.88071 3.86071 6 2.48 6C1.09929 6 0 -1.70076e-07 0  -1.70076e-07C0 -1.70076e-07 1.09929 -1.70076e-07 2.48 -1.70076e-07C3.86071 -1.70076e-07 4.98 1.11929 4.98 2.5V3.5Z" fill="#000"/>
                <rect x="0.5" y="7" width="4.96" height="13" rx="1" fill="#000"/>
                <path d="M9 7H13V9.5C13.5 8.2 15.1 7.4 16.8 7.4C20.2 7.4 21 9.6 21 13.1V20H16V13.7C16 12.1 15.6 10.9 14 10.9C12.4 10.9 12 12.1 12 13.7V20H9V7Z" fill="#000"/>
              </svg>
            </a>
          ) : null}
        </div>

        <div className="lg:text-lg text-md"style={{  fontWeight: 600, marginBottom: 8, color: "#000" }}>
          {team[index].title}
        </div>
        <div style={{ fontSize: 13, color: "#000", lineHeight: 1.3 }}>
          {team[index].bio}
        </div>
      </div>
    </div>
  );
}
