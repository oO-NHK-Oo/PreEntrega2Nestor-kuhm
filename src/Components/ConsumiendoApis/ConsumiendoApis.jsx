import React from 'react'
import { useEffect } from 'react'

const ConsumiendoApis = () => {

  useEffect(()=> {
    const getData = fetch("https://jsonplaceholder.typicode.com/posts")

    getData
    .then((res)=> res.json())
    .catch((err)=> console.log(err))


 },[])



  return (
    <div>ConsumiendoApis</div>
  )
}

export default ConsumiendoApis