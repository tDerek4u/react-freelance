import { RiHome4Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#c4bd99] text-white grid grid-cols-1 gap-5 md:grid-cols-3 p-4 pb-6 px-5 md:px-12 lg:px-14 xl:px-20">
      <div className="space-y-4">
        <h1 className="text-lg text-[#161352]">Contact us</h1>
        <hr className="w-[50%]"/>
        <h3 className=" text-[#161352]">Celestial Legends</h3>
        <ul className="footer-list">
          <li className="footer-list-item">
            <RiHome4Fill className=" text-black" size={21} />
            <p className="text-sm font-bold  text-[#161352]">Parami Road,Hlaing Camous,Yangon Mayangone</p>
          </li>
          <li className="footer-list-item">
          <FaPhoneAlt size={19} className="text-black" />
            <p className="text-sm font-bold  text-[#161352]">+95-9-241465346</p>
          </li>
          <li className="footer-list-item">
          <IoMailSharp size={19} className="text-black" />
            <p className="text-sm font-bold  text-[#161352]" >celestiallegneds@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h1 className="text-lg  text-[#161352]">Ouick link</h1>
        <hr className="w-[50%]"/>
        <h3 className="font-thin text-sm  text-[#161352]">University Web Page</h3>
        <h3 className="font-thin text-sm  text-[#161352]">Learning management system</h3>
        <h3 className="font-thin text-sm  text-[#161352]">FAQs</h3>
        <h3 className="font-thin text-sm  text-[#161352]">Contact us</h3>
      </div>
      <div>
        <img src="/images/main-logo.png" className="w-[40%] md:w-[75%] lg:w-[60%] xl:w-[50%]" alt="" />
      </div>
    </div>
  )
}

export default Footer