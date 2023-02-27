const ShopByBrand = () => {
    return (
      <div className="pt-[17%]">
        <div className="lg:flex grid gap-8 justify-center items-center">
          <div className="bg-[red] w-[400px] h-[600px] items-center justify-center grid place-items-center">
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1677053361/suheyl-burak-p7I07kuPSyU-unsplash_hdqgc3.jpg"
              alt="woman-in-red-dree"
              className="h-full w-full object-cover"
            />
            <button className="border-2 border-black px-5 py-5 text-center mt-5 font-bold text-xl hover:bg-black hover:text-white transistion-all duration-300">
              Shop The Brand
            </button>
          </div>
          <div className="bg-[brown] w-[400px] h-[600px] items-center justify-center grid place-items-center">
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1677053347/austin-wade-d2s8NQ6WD24-unsplash_kjolg7.jpg"
              alt="man-in-full-fit/>"
              className="h-full w-full object-cover"
            />
            <button className="border-2 border-black px-5 py-5 text-center mt-5 font-bold text-xl hover:bg-black hover:text-white transistion-all duration-300">
              Shop The Brand
            </button>
          </div>
        </div>
      </div>
    );
}
 
export default ShopByBrand;