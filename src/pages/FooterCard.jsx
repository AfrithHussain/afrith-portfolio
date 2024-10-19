 
import {Dock} from '@/components/ui/dock'
import { DockIcon } from "@/components/ui/dock";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
 
function FooterCard() {
    

 

  return (
    <div className=''>
        
        <div className=" ">
        <div className="" >
      <Dock direction="middle" className="border border-neutral-900 bg-white">
        <DockIcon className="text-2xl">
         <a href="https://github.com/AfrithHussain"><FaGithub/></a>
        </DockIcon>
        <DockIcon>
        <a href=""><FaInstagram className="text-2xl "/></a>
         
        </DockIcon>
        <DockIcon>
        <a href="https://www.linkedin.com/in/afrith-hussain/"><FaLinkedin className="text-2xl"/></a>
       
        </DockIcon>
       
      </Dock>
    </div>
        </div>
    </div>
  )
}

export default FooterCard

