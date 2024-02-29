import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState({})
    // useEffect (() => {
    //     fetch("https://api.github.com/users/Manideep-Sitaram")
    //     .then(res => res.json())
    //     .then( res => {
    //      setData(res)   
    //     })
    // },[])
  return (
    <>
       <div className='text-3xl text-white bg-gray-700 p-4 m-4 flex'>
        <img src= {data.avatar_url} alt="Profile Picture" width={100}/>
        <div className='w-full flex justify-center items-center'>Github is {data.followers}</div>
       </div>
      
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const data = await fetch("https://api.github.com/users/Manideep-Sitaram")
    return data.json()
}