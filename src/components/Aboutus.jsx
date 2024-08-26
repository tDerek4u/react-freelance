const Aboutus = () => {
    return (
        <div className="">
            <div className="aboutus-section flex items-center gap-5 md:pt-16 pb-44 lg:px-32 xl:px-40 w-full pt-14 max-sm:pb-40 px-12 md:px-20">
                <div>
                    <h1 className="about-title">About us</h1>
                    <p className="about-des">At Celestial Legends, we are dedicated to revolutionizing campus engagement and student club management .Our platform serves as a dynamic hub where university communities come together to foster creativity collaboration, and informed communication.</p>

                </div>
                <div className="max-sm:hidden">
                    <img src="/images/main-logo.png" alt="" />
                </div>

            </div>
            <div className="relative">
               
               <img src="/images/top_line.png" className="2xl:block xl:block lg:block md:block hidden absolute w-[60vw] 2xl:-top-80 mt-[-10px] 2xl:right-52 xl:-top-72 xl:right-20 lg:-top-64 lg:right-16 md:-top-56 md:right-0.5" alt="" /> 
                <div className="about-list">

                    <div className="mission-vision-section ">
                        <h1 className="text-2xl font-semibold text-gray-700">Mission & Vision</h1>
                        <ul className="mt-4 space-y-2 bg-white rounded-3xl ">
                            <li className="mission-vision-item mb-2">
                                <h3 className="text-gray-700">Mission</h3>
                                <p className="text-sm text-gray-700">Our mission is to empower student leaders and organizations with the tools they need to thrive. By streamlining club management processes and enhancing communication channels, we aim to create a vibrant and inclusive campus environment where every student's voice can be heard.</p>
                            </li>
                            <li className="mission-vision-item">
                                <h3 className="text-gray-700">Vision</h3>
                                <p className="text-sm text-gray-700">At Celestial Legends , our vision is to revoluntionize campus engagement by fostering inclusive communitites where student creativity thrives and leadership flourishes. We aspire to empower student clubs with innovative tools that enhance collaboration, transparency and meaningful connections.Together, we aim to create a future where every studnent can actively shape their university experience and leave a lasting impact.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="/images/bottom_line.png" className="2xl:block xl:block lg:block md:block hidden absolute w-[60vw] 2xl:-top-40 2xl:left-52 xl:-top-32 xl:left-20 lg:-top-12 lg:left-16 md:top-14" alt="" />
            </div>

        </div>
    )
}

export default Aboutus