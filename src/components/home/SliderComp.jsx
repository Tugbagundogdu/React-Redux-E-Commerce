import React from 'react'
import Slider from "react-slick";
import ayakkabı from "../../assets/ayakkabı.jpg"

const SliderComp = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
       <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 px-6 py-10 '>
            <div className='py-4'>
              <div className='text-6xl font-bold'>Kaliteli Ayakkabının Adresi</div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut illo provident commodi repellat voluptatum, mollitia natus, esse ipsam dolore repudiandae excepturi placeat deserunt ex est autem alias atque officiis. </div>
              <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-400'>İncele</div>
            </div>
            <img className='w-96' src="https://i.etsystatic.com/26762051/r/il/aa4b98/4696321574/il_fullxfull.4696321574_m3nz.jpg" alt="" />
          </div>
          <div  className='!flex items-center  bg-gray-100 px-6 '>
          <div>
              <div className='text-6xl font-bold'>Kaliteli Ayakkabının Adresi</div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut illo provident commodi repellat voluptatum, mollitia natus, esse ipsam dolore repudiandae excepturi placeat deserunt ex est autem alias atque officiis. </div>
              <div   className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-400'>İncele</div>
            </div>
           <img className='w-96' src="https://media-photos.depop.com/b1/25469836/1461825515_9c901868818e4135a8f1870d4692ab45/P0.jpg" alt="" />
          </div>
          <div  className='!flex items-center bg-gray-100 px-6'>
          <div >
              <div className='text-6xl font-bold'>Kaliteli Ayakkabının Adresi</div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut illo provident commodi repellat voluptatum, mollitia natus, esse ipsam dolore repudiandae excepturi placeat deserunt ex est autem alias atque officiis. </div>
              <div  className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-400'>İncele</div>
            </div>
           <img className='w-96' src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce2e5e5f-66f8-43d4-92a3-f3bfba989376/af-1-shadow-shoes-5v66FL.png" alt="" />
          </div>
          <div  className='!flex items-center bg-gray-100 px-6 py-16'>
          <div >
              <div className='text-6xl font-bold'>Kaliteli Ayakkabının Adresi</div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut illo provident commodi repellat voluptatum, mollitia natus, esse ipsam dolore repudiandae excepturi placeat deserunt ex est autem alias atque officiis. </div>
              <div  className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-400'>İncele</div>
            </div>
           <img className='w-96' src= {ayakkabı} alt="" />
          </div>
        </Slider>
    </div>
  )
}

export default SliderComp
