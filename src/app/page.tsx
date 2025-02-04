import Image from "next/image";
import HeroSection from '@/components/HeroSection';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import WhatIDo from '@/components/WhatIDo';
import SelectedWorks from '@/components/SelectedWorks';
import IntroSection from '@/components/IntroSection';

export default function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] px-4 pb-32">
        <section className="pr-0 md:pr-[40px] relative md:sticky top-0 h-auto md:h-screen justify-self-start">
          <HeroSection />
        </section>
        <section className="pr-0 md:pr-[40px] justify-self-start md:justify-self-end space-y-12">
          <IntroSection />
          <WorkExperience />
          <Education />
          <WhatIDo />
          <SelectedWorks />
        </section>
      </main>
    </div>
  );
}
