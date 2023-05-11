import React, { useEffect } from 'react'
import {useDispatch , useSelector}  from 'react-redux';
import { getCategories } from '../../redux/categorySlice';


const Category = ({setCategory}) => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories)

    console.log(categories , "kategorilerimm")

    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])

  return (
    <div className='bg-gray-100 w-1/6 p-4 max-h-screen'>
        <div className='border-b pb-1 px-2 text-xl font-bold '>KATEGORİ</div>
        {
            categories?.map((category , index)=>{
                return ( 
                <div onClick={() => setCategory(category)} className='text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2' key={index}>{category}</div>
                )
            })
        }
    </div>
  )
}

export default Category
