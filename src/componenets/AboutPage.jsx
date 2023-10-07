import React from 'react'

const AboutPage = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pd-8"> 
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">About</p>
        </div>

          <p className="text-xl mt-10 text-white">
          Hello! I'm Khaizar Kanchwala, a dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning.
          My journey in the world of technology has been a thrilling adventure, marked by continuous learning, innovation, and a passion for problem-solving.
          I'm currently pursuing a Bachelor's in Computer Science, and I'm proud to specialize in AI and ML.
          Throughout my academic career and projects, I've delved deep into the fascinating realms of AI algorithms, data analysis,machine learning models,fullstack development and software development.
          My coursework and working on projects has equipped me with a strong foundation in the field, and I'm excited to apply this knowledge to real-world challenges.
          </p>

      </div>
    </div>
  )
}

export default AboutPage