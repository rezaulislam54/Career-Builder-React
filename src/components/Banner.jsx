import { TiArrowRightOutline } from "react-icons/ti";

const Banner = () => {
  return (
    <div className=" md:flex justify-evenly gap-6 items-center">
      <div className="">
        <h2 className="text-5xl font-extrabold">
          One Step <br /> Closer To Your <br />
          <span className="text-[#9873FF]">Dream Job</span>
        </h2>
        <p className=" py-6 w-[550px]">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all <br /> your job
          application from start to finish.
        </p>
        <button className="relative inline-block px-6 py-3 font-medium group ">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Get Started{" "}
            <TiArrowRightOutline className="inline-block ml-2 mb-1" />
          </span>
        </button>
      </div>

      <div>
        <img
          className="w-[700px] h-[480px]"
          src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726201809/P3OLGJ1_copy_1_l44vk3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
