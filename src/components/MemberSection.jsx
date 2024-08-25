import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules"
import 'swiper/css';
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const cardLists = [
  {
    name: 'Htet Aung Shine',
    role: 'Frontend developer',
    image:'https://i.pinimg.com/564x/40/7e/03/407e0352381d9a07941ac40a5f0b078d.jpg'
  },
  {
    name: 'Kaung Khant Ko',
    role: 'Frontend developer',
    image:'https://i.pinimg.com/564x/9f/84/1f/9f841f0341bb53ac0b225271074fdbab.jpg'
  },
  {
    name: 'Myat Thiri Kyaw',
    role: 'Frontend developer',
    image:'https://i.pinimg.com/236x/22/01/12/220112ce9c3967e2022ce13673a9d4f6.jpg'
  },
  {
    name: 'Thu Hnin Swe',
    role: 'Frontend developer',
    image:'https://i.pinimg.com/236x/c5/04/d0/c504d052391f2d0ce97037245da32065.jpg'
  },
  {
    name: 'Thiri Thu',
    role: 'Frontend developer',
    image:'https://i.pinimg.com/236x/a4/cc/e1/a4cce11d66c447c277416f5445d9fdfd.jpg'
  }
]


const Slider = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 125,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="max-sm:h-[12rem] md:h-[16rem] xl:h-[18rem] "
    >
      {
        cardLists.map((card,i) => (
          <SwiperSlide key={i} className='member-card w-[80%] md:w-[80%] lg:w-[60%] xl:w-[50%] flex rounded-3xl overflow-hidden '>
            <div className='w-[80%] h-full'>
              <img src={card.image} className='h-full md:h-full w-[90%] md:w-full  object-fill' alt="" />
            </div>
            <div className=' h-full py-2.5 md:py-4 w-full flex flex-col justify-between px-1 max-sm:pr-2 md:px-5'>
              <div className='flex space-y-2 flex-col h-full justify-center'>
                <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>{card.name}</h1>
                <h4 className='text-sm md:text-lg font-thin'>{card.role}</h4>
              </div>
              <div className='py-1 md:py-1.5 px-3 md:px-4 rounded-full bg-[#00204F] flex justify-between'>
                <FaFacebook size={27} className='text-white max-sm:text-xs' />
                <RiInstagramFill size={27} className='text-white max-sm:text-xs' />
                <FaLinkedin size={27} className='text-white max-sm:text-xs' />
              </div>
            </div>
          </SwiperSlide >
        ))
      }
    </Swiper>
  )
}
const MemberSection = () => {
  return (
    <div className="px-8 md:px-28 lg:px-32 xl:px-40 mb-14">
      <h1 className="text-2xl text-gray-600">Meet our members</h1>
      <div className="mt-6 md:mt-10 w-full md:w-[90%] mx-auto">
        <Slider />
        <div className="slider-controler">
          <div className="">
            <FaArrowLeft size={19} className='btn-prev text-[#7F9FD8] cursor-pointer' />
          </div>
          <div className="swiper-pagination"></div>
          <div className="">
            <FaArrowRight size={19} className='btn-next text-[#7F9FD8] cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberSection