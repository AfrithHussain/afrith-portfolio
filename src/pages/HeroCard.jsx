import WordRotate from "@/components/ui/word-rotate";
import Afrith from "../assets/afrithlinkedin2.jpg"
function HeroCard() {
  return (
    <div>


<div className="flex flex-col-reverse lg:flex-row justify-evenly items-center w-screen">
  <div className="text-center md:text-left mt-44">
    <div className="flex items-center gap-4 translate-x-6 md:translate-x-0 md:mx-[0px] justify-center  w-fit ">
      <h1 className="text-[22px] md:text-5xl lg:text-5xl font-bold">Hey, I am </h1>
      <WordRotate className="text-[22px]  md:text-5xl lg:text-5xl font-bold text-black dark:text-white" words={["Afrith Hussain", "Frontend Developer"]} />
    </div>
   
    <p className="text-xl text-neutral-600  font-base md:text-left md:mx-[0px] text-center mx-[10px] leading-9  mt-6 font-light md:max-w-[800px]" >Software Engineer turned Entrepreneur with a passion for building innovative digital solutions and empowering others through technology</p>
  </div>
  <div className="flex justify-center">
    <img className="translate-y-20 object-cover rounded-full h-56 w-56" src={Afrith} alt="Afrith Hussain" />
  </div>
</div>

         










    </div>
  )
}

export default HeroCard