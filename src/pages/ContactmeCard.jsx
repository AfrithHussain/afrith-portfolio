// import { IoCallOutline } from "react-icons/io5";
// import { MdOutlineMail } from "react-icons/md";
// import { GrLocation } from "react-icons/gr";
// import ShinyButton from "@/components/ui/shiny-button";




// function ContactmeCard() {
 
//   return (
      
//     <div id="contact" className="w-full flex justify-center mt-20 ">
//       {/* toast */}
      

//       <div className="w-full max-w-4xl mt-16 px-4">
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl font-semibold text-center mr-20 lg:mr-0">Get In Touch</h1>

//         {/* Contact Info and Form */}
//         <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-40 mt-16">
//           {/* Contact Info Section */}
//           <div className="flex flex-col items-center lg:items-start gap-10">
//             <div className="flex gap-2 items-start mr-20 ">
//               <IoCallOutline className="text-3xl text-neutral-600" />
//               <div>
//                 <h1 className="text-lg sm:text-xl font-semibold ">Call Me</h1>
//                 <p className="text-neutral-600">(+91) 8667591408</p>
//               </div>
//             </div>
//             <div className="flex gap-2 items-start ">
//               <MdOutlineMail className="text-3xl text-neutral-600" />
//               <div>
//                 <h1 className="text-lg sm:text-xl font-semibold ">Email</h1>
//                 <p className="text-neutral-600">afrithhussain64@gmail.com</p>
//               </div>
//             </div>
//             <div className="flex gap-2 items-start mr-20">
//               <GrLocation className="text-3xl text-neutral-600" />
//               <div>
//                 <h1 className="text-lg sm:text-xl font-semibold">Location</h1>
//                 <p className="text-neutral-600">Tamil Nadu, India</p>
//               </div>
//             </div>
//           </div>

//           {/* Form Section */}
//           <div className="w-full max-w-md">
//           <form action="https://formspree.io/f/mldeeqbg"  method="POST">
//   {/* Name and Email Fields */}
//   <div className="flex flex-col sm:flex-row gap-6">
//     <div className="bg-neutral-200 p-2 py-3 rounded-md w-full">
//       <label className="block text-sm">Name</label>
//       <input
//         type="text"
//         name="name"
//         className="border-none mt-1 text-black bg-neutral-200 w-full focus:outline-none"
//         required
//       />
//     </div>
//     <div className="bg-neutral-200 p-2 py-3 rounded-md w-full">
//       <label className="block text-sm">Email</label>
//       <input
//   type="email"
//         name="email"
//         className="border-none mt-1 text-black bg-neutral-200 w-full focus:outline-none"
//         required
//       />
//     </div>
//   </div>

//   {/* Description Field */}
//   <div className="mt-6 bg-neutral-200 p-4 rounded-md">
//     <label className="block text-sm">Description</label>
//     <textarea 
//       name="message"
//       className="bg-neutral-200 w-full h-32 border-none focus:outline-none"
//       required
//     />
//   </div>

//   {/* Submit Button */}
//   <div className="mt-6 flex justify-center lg:justify-start">
//    <ShinyButton className="bg-neutral-600 text-white px-6 py-2 rounded-md"> <button 
//      type="submit"
//       className=""
//     >
//       Contact Me
//     </button></ShinyButton>
   
//   </div>
// </form>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactmeCard;


import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import ShinyButton from "@/components/ui/shiny-button";

function ContactmeCard() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data using Formspree or any API
    fetch("https://formspree.io/f/mldeeqbg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Reset the form data after successful submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          alert("Form submitted successfully!");
        } else {
          alert("Failed to submit the form. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="w-full flex justify-center mt-20">
      <div className="w-full max-w-4xl mt-16 px-4">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mr-20 lg:mr-0">
          Get In Touch
        </h1>

        {/* Contact Info and Form */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-40 mt-16">
          {/* Contact Info Section */}
          <div className="flex flex-col items-center lg:items-start gap-10">
            <div className="flex gap-2 items-start mr-20">
              <IoCallOutline className="text-3xl text-neutral-600" />
              <div>
                <h1 className="text-lg sm:text-xl font-semibold">Call Me</h1>
                <p className="text-neutral-600">(+91) 8667591408</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <MdOutlineMail className="text-3xl text-neutral-600" />
              <div>
                <h1 className="text-lg sm:text-xl font-semibold">Email</h1>
                <p className="text-neutral-600">afrithhussain64@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2 items-start mr-20">
              <GrLocation className="text-3xl text-neutral-600" />
              <div>
                <h1 className="text-lg sm:text-xl font-semibold">Location</h1>
                <p className="text-neutral-600">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit}>
              {/* Name and Email Fields */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-neutral-200 p-2 py-3 rounded-md w-full">
                  <label className="block text-sm">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-none mt-1 text-black bg-neutral-200 w-full focus:outline-none"
                    required
                  />
                </div>
                <div className="bg-neutral-200 p-2 py-3 rounded-md w-full">
                  <label className="block text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-none mt-1 text-black bg-neutral-200 w-full focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Description Field */}
              <div className="mt-6 bg-neutral-200 p-4 rounded-md">
                <label className="block text-sm">Description</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-neutral-200 w-full h-32 border-none focus:outline-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <ShinyButton className="bg-neutral-600 text-white px-6 py-2 rounded-md">
                  <button type="submit" className="">
                    Contact Me
                  </button>
                </ShinyButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactmeCard;
