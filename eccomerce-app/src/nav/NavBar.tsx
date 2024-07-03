
import search from './icons/search-icon.png'
import profile from './icons/profile-icon.png'
import cart from './icons/cart.png'


const NavBar = () => {
  return (
    <nav className='bg-orange-400 w-full flex justify-center gap-4 align-middle p-3 pt-5'>
        <h1 className='text-6x1'>Logo</h1>
        <div className="flex overflow-hidden w-1/3 bg-slate-50 p-1 h-full">
            <input type="input" placeholder="search for an item" className="p-1 w-full" />
            <img src={search} alt="" width={30}  className=' cursor-pointer p-2 bg-orange-300' />

        </div>
        <ul className='flex justify-evenly list-none align-middle h-full gap-2'>
            <li className='flex justify-center align-middle'>
                <img src={profile} width={25}  alt="" />
                <span>Login</span>

            </li>
            <li>|</li>
            <li><span>Signup</span></li>
            <li><img src={cart} width={25} alt="" /></li>
                    </ul>
    </nav>
  )
}

export default NavBar