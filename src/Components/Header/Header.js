function Header(){
    return(
        <div className=' m-10'>
        <div>
      <h1 className='font-semibold tracking-wide text-2xl'>Test
       <span className='bg-yellow-400 font-semibold text-2xl'>RunZ</span></h1>
      </div>
            <div className='float-right -mt-7 p-1'> 
 <button className=" mr-15 bg-yellow-400 text-white  text-xxl p-0.5  rounded-lg justify-end" >
               Logout
            </button>
            </div>
        </div>
    )
}
export default Header;