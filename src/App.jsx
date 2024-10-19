import HeroCard from "./pages/HeroCard";
import Navbar from "../src/pages/Navbar";
import BlurFade from "./components/ui/blur-fade";
import AboutCard from "./pages/AboutCard";
import SkillCard from "./pages/SkillCard";
import Education from "./pages/Education";
import ProjectCard from "./pages/ProjectCard";
import ContactmeCard from "./pages/ContactmeCard";
import FooterCard from "./pages/FooterCard";



function App() {
  return (
   <div>
      <BlurFade>
        
       
       <Navbar/></BlurFade>
       
       <BlurFade> <HeroCard/></BlurFade>
        
        <BlurFade><AboutCard/></BlurFade>
       <BlurFade> <SkillCard/></BlurFade>
       <BlurFade><Education/></BlurFade>
       <BlurFade><ProjectCard/></BlurFade>
         <BlurFade> <ContactmeCard/></BlurFade>
       
        
        
       
       <div className="sticky bottom-2   ">
       <FooterCard />
       </div>
     
        
      
      
    </div>
  )
}

export default App;