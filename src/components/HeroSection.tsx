import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex mt-16 md:mt-32 justify-center h-full">
      <div className="flex flex-col items-center md:items-start gap-6">
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0">
          <Image
            src="/profile-image.jpeg"
            alt="Profile"
            fill
            className="rounded-[35px] object-cover"
            priority
          />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-[40px] md:text-[50px] font-serif text-[#101010]">
            I'm Aymen Hmida
          </h1>
          <p className="text-[20px] md:text-[23px] text-[#101010] max-w-[400px]">
            Introductions are boring let's make cool stuff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
