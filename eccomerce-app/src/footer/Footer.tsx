import appstores_image from './images/appstores.png'
import fb_logo from './images/fb.png'
import yt_logo from './images/yt.png'
import ig_logo from './images/ig.png'

const Footer = () => {
  return (
    <footer className="my-20 ">
        <div className="flex justify-between">
        <div className="customer-care">
            <h2 className="text-4xl text-orange-500">Customer Care</h2>

        <ul className="mt-4">
            <li>Help Center</li>
            <li>Feedback</li>
            <li>Contact</li>
            <li>Sign in</li>
            <li>How to buy</li>
        </ul>
        </div>
        <div className="">
        <h2 className="text-4xl text-orange-500">Earn money</h2>
            
            <ul className="mt-4">
                <li>Affiliates</li>
                <li>Referal</li>
                <li>Become a Seller</li>

            </ul>
        </div>
        <div className="">
        <h2 className="text-4xl text-orange-500">More</h2>
        <ul className="mt-4">
            <li>About</li>
            <li>Career</li>
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Term & condition</li>
            <li>Affiliate Program</li>
            <li>Reviews</li>
            <li>Support</li>

        </ul>
            
        </div>
        <div className="justify-self-end">
        <h2 className="text-4xl text-orange-500">Download app</h2>
        <img src={appstores_image} className='w-52' alt="" />

        </div>
        </div>
        <div className=" socials flex gap-4 align-middle">
        <h2 className="text-2xl text-orange-700">Follow on </h2>

            <div className="images flex gap-3">
            <img src={fb_logo}  className="w-8 cursor-pointer" alt="" />
            <img src={yt_logo}  className="w-8 cursor-pointer" alt="" />
            <img src={ig_logo}  className="w-8 cursor-pointer" alt="" />


            </div>

        </div>
    </footer>
  )
}

export default Footer