import banner1 from './banner_image/banner1.jpg'
import banner2 from './banner_image/banner2.jpg'
import banner3 from './banner_image/banner3.jpg'
import banner4 from './banner_image/banner4.jpg'


const MenuBar = () => {
  return (
    <div className="flex menu-bar">
        <section className="border-r-10 bg-white p-2 menu-bar-menu-section">
            <ul className="list-none group-hover:text-orange-400 menu-bar-menus">
                <li>Women's Fashion</li>
                <li>Men's Fashion</li>
                <li>Electronics</li>
                <li>Health & Beauty</li>
                <li>TV &Home Appliances</li>
                <li>Mobile & Laptops</li>
                <li></li>

            </ul>

        </section>
        <div className=" banners">
            <div className="slides">

            <div className="banner1"><img src={banner1} className='' alt="" /></div>
            <div className="banner1"><img src={banner2} alt="" /></div>
            <div className="banner1"><img src={banner3} alt="" /></div>
            <div className="banner1"><img src={banner4} alt="" /></div>
            </div>
            <p className='absolute left-4 top-1/2 text-white text-9x1 font-extrabold cursor-pointer'>&#10094;</p>
            <p className='absolute right-4 top-1/2 text-white text-9x1 font-extrabold cursor-pointer'>&#10095;</p>
            <div className='absolute top-2/3 left-1/2 -translate-1/2 text-center text-white text-9xl'><span>.</span><span className='text-gray-500'>.</span><span className='text-gray-500'>.</span><span className='text-gray-500'>.</span></div>

        </div>

    </div>
  )
}

export default MenuBar