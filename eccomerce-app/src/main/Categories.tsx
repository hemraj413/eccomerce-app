import earbuds_image from './categories-images/earbuds.jpg'
import laptop_bags_image from './categories-images/laptop-bags.jpg'
import smartwatch_image from './categories-images/smartwatch.jpg'
import sneakers_image from './categories-images/sneakers.jpg'
import speaker_image from './categories-images/speakers.jpg'
import trimmer_image from './categories-images/trimmer.jpg'
import diapers_image from './categories-images/diapers.jpg'
import cover_image from './categories-images/cover.png'
import base_image from './categories-images/base-layers.png'
import bras_image from './categories-images/bras.jpg'
import cookware_image from './categories-images/cookware-sets.jpg'
import diaries_image from './categories-images/diaries.jpg'



const Categories = () => {
  const categories =[
    {title:"Wireless Earbuds", img:`${earbuds_image}`},
    {title:"Laptop Bags", img:`${laptop_bags_image}`},
    {title:"Smartwatches", img:`${smartwatch_image}`},
    {title:"Sneakers", img:`${sneakers_image}`},
    {title:"Speakers", img:`${speaker_image}`},
    {title:"Hair & Beard Trimmer", img:`${trimmer_image}`},
    {title:"Diaries & Folio", img:`${diaries_image}`},
    {title:"Cookware Sets", img:`${cookware_image}`},
    {title:"Bras", img:`${bras_image}`},
    {title:"Base Layers", img:`${base_image}`},
    {title:"Cover", img:`${cover_image}`},
    {title:"Disposable Diapers", img:`${diapers_image}`},



  ]

  return (
    <div className="my-10 categories-main">
        <h3 className='text-4xl my-2'>Categories</h3>
        <div className=" p-2 grid grid-cols-6 bg-white justify-items-center categories">
          {categories.map((category,index)=>(
            <div className='p-4 category' key={index}>
              <img src={category.img} alt="" width={150} />
              <h4>{category.title}</h4>
            </div>
          ))}
        </div>


        
    </div>
  )
}

export default Categories