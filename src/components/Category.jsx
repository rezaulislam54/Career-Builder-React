
const Category = () => {
    return (
      <div className="my-10">
        <div className="text-center">
          <h2 className=" text-4xl md:text-5xl pb-4 font-extrabold">Job Category List</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="md:flex gap-6 space-y-4 md:space-y-0 justify-center mt-10">
          <div className="bg-[#7E90FE1A] py-6 pl-4 pr-16 rounded-lg">
            <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726204398/accounts_jzpyfg.png" />
            <h3 className="font-medium mt-5">Account & Finance</h3>
            <p className="text-gray-500">300 Jobs Available</p>
          </div>

          <div className="bg-[#7E90FE1A] py-4 pl-4 pr-16 rounded-lg">
            <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726204410/creative_yf2dmu.png" />
            <h3 className="font-medium mt-5">Creative Design</h3>
            <p className="text-gray-500">100+ Jobs Available</p>
          </div>

          <div className="bg-[#7E90FE1A] py-6 pl-4 pr-16 rounded-lg">
            <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726204439/marketing_zweba6.png" />
            <h3 className="font-medium mt-5">Marketing & Sales</h3>
            <p className="text-gray-500">150 Jobs Available</p>
          </div>

          <div className="bg-[#7E90FE1A] py-6 pl-4 pr-16 rounded-lg">
            <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726204445/chip_gm4i9h.png" />
            <h3 className="font-medium mt-5">Engineering Job</h3>
            <p className="text-gray-500">224 Jobs Available</p>
          </div>
        </div>
      </div>
    );
};

export default Category;