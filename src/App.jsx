import './App.css'
import { IoMdSearch } from "react-icons/io";
import { CiBarcode } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

function App() {


  return (
    <div className='flex '>
      <div className='w-[50%]'>
        {/* Payment section */}
        
      </div>

      <div className='w-[50%]'>
        {/* Product section */}
        <div className='b flex items-center justify-between mb-3 px-2 py-2'>
          <div className='flex items-center'>
          <IoMdSearch/>
          <p>Search Product...</p>
          </div>
          <CiBarcode></CiBarcode>
        </div>

        <button className='border-2 border-blue-500 px-3 py-1 rounded-md mr-4 font-semibold text-blue-500'>All Categories</button>
        <button className='border-2 border-gray-400 px-3 py-1 rounded-md mr-4 font-semibold text-gray-400'>Electronics</button>
        <button className='border-2 border-gray-400 px-3 py-1 rounded-md mr-4 font-semibold text-gray-400'> Home & Lifestyle</button>
        <button className='border-2 border-gray-400 px-3 py-1 rounded-md mr-4 font-semibold text-gray-400'>Men Fashion</button>
        <button className='border-2 border-gray-400 px-3 py-1 rounded-md font-semibold text-gray-400'>Women Fashions</button> 
        <BsThreeDotsVertical className='inline-block text-4xl'></BsThreeDotsVertical>
      </div>
    </div>
  )
}

export default App
