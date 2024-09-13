
const Banner = () => {
    return (
      <div className=" md:flex justify-evenly gap-6 items-center">
        <div className="">
          <h2 className="text-5xl font-extrabold">
            One Step <br /> Closer To Your <br />
            <span className="text-[#9873FF]">Dream Job</span>
          </h2>
          <p className=" py-6 w-[550px]">
            Explore thousands of job opportunities with all the <br/> information you
            need. Its your future. Come find it. Manage all <br /> your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
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