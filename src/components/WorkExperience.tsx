import Image from 'next/image';

interface Experience {
  title: string;
  company: string;
  period: string;
  logo: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "AMITECHSS",
    period: "09/2024 – Present",
    logo: "/company-logos/amitechss.png"
  },
  {
    title: "Fullstack Web Engineer",
    company: "ACOBA",
    period: "08/2022 – 08/2024",
    logo: "/company-logos/acoba.png"
  },
  {
    title: "Senior Software Engineer",
    company: "ITWORX",
    period: "03/2020 - 07/2022",
    logo: "/company-logos/itworx.png"
  },
  {
    title: "Web Developer",
    company: "IT GATE",
    period: "09/2019 – 03/2020",
    logo: "/company-logos/itgate.png"
  },
  {
    title: "Fullstack Developer",
    company: "DRAWNDESIGN",
    period: "09/2017 – 07/2019",
    logo: "/company-logos/drawndesign.png"
  },
  {
    title: "Software Developer",
    company: "FREELANCER",
    period: "10/2016 – 09/2017",
    logo: "/company-logos/freelancer.jpg"
  }
];

const WorkExperience = () => {
  return (
    <section className='w-[100%] flex pt-16 md:pt-60'>
      <div className=''>
          <div className="h-[1px] bg-[#E0D7CE] mb-[20px]"></div>
          <h2 className="text-[26px] font-serif mb-[20px] text-[#101010]">Working experience</h2>
          
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="bg-white border border-[#e5e7eb] rounded-full p-6 flex items-center justify-between hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-[70px] h-[70px]">
                    <div className="absolute inset-0 bg-gray-100 rounded-full">
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        fill
                        className="object-contain rounded-full p-[15px]"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-[#101010]">{experience.title}</h3>
                    <p className=" font-bold text-[#101010]">{experience.company}</p>
                  </div>
                </div>
                <p className="text-gray-500">{experience.period}</p>
              </div>
            ))}
          </div>
          </div>
    </section>
  );
};

export default WorkExperience;
