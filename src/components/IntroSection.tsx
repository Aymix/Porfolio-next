import Link from 'next/link';

const IntroSection = () => {
  return (
    <div className="text-center md:text-left space-y-6  mt-8 md:mt-16 ">
      <h2 className="text-[32px] md:text-[42px] font-serif text-[#101010] leading-[1.2] mx-auto md:mx-0 max-w-[500px] md:max-w-none">
        Dynamic Senior Software Developer with 8 years of experience in delivering impactful solutions
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link 
          href="mailto:aymenhmida1@gmail.com"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-center"
        >
          Talk with me
        </Link>
        <Link 
          href="#work"
          className="bg-white text-black px-8 py-3 rounded-full border border-[#E0D7CE] hover:bg-gray-50 transition-colors text-center"
        >
          See my work
        </Link>
      </div>
    </div>
  );
};

export default IntroSection;
