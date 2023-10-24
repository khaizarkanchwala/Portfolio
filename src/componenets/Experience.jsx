import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import express from "../assets/expressjs.png"
import flask from "../assets/flask.png"
import mongodb from "../assets/mongodb.png"
import git from "../assets/git.png"
import mysql from "../assets/mysql.png"
import nodejs from "../assets/nodejs.png"
import opencv from "../assets/opencv.png"
import tailwind from "../assets/tailwind.png"
const Experience = () => {

    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:react,
            title:'REACT.JS',
            style:'shadow-blue-300'
        },
        {
            id:4,
            src:express,
            title:'EXPRESS.JS',
            style:'shadow-blue-800'
        },
        {
            id:5,
            src:flask,
            title:'FLASK',
            style:'shadow-gray-500'
        },
        {
            id:6,
            src:nodejs,
            title:'NODE.JS',
            style:'shadow-green-800'
        },
        {
            id:7,
            src:mongodb,
            title:'MONGODB',
            style:'shadow-green-500'
        },
        {
            id:8,
            src:mysql,
            title:'MYSQL',
            style:'shadow-orange-500'
        },
        {
            id:9,
            src:opencv,
            title:'OPENCV',
            style:'shadow-red-500'
        },
        {
            id:10,
            src:git,
            title:'GIT',
            style:'shadow-red-800'
        },
        {
            id:11,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },

    ]

  return (
    <div name='experience' className="w-full h-auto  bg-gradient-to-b  from-black to-gray-800">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">Experience</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    techs.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg h-28 ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto"/>
                    <p className="mt-0">{title}</p>
                </div>
                    ))
                }

            </div>
        </div>

    </div>
  )
}

export default Experience
