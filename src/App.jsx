import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import SelectedWork from './components/SelectedWork';
import BentoGrid from './components/BentoGrid';
import StrategicSkills from './components/StrategicSkills';
import GraphicalWorks from './components/GraphicalWorks';
import PortfolioGallery from './components/PortfolioGallery';
import ResumeSection from './components/ResumeSection';
import Experience from './components/Experience';
import SkillsProcess from './components/SkillsProcess';
import FooterShowcase from './components/FooterShowcase';
import ScrollToTop from './components/ScrollToTop';

// Assets for Bento Grid
import xigiScreensImg from './assets/xigi_screens.png';
import designSystemImg from './assets/design_system.png';
import caseStudyImg from './assets/Case Study.png';

function App() {

  const bentoFeaturedProjects = [
    {
      title: "Xigi Tech",
      description: "XIGI is a DOOH advertising platform where partners onboard digital screens and advertisers create campaigns to display ads. XIA Intelligence recommends suitable screens, and after content approval, the ads go live.",
      logoText: "XIGI",
      image: xigiScreensImg,
      themeColor: "#4B5563"
    },
    {
      title: "Xigi Screens",
      description: "Manage every screen, every campaign, every payout in one place.",
      logoText: "xigiscreens",
      image: xigiScreensImg,
      themeColor: "#3B82F6"
    },
    {
      title: "Xigi Studio",
      description: "Design, organize, and publish digital advertising content with advanced creative tools tailored for DOOH platforms.",
      logoText: "xigistudio",
      image: xigiScreensImg,
      themeColor: "#8B5CF6"
    }
  ];

  const bentoDesignSystem = {
    title: "Design System",
    description: "As a case of Xia platform Full design System",
    image: designSystemImg
  };

  const bentoCaseStudy = {
    title: "Case Study",
    description: "XIA platform full user flow and user research case Study",
    image: caseStudyImg
  };

  return (
    <div className="bg-[#090909] text-white min-h-screen overflow-x-clip">
      <Navigation />
      
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Navigation to Hero: Note that Navigation is fixed, Hero has internal top padding of 120px to account for it, as requested in the Hero file. But wait, the strict spec says spacing. */}
        <Hero />
        
        {/* Continuous transition from Hero to Philosophy */}
        <Philosophy />
        
        <SelectedWork />

        <BentoGrid 
          featuredProjects={bentoFeaturedProjects} 
          designSystem={bentoDesignSystem} 
          caseStudy={bentoCaseStudy} 
        />

        <StrategicSkills />
        
        <GraphicalWorks />
        
        <PortfolioGallery />

        <ResumeSection />
        
      </main>
      
      <FooterShowcase />

      <ScrollToTop />
    </div>
  );
}

export default App;
