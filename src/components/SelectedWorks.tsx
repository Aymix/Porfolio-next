'use client';

import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WorkFilters from './WorkFilters';
import { FaReact, FaWordpress, FaDocker, FaPhp, FaLaravel, FaJs, FaAws, FaMobile, FaShoppingCart } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiDotnet, SiElementor, SiCodeigniter, SiSocketdotio, SiMysql, SiAngular, SiFlutter } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { AiFillLock } from 'react-icons/ai';
import { MdDesignServices, MdIntegrationInstructions, MdPayment, MdEmail } from 'react-icons/md';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';

interface Work {
  title: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
}

const tagIcons: { [key: string]: JSX.Element } = {
  'React': <FaReact className="mr-1" />,
  'NextJs': <SiNextdotjs className="mr-1" />,
  'Wordpress': <FaWordpress className="mr-1" />,
  'Docker': <FaDocker className="mr-1" />,
  'PHP': <FaPhp className="mr-1" />,
  'Laravel': <FaLaravel className="mr-1" />,
  'Javascript': <FaJs className="mr-1" />,
  'AWS': <FaAws className="mr-1" />,
  'MongoDB': <SiMongodb className="mr-1" />,
  '.net': <SiDotnet className="mr-1" />,
  'Elementor': <SiElementor className="mr-1" />,
  'CodeIgniter': <SiCodeigniter className="mr-1" />,
  'Socket.io': <SiSocketdotio className="mr-1" />,
  'MySQL': <SiMysql className="mr-1" />,
  'Angular': <SiAngular className="mr-1" />,
  'Flutter': <SiFlutter className="mr-1" />,
  'Design': <MdDesignServices className="mr-1" />,
  'Integration': <MdIntegrationInstructions className="mr-1" />,
  'PaymentGateway': <MdPayment className="mr-1" />,
  'WooCommerce': <FaShoppingCart className="mr-1" />,
  'NDA': <AiFillLock className="mr-1" />,
  'Confidential': <AiFillLock className="mr-1" />,
  'Mailing': <MdEmail className="mr-1" />,
  'Plugin': <BsFileEarmarkCode className="mr-1" />,
  'AR': <GiArtificialIntelligence className="mr-1" />,
};

const getIcon = (tag: string) => {
  return tagIcons[tag] || <BiCodeAlt className="mr-1" />;
};

const getAllUniqueTags = (works: Work[]): string[] => {
  const tagsSet = new Set<string>();
  works.forEach(work => work.tags.forEach(tag => tagsSet.add(tag)));
  return Array.from(tagsSet).sort();
};

const works: Work[] = [
  {
    title: "AR Elearning Platform",
    description: "An innovative AR-based e-learning platform leveraging A-Frame for immersive educational experiences.",
    image: "/projects/ar-elearning.png",
    url: "https://www.easyprof.com/easyprof/",
    tags: ["AR", "Aframe", "Javascript", "Integration", "wyswg", "AWS"]
  },
  {
    title: "DMS FORME and digi-form",
    description: "Custom WordPress solution with advanced Elementor integration for digital form management.",
    image: "/projects/dms-forme.png",
    url: "https://www.dmsforme.com",
    tags: ["Wordpress", "Elementor", "Integration"]
  },
  {
    title: "KB ITWorx",
    description: "Confidential WordPress plugin development project with custom PHP implementations.",
    image: "/projects/kb-itworx.png",
    tags: ["Wordpress", "Plugin", "Php", "NDA", "Confidential"]
  },
  {
    title: "Marovasabe Hotel",
    description: "Elegant hotel website with custom design and WordPress integration.",
    image: "/projects/marovasabe.png",
    url: "https://www.marovasabe.com",
    tags: ["Wordpress", "Design", "Integration", "Elementor"]
  },
  {
    title: "Unvarnished by Scott Gilen",
    description: "Custom WordPress website with unique design elements and Elementor integration.",
    image: "/projects/unvarnished.png",
    url: "https://unvarnishedco.com/",
    tags: ["Design", "Wordpress", "Elementor", "Integration"]
  },
  {
    title: "Star2Lead",
    description: "Comprehensive platform with web and mobile applications, featuring Keycloak integration.",
    image: "/projects/star2lead.png",
    url: "https://star2Lead.com",
    tags: ["NextJs", "Angular", "React", "Integration", "Keycloak", "Dashboard", "Flutter"]
  },
  {
    title: "Restaurant Reservation System",
    description: "Confidential project: Advanced restaurant reservation system with QR code integration.",
    image: "/projects/restaurant.png",
    tags: ["Laravel", "VueJs", "QRCode", "NDA", "Dashboard", "Confidential"]
  },
  {
    title: "Camera Management System",
    description: "Modern CMS built with Next.js and MUI, featuring AWS integration and Python backend.",
    image: "/projects/cms.png",
    tags: ["NextJs", "React", "VanilaJS", "AWS", "EC2", "FTP", "Python", "MUI"]
  },
  {
    title: "RSS Feed Fetcher",
    description: "Confidential Docker-based RSS feed aggregation system.",
    image: "/projects/rss.png",
    tags: ["Docker", "Integration", "Laravel", "PHP", "RSS/Atom", "NDA", "Confidential"]
  },
  {
    title: "Live E-learning Platform",
    description: "Real-time e-learning platform with live interaction capabilities.",
    image: "/projects/live-elearning.png",
    tags: ["VueJs", "Laravel", "Integration", "MySQl", "Socket.io", "Design"]
  },
  {
    title: "Bed Builder",
    description: "Interactive bed configuration tool with CodeIgniter backend.",
    image: "/projects/bed-builder.png",
    url: "theraposture.com/bed-builder",
    tags: ["CodeIgniter", "PHP", "Jquery", "Javascript", "Integration"]
  },
  {
    title: "Targus New Products",
    description: "E-commerce platform built with NopCommerce and custom integrations.",
    image: "/projects/targus.png",
    url: "targus.uk.com/",
    tags: [".net", "Ecommerce", "Elementor", "Integration", "Javascript", "Design", "NopCommerce"]
  },
  {
    title: "Tawaree",
    description: "WordPress-based platform with custom payment gateway integration.",
    image: "/projects/tawaree.png",
    url: "https://tawaree.qa.com",
    tags: ["Wordpress", "PaymentGateway", "Documentation", "NDA"]
  },
  {
    title: "Vagabondage By Maya",
    description: "Custom WooCommerce store with elegant design and functionality.",
    image: "/projects/vagabondage.png",
    url: "https://vagabondagebymaya.com",
    tags: ["Wordpress", "WooCommerce", "Elementor", "Integration", "PHP", "Design"]
  },
  {
    title: "Cremeria Scirocco",
    description: "Multi-language WooCommerce store with custom design.",
    image: "/projects/cremeria.png",
    url: "https://www.cremeriascirocco.it/wordpress/en/home/",
    tags: ["Wordpress", "WooCommerce", "Elementor", "Integration", "PHP", "Design", "Ecommerce"]
  },
  {
    title: "Carthage Notes",
    description: "WordPress template integration project.",
    image: "/projects/carthage.png",
    url: "https://carthagenotes.tn",
    tags: ["Wordpress", "Integration", "Template"]
  },
  {
    title: "Flash Interactive Apps",
    description: "Collection of interactive educational games and animations.",
    image: "/projects/flash.png",
    tags: ["Gaming", "Elearning", "Animation", "Motion", "Graphic", "Design"]
  },
  {
    title: "RFQ Mailing System",
    description: "Custom mailing system integrated with WooCommerce database.",
    image: "/projects/rfq.png",
    tags: ["Php", "Mailing", "Laravel", "Vuejs", "NDA"]
  },
  {
    title: "IDIS Agency",
    description: "Agency website with custom PHP and Elementor integration.",
    image: "/projects/idis.png",
    url: "https://www.idiscreativemarketing.co.uk",
    tags: ["PHP", "Elementor"]
  },
  {
    title: "Theraposture Main Website",
    description: "WooCommerce-based website with custom Elementor integration.",
    image: "/projects/theraposture.png",
    url: "http://www.theraposture.co.uk/ex-demo-sale/ex-demo-chair-sale/",
    tags: ["Wordpress", "WooCommerce", "Elementor", "Integration"]
  },
  {
    title: "Video Autorun Application",
    description: "Electron-based video player with custom functionality.",
    image: "/projects/video-autorun.png",
    tags: ["ElectronJs", "JQuery", "bootstrap", "NDA", "Confidential", "VideoJs"]
  },
  {
    title: "Fun Projects Collection",
    description: "Various open-source projects showcasing different technologies.",
    image: "/projects/fun-projects.png",
    url: "https://github.com/Aymix",
    tags: ["Vue3", "Vutify", "MongoDB", "Laravel", "ReactNative", "React", "Laravel"]
  }
];

const SelectedWorks = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = getAllUniqueTags(works);

  const normalizeTag = (tag: string): string => {
    // Normalize tags to handle case-insensitive matching and common variations
    const normalizations: { [key: string]: string } = {
      'reactjs': 'React',
      'react.js': 'React',
      'nextjs': 'Next.js',
      'next.js': 'Next.js',
      'vuejs': 'Vue.js',
      'vue.js': 'Vue.js',
      'nodejs': 'Node.js',
      'node.js': 'Node.js',
      'dotnet': '.NET',
      '.net': '.NET',
      'postgresql': 'PostgreSQL',
      'wordpress': 'WordPress',
      'woocommerce': 'WooCommerce',
      'javascript': 'JavaScript',
      'js': 'JavaScript',
      'typescript': 'TypeScript',
      'ts': 'TypeScript'
    };
    
    const normalized = tag.toLowerCase();
    return normalizations[normalized] || tag;
  };

  const filteredWorks = works.filter(work => {
    if (selectedTags.length === 0) return true;
    
    return selectedTags.some(selectedTag => 
      work.tags.some(workTag => 
        normalizeTag(workTag).toLowerCase() === normalizeTag(selectedTag).toLowerCase()
      )
    );
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section className='w-[100%] flex mt-[60px] flex-col'>
      <div className='w-[100%] flex'>
       
        <div className=''>
          <div className="h-[1px] bg-[#E0D7CE] mb-[20px]"></div>
          <h2 className="text-[26px] font-serif mb-8 text-[#101010]">Selected works</h2>
          <WorkFilters 
            allTags={allTags}
            selectedTags={selectedTags}
            onTagToggle={toggleTag}
          />
          <div className="space-y-8 mt-8">
            {filteredWorks.map((work, index) => (
              <div 
                key={index}
                className="block group"
              >
                <div className="bg-white border border-[#e5e7eb] rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                  <div className={`relative aspect-[4/3] w-full p-6 ${!work.tags.includes('NDA') ? 'cursor-pointer' : ''}`} 
                    onClick={() => !work.tags.includes('NDA') && console.log('Modal functionality removed')}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={work.tags.includes('NDA') ? '/nda-placeholder.png' : work.image}
                        alt={work.title}
                        fill
                        className={`object-cover rounded-2xl ${
                          work.tags.includes('NDA') ? 'blur-md' : ''
                        }`}
                      />
                      {work.tags.includes('NDA') && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FiEyeOff className="text-white text-4xl bg-black/20 p-2 rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6 pt-[0px]">
                    <h3 className="text-xl font-serif mb-2 text-[#101010]">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-sm rounded-md flex items-center ${
                            selectedTags.some(selectedTag => 
                              normalizeTag(selectedTag).toLowerCase() === normalizeTag(tag).toLowerCase()
                            )
                              ? 'bg-black text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {normalizeTag(tag)}
                        </span>
                      ))}
                    </div>
                    {work.url && !work.tags.includes('NDA') && (
                      <a 
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                      >
                        Visit Project →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
