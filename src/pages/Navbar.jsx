
import { cn } from "@/lib/utils";
import ShimmerButton from "@/components/ui/shimmer-button";
import { RiMenuLine } from "react-icons/ri";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";


import {
  Sheet,
  SheetClose,
  SheetContent,

  SheetFooter,
  SheetHeader,
  
  SheetTrigger,
} from "@/components/ui/sheet"







function Navbar() {

  
  return (
    <div>
    



    
      <div className=" navbar flex  justify-between md:mx-[40px] lg:mx-[60px] items-center mt-4 text-lg mx-[20px]">
      <div className="mt-4">
      <AnimatedGradientText>
        
        <span
          className={cn(
            `jan  text-[44px]  inline animate-gradient bg-gradient-to-r from-[#000000] via-[#000000] to-[#d0cdcd] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Afrith
        </span>
       
      </AnimatedGradientText>
      


      
    </div>
       

        {/* Navbar links */}
        <div className="hidden sm:gap-4 font-semibold sm:flex md:gap-10 text-neutral-800">
         <a href="#about">About </a> 
          <a href="#skill">Skills</a>
          <a href="#education">Education</a>
          <a href="#project">Projects</a>
        </div>

        {/* Shiny Button */}
        <a href="#contact" className="hidden sm:block z-10">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Get In Touch
            </span>
          </ShimmerButton>
        </a>

        {/* Side Navbar - Toggle button */}
          

        

    <div className=" sm:hidden ">
  
    <Sheet className="w-80">
      <SheetTrigger asChild>
        <p className="text-3xl cursor-pointer  border rounded-md p-1 border-neutral-300 hover:bg-neutral-50"><RiMenuLine /></p>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          
          <div className="">
          <div className="flex flex-col gap-16 text-center mt-32 text-xl  justify-center">
          <a href="">About</a> 
          <a href="">Skills</a>
          <a href="">Education</a>
          <a href="">Projects</a>
        </div>
          </div>
        </SheetHeader>
        
        <SheetFooter>
          <SheetClose asChild>
            
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>

          
      
        </div>
       
      </div>
    
  );
}

export default Navbar;

