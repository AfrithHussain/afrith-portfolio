import { useTheme } from "next-themes";
 
import { MagicCard } from "@/components/ui/magic-card";
function ProjectCard() {
    const { theme } = useTheme();
  return (
    <div id="project">
        <div className="">
            <div className="mt-32">
            <h1 className="text-4xl font-semibold text-center ">Projects</h1>
            <p className="text-[17px] font-light mt-3 text-black text-center">my latest works</p>
            </div>

            <div className="">
            <div
      className={
        "flex h-[500px] mx-auto w-[60%] md:w-[50%] mt-10 flex-col gap-10 lg:h-[250px] lg:flex-row "
      }
    >
     <a href="https://codekaro-webpage-lr9j.vercel.app/"> <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap bg-neutral-400 text-4xl text-white"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
         Online Course
      </MagicCard></a>
      <a href="https://insta-clone-spa.vercel.app/">
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl bg-neutral-400 text-white"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Insta clone-spa
        
      </MagicCard>
      </a>
    </div>
            </div>

            {/* Card 2 */}
            <div className="">
            <div
      className={
        "flex h-[500px] mx-auto w-[60%] md:w-[50%] mt-10 flex-col gap-10 lg:h-[250px] lg:flex-row "
      }
    >
      <a href="https://movie-app-six-virid-69.vercel.app/">
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap bg-neutral-400 text-4xl text-white"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Movie App
      </MagicCard>
      </a>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl bg-neutral-400 text-white"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Project 4
      </MagicCard>
    </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard