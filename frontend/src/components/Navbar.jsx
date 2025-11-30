import logo from '/logo.png';

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-50 flex flex-row justify-between px-5 shadow-md items-center">
        <div className="flex flex-row justify-start items-center font-bold space-x-2">
            <img src={logo} alt="" className='rounded-full h-10 w-10 mt-1'/>
            <h1 className='text-3xl'>Retail<span className='text-[#00A2E8]'>IQ</span></h1>
        </div>
        <div className='flex flex-row justify-between items-center space-x-8 text-lg'>
            <h2 className='font-semibold cursor-pointer hover:text-[#00A2E8]'>Home</h2>
            <h2 className='font-semibold cursor-pointer hover:text-[#00A2E8]'>About</h2>
            <h2 className='font-semibold cursor-pointer hover:text-[#00A2E8]'>Features</h2>
            <h2 className='font-semibold cursor-pointer hover:text-[#00A2E8]'>Contact</h2>
        </div>
        <button className='px-4 py-2 bg-[#00A2E8] rounded-3xl font-semibold cursor-pointer'>Login</button>
    </div>
  )
}

export default Navbar