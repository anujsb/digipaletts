import dm from "../../assets/dm.jpg";

const DigitalMarketing = () => {


  return (
    <div className='max-w-screen-xl h-screen min-w-full w-full  mx-auto bg '>
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 min-w-full " >
            <div className=" w-full p-10  bg-orange-600">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal ">
                    Digital Marketing
                </h1>
                <p className=" pt-10">
                Everyone is going digital, so should your business, because your clients are searching for you online.
                </p>
            </div>
        
            <div className="flex w-full ml-0">
                <div className="h-full w-full ml-0 ">
                    <img src={dm} />
                </div>
            </div>
        </div>
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 min-w-full " >
            <div className="flex w-full ml-0">
                <div className="h-full w-full ml-0 ">
                    <img src={dm} />
                </div>
            </div>
            <div className=" w-full p-10  bg-orange-600">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal ">
                    Digital Marketing
                </h1>
                <p className=" pt-10">
                Everyone is going digital, so should your business, because your clients are searching for you online.
                </p>
            </div>
        </div>
    </div>
  );
}
export default DigitalMarketing;



{/* <Spline scene="https://prod.spline.design/7rm-4CyhD5HvSSvz/scene.splinecode" /> */}