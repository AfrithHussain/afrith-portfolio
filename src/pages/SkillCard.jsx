
import * as React from "react"
import { Progress } from "@/components/ui/progress"

function SkillCard() {
    const [progress, setProgress] = React.useState(0)
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(95), 2000)
      return () => clearTimeout(timer)
    }, [])

    const [progressCss, setProgressCss] = React.useState(0)
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgressCss(85), 2000)
      return () => clearTimeout(timer)
    }, []);

    const [progressJs, setProgressJs] = React.useState(0)
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgressJs(70), 2000)
      return () => clearTimeout(timer)
    }, []);

    const [progressReact, setProgressReact] = React.useState(0)
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgressReact(85), 2000)
      return () => clearTimeout(timer)
    }, [])
  return (
    <div id="skill">
        <div className="mt-32">
        <h1 className="text-4xl font-semibold text-center ">Skill</h1>
        <p className="text-[17px] font-light mt-3 text-black text-center">my experience level</p>
        
        <div className="">
        <div className="flex justify-center gap-6 mt-16 items-center">
            <h1 className="text-xl w-[120px]">HTML</h1>
        <Progress value={progress} className="w-[40%]" />
        <p>95%</p>
        
        </div>
        <div className="flex justify-center gap-6 mt-16 items-center">
            <h1 className="text-xl w-[120px] ">CSS</h1>
        <Progress value={progressCss} className="w-[40%]" />
        <p>85%</p>
        
        </div>
        <div className="flex justify-center gap-6 mt-16 items-center">
            <h1 className="text-xl w-[130px]">Javascript</h1>
        <Progress value={progressJs} className="w-[40%]" />
        <p>70%</p>
        
        </div>
        <div className="flex justify-center gap-6 mt-16 items-center">
            <h1 className="text-xl w-[120px]">React</h1>
        <Progress value={progressReact} className="w-[40%]" />
        <p>85%</p>
        
        </div>
        </div>

       
       
        </div>
        <div className="">


        </div>
    </div>
  )
}

export default SkillCard;