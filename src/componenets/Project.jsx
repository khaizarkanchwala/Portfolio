import React from 'react'
import alpr from '../assets/alpr.jpg'
import entryway from '../assets/EntryWay.png'
import invoice from '../assets/invoice.jpg'
import googlesupa from '../assets/googleApi.jpeg'
import secure_login from '../assets/secure_login.jpeg'

const Project = () => {

  const projects=[
    {
      id:1,
      src: entryway,
      url:"https://github.com/khaizarkanchwala/EntryWay",
      title:"EntryWay"
    },
    {
      id:2,
      src: alpr,
      url:"https://github.com/khaizarkanchwala/ALPR_System",
      title:"Challan On Click"
    },
    {
      id:3,
      src: invoice,
      url:"https://github.com/khaizarkanchwala/Invoice-Generator-and-Manager",
      title:"Invoice Generator"
    },
    {
      id:4,
      src: googlesupa,
      url:"https://github.com/khaizarkanchwala/Google-Calendar-Integration-SupaBase",
      title:"Event Schedular"
    },
    {
      id:5,
      src: secure_login,
      url:"https://github.com/khaizarkanchwala/Secure_Login_Register",
      title:"Secure Login System"
    },
  ]

  const openUrlInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div name="projects" className="bg-gradient-to-b  from-gray-800 to-black w-full py-20 text-white md:h-auto">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
          projects.map(({id,src,url,title})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-auto">
            <img src={src} alt="pjimage" className="rounded-md w-80 h-32 duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <p className='px-6 py-3 text-gray-300 font-bold'>{title}</p>
            </div>
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 duration-200 hover:scale-105" onClick={() => openUrlInNewTab(url)}>Code</button>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Project
