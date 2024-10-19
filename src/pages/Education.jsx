




function Education() {
    
    
  let events = [
    { date: "2018-2019", title: "10th State Board", description: "Sairam Matric High Sec School,West Tambaram" },
    { date: "2020 - 2021", title: "12th State Board", description: "Sairam Matric High Sec School,West Tambaram" },
    { date: "2021 - 2025", title: "BTech Information Technology", description: "Meenakshi Collage of engineering,Virugambakkam" },
    
  ];
    
   
  return (
    <div id="education">

       <div className="mt-36">
       <div className="">
       <h1 className="text-4xl font-semibold text-center ">Education</h1>
       <p className="text-[17px] font-light mt-3 text-black text-center">my personal journey</p>
       </div>
        <div className="">
        <div className="relative flex flex-col items-center mt-10">
      <div className="absolute w-[2px] bg-neutral-500 h-full left-1/2 transform -translate-x-1/2"></div>
      
      {events.map((event, index) => (
        <div key={index} className={`mb-10 w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}>
          <div className={`flex items-center w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
            <div className="w-full px-5">
              <h3 className="font-[450] text-lg ">{event.title}</h3>
              <span className="text-gray-500  ">{event.date}</span>
              <p className="mt-3 text-sm ">{event.description}</p>
            </div>
          </div>

          {/* Timeline Dot */}
          <div className="absolute bg-neutral-500 w-6 h-6 rounded-full border-4 border-white left-1/2 transform -translate-x-1/2"></div>
        </div>
      ))}
    </div>
        </div>
       </div>
    </div>
  )
}

export default Education