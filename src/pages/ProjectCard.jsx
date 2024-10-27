 
function ProjectCard() {
   
  return (
    <div id="project">
        <div className="">
            <div className="mt-32">
            <h1 className="text-4xl font-semibold text-center ">Projects</h1>
            <p className="text-[17px] font-light mt-3 text-black text-center">my latest works</p>
            </div>

            <div className="">
            <div
      className="flex-col flex items-center md:flex-row gap-10 justify-center mt-10" >
     <a href="https://codekaro-webpage-lr9j.vercel.app/" >
        <div className="w-[230px] h-[180px]  rounded-md text-xl  text-center bg-neutral-400  flex items-center justify-center">
          Online Course
        </div>
      </a>
      <a href="https://insta-clone-spa.vercel.app/">
      <div className="w-[230px] h-[180px]  rounded-md text-xl  text-center bg-neutral-400  flex items-center justify-center">
          Insta Clone-Spa
        </div>
        
       
      </a>
    </div>
            </div>

            {/* Card 2 */}
            <div className="">
            <div
      className={
        "flex-col flex items-center   md:flex-row gap-10 justify-center mt-10"
      }
    >
      <a href="https://movie-app-six-virid-69.vercel.app/" >
     
      <div className="w-[230px] h-[180px]  rounded-md text-xl  text-center bg-neutral-400  flex items-center justify-center">
         Movie App
        </div>
      
      </a>
      <a href="https://movie-app-six-virid-69.vercel.app/" >
     
      <div className="w-[230px] h-[180px]  rounded-md text-xl  text-center bg-neutral-400  flex items-center justify-center">
          Project 4
        </div>
      
      </a>
      
    </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard