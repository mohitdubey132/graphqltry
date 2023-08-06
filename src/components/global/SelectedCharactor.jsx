import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCharacter } from '../../hooks/useSelectedCharactor';
const SelectedCharactor = () => {
    const {id} =useParams();
    const {data,error, loading} =useCharacter(id);
    console.log(error)
  return (
    <div className='w-full flex justify-center align-top mx-auto'>

    {loading?<LoadingCard/>:<CharcterCard data={data?.character}/>}
    </div>
  )
}

export default SelectedCharactor;
const CharcterCard =({data})=>{
    return(
        <div className='w-2/4 h-auto flex flex-col gap-4 items-center text-center justify-center p-5 shadow-2xl border border-solid rounded-lg'>
        <img src={data?.image} alt='d'/>
        <h2 className='font-poppins font-semibold text-2xl'>{data?.name}</h2>
        <h4 className='font-raleway font-normal text-lg'>{data?.gender} {data?.species}</h4>
         <Link to={'/'}> <button  className='px-[3.2rem] py-3 font-poppins text-xl bg-green-600 text-white '>Back</button></Link>
        </div>
    )
}
const LoadingCard =()=>{
    return(<div className='w-2/5 h-3/5 animate-pulse flex flex-col gap-6'>
        <div className='w-full h-[16rem] bg-gray-300 rounded-lg'/>
        <h3 className='w-full h-7 bg-gray-300'/>
        <h3 className='w-/5 h-7 bg-gray-300'/>
    </div>)
}