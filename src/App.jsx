import "./App.css";
import { IoMdSearch } from "react-icons/io";
import { CiBarcode } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoReorderThreeOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbPlaceholder } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { LuGrab } from "react-icons/lu";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";


function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      image: "https://media.istockphoto.com/id/521705890/photo/little-boy-in-white-shirt.jpg?s=2048x2048&w=is&k=20&c=LwIXtdqyQkabODzRzvcjaJ8JbICo4RCVLcxLRPveFNY=",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      image: "https://media.istockphoto.com/id/467383049/photo/happy-little-boy-on-white-background.jpg?s=2048x2048&w=is&k=20&c=JJg1Od67NLaCJVfBCAY5aoluu8CBPZq51PeQ5NliCzE=",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      image: "https://img.freepik.com/premium-photo/closeup-red-blank-t-shirt-with-empty-space-yours-design-white-background-3d-rendering_476612-5218.jpg?w=740",
    },
    {
      id: 4,
      name: "Product 2",
      price: 29.99,
      image: "https://img.freepik.com/free-photo/young-boy-with-curly-hairs-wearing-eyeglasses_114579-17346.jpg?t=st=1709042348~exp=1709045948~hmac=2495600f3cdc32ca12a94a9cd88fc9958a40c87c6c65c9578045c4cfc33ca0af&w=360",
    },
    {
      id: 5,
      name: "Product 3",
      price: 39.99,
      image: "https://img.freepik.com/free-photo/young-man-making-call-me-gesture_329181-2147.jpg?w=360&t=st=1709042388~exp=1709042988~hmac=0bc370d5a3537a93fd9d37dc5842079370ea5bfa7861a73e442ad07bf3abd4b0",
    },
    {
      id: 6,
      name: "Product 6",
      price: 39.99,
      image: "https://img.freepik.com/free-photo/front-back-isolated-black-t-shirts_125540-1092.jpg?w=996&t=st=1709042531~exp=1709043131~hmac=73a804cd16e853a88c30adede7cd6da79f95b00152e9ae9a33a990d86e95dc86",
    },
    {
      id: 7,
      name: "Product 7",
      price: 29.99,
      image: "https://img.freepik.com/free-photo/young-boy-with-curly-hairs-wearing-eyeglasses_114579-17346.jpg?t=st=1709042348~exp=1709045948~hmac=2495600f3cdc32ca12a94a9cd88fc9958a40c87c6c65c9578045c4cfc33ca0af&w=360",
    },
    {
      id: 8,
      name: "Product 8",
      price: 39.99,
      image: "https://img.freepik.com/free-photo/young-man-making-call-me-gesture_329181-2147.jpg?w=360&t=st=1709042388~exp=1709042988~hmac=0bc370d5a3537a93fd9d37dc5842079370ea5bfa7861a73e442ad07bf3abd4b0",
    },
  ];

  return (
    <div className="flex ml-2 ">
      <div className="w-[50%] mr-3">
        {/* Payment section */}
      <div className="flex mt-2">
        <IoReorderThreeOutline className="inline-block text-5xl"></IoReorderThreeOutline>
        <button className="inline-flex items-center justify-center px-3 bg-indigo-100 py-2 rounded font-semibold ml-5 mr-3 text-indigo-500 text-xl"><SlNote className="inline-block text-2xl mr-3"></SlNote> Note</button>
        <button className="inline-flex items-center justify-center px-3 bg-indigo-100 py-2 rounded font-semibold ml-5 mr-3 text-indigo-500 text-xl"><MdOutlineLocalShipping className="inline-block text-3xl mr-3"></MdOutlineLocalShipping> Shipping</button>
        <button className="inline-flex items-center justify-center px-3 bg-indigo-100 py-2 rounded font-semibold ml-5 mr-3 text-indigo-500 text-xl"><TbPlaceholder className="inline-block text-2xl mr-3"></TbPlaceholder> Hold Orders</button>
        <button className="inline-flex items-center justify-center px-3 bg-indigo-100 py-2 rounded font-semibold ml-5 mr-3 text-indigo-500 text-xl"><IoIosAddCircle className="inline-block text-2xl mr-3"></IoIosAddCircle> New Item</button>

      </div>


      {/* Profile info */}
      <div className=" flex items-center justify-between px-5 py-3 mt-4 rounded-md bg-indigo-50 text-indigo-500">
        <div>
        <CgProfile className="inline-block text-3xl"></CgProfile> <span className="text-xl font-semibold">Steve Jobs</span>
        </div>
        <IoMdAddCircleOutline className="text-3xl"></IoMdAddCircleOutline>
      </div>


      {/* Product details payment information */}
      <div className="mt-4 flex items-center">
      <SlNote className="text-3xl "></SlNote>
        <div className="flex items-center  border-2 ml-3 px-2 py-2 text-gray-500 text-xl rounded-t-md">
          <p className="mr-20 ">pure white & black sleeve</p>
          <p className="mr-12">$91.00</p>
          <FaMinusCircle className="mr-8"></FaMinusCircle>
          <p>1</p>
          <IoIosAddCircle className="ml-8 mr-8 text-2xl"></IoIosAddCircle>
          <p className="">$91.00</p>
        </div>
        <MdOutlineDeleteForever className=" text-3xl ml-6 text-red-600"></MdOutlineDeleteForever>
      </div>
      <div className=" flex items-center">
      <SlNote className="text-3xl "></SlNote>
        <div className="flex items-center  border-r-2 border-l-2 border-b-2 ml-3 px-2 py-2 text-gray-500 text-xl">
          <p className="mr-28 ">Lei's Red Tab Florence</p>
          <p className="mr-12">$45.00</p>
          <FaMinusCircle className="mr-8"></FaMinusCircle>
          <p>2</p>
          <IoIosAddCircle className="ml-8 mr-8 text-2xl"></IoIosAddCircle>
          <p className="">$90.00</p>
        </div>
        <MdOutlineDeleteForever className=" text-3xl ml-6 text-red-600"></MdOutlineDeleteForever>
      </div>
      

      {/* tax shipping discount */}
      <div className="flex">
        <div className="w-[50%]"></div>

        <div className="w-[45%] mt-5 ">
          <hr />
          <div className="flex justify-between my-2">
            <p>Sub Total</p>
            <p className="font-bold">$1500</p>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <p>Sub Total</p>
            <p className="font-bold">$25.00</p>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <p>Shipping</p>
            <p className="font-bold">$5.50</p>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <p>Discount on Cart</p>
            <p className="font-bold">$15</p>
          </div>
          <hr />
        </div>
      </div>


      
      {/* total money */}
      <div className=" flex items-center justify-between px-5 py-3 mt-4 rounded-md bg-indigo-50 text-indigo-500">
        <p>Products Count</p>
        <p className="text-xl font-semibold">Total</p>
        <p className="text-xl font-semibold">$100</p>
      </div>

    {/* last button */}
      <div className="flex justify-between mt-3">
        <button className=" px-4 py-2 rounded-md font-semibold text-xl bg-red-200 text-red-500"><RxCrossCircled className="inline text-3xl mr-2"></RxCrossCircled> Cancel</button>
        <button className=" px-4 py-2 rounded-md font-semibold text-xl bg-indigo-50 text-indigo-500"><LuGrab className="inline text-3xl mr-2"></LuGrab> Hold</button>
        <button className=" px-4 py-2 rounded-md font-semibold text-xl bg-indigo-50 text-indigo-500"><GiTakeMyMoney className="inline text-3xl mr-2"></GiTakeMyMoney> Discount</button>
        <button className=" px-4 py-2 rounded-md font-semibold text-xl bg-indigo-50 text-indigo-500"><FaMoneyCheckDollar className="inline text-3xl mr-2"></FaMoneyCheckDollar> Pay Now</button>
      </div>

      </div>

      {/* section 2 */}
      <div className="w-[50%] bg-gray-100  border-l-2 ">
        {/* Product section */}
        <div className="bg-gray-50 flex items-center justify-between mb-4 px-2 py-2 shadow-lg">
          <div className="flex items-center">
            <IoMdSearch className="text-3xl"></IoMdSearch>
            <p className="ps-2 text-gray-400 font-semibold">Search Product...</p>
          </div>
          <CiBarcode className="text-3xl"></CiBarcode>
        </div>

        <button className="border-2 border-blue-500 px-3 py-1 rounded-md mr-3 ml-3 font-semibold text-blue-500">
          All Categories
        </button>
        <button className="border-2 border-gray-400 px-3 py-1 rounded-md mr-3 font-semibold text-gray-400">
          Electronics
        </button>
        <button className="border-2 border-gray-400 px-3 py-1 rounded-md mr-3 font-semibold text-gray-400">
          {" "}
          Home & Lifestyle
        </button>
        <button className="border-2 border-gray-400 px-3 py-1 rounded-md mr-3 font-semibold text-gray-400">
          Men Fashion
        </button>
        <button className="border-2 border-gray-400 px-3 py-1 rounded-md font-semibold text-gray-400">
          Women Fashions
        </button>
        <BsThreeDotsVertical className="inline-block text-4xl"></BsThreeDotsVertical>

        {/* Products */}
        <div className="mt-5 grid grid-cols-5 gap-x-3 gap-y-6 pb-5 ps-3 cursor-pointer">
          {
            products.map((product) => (
            <div className="border-2 border-gray-300" key={product.id}>
              <div className="">
              <img className="h-[180px] w-full" src={product.image} alt="picture" />
              </div>
              <p className="text-center py-1 font-semibold text-gray-500">${product.price}</p> 
              <hr />
              <p className="text-center py-1 font-semibold text-gray-500">{product.name}</p>
            </div>
            ) )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
