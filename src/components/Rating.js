import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export default function Rating({rating,onClick,style}) {
  return (
    <>{
        [...Array(5)].map((_,i)=>(
            <span key={i} style={style} onClick={()=>onClick(i)}>
            {rating>i?
            (<AiFillStar fontSize='15px'/>):
            (<AiOutlineStar fontSize='15px'/>)}
            </span>
        ))
    }</>
  )
}
