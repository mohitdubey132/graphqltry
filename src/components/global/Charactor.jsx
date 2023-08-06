import React from 'react'
import { useCharacters } from '../../hooks/useCharactors'
import { useNavigate, useNavigation } from 'react-router-dom';

const Charactor = () => {

    const {data,error,loading} = useCharacters();
    const navigaation = useNavigate()
    return (
    <div className='w-full flex flex-wrap flex-row  gap-5 justify-center ' >
        {loading?<div className='w-full h-[40rem] flex flex-wrap animate-pulse justify-center gap-5'><DommyCards/><DommyCards/>
        <DommyCards/>
        <DommyCards/>
        <DommyCards/></div>: data?.characters?.results?.map((item,i)=>(
            <div onClick={()=>navigaation(`/${item?.id}`)} className='gap-8 focus:scale-x-110 flex flex-col text-center shadow-lg shadow-lime-400 justify-center ' key={item.id}>
              <img src={item.image} alt='d'/>
              <h3 className='font-poppins font-medium text-2xl'>{item.name}</h3>
              <h5 className='font-raleway text-sm '>
                {item.gender} <span>{item.species}</span>
              </h5>
            </div>
        ))

        }
       
    </div>
  )
}

export default Charactor

const DommyCards =()=>{
    return(<div className='gap-8 focus:scale-x-110 flex flex-col animate-pulse text-center shadow-lg shadow-lime-400 justify-center '>
    <div className='w-[300px] h-[300px] rounded-lg bg-gray-400 '/>
    <h3 className='font-poppins font-medium text-2xl w-2/5 h-8 rounded-lg bg-gray-400'></h3>
    <h5 className='font-raleway text-sm  w-full rounded-lg h-5 bg-gray-400 '/>
  </div>)
}