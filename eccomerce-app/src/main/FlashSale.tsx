import { useEffect, useState } from "react"

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category:string;
  }

const FlashSale = () => {
    const[products,setProducts] = useState<Product[]>([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)

    useEffect(() => {
        // Fetch data from Fake Store API
        fetch('https://fakestoreapi.com/products')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
       // Filter products for men's and women's clothing only
       const filteredProducts = data.filter((product: Product) => 
        product.category === "men's clothing" || product.category === "electronics"
      );
      setProducts(filteredProducts);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
  return (
        <div className=" flash-sale">
            <h1 className="text-4xl">Flash Sale</h1>
            <div className="py-4 px-1 w-full flex bg-white  justify-between">
                <div className="flex gap-4 flash-detail">
                <h3 className="text-orange-500 text-3xl">on sell now</h3>
                <p className="text-2xl">Ending in <span className="mx-2 bg-orange-500 text-white p-2">13</span>hour <span className="mx-1 bg-orange-500 text-white p-2">48</span> min<span className="mx-2 bg-orange-500 text-white p-2">12</span>sec</p>

                </div>
                <button className="border-4 border-orange-300 cursor-pointer p-2 text-orange-500 ">Show More</button>
            </div>
            <div className="bg-white flash-sale-products">
            <ul className="grid grid-cols-5">
        {products.map(product => (
          <li key={product.id} className="border-2 flex-col align-middle justify-center p-2 cursor-pointer flash-sale-product">
            <img src={product.image} alt={product.title} width={100}  className="relative left-1/3 h-3/6"/>

            <h2>{`${product.description.length>70?product.description.substring(0,70):product.description}...`}</h2>
            {/* <p>{product.description}</p> */}
            <p className="text-2x1 text-orange-500 font-semibold">${product.price}</p>
            <p className="line-through text-xs">${Math.floor(product.price+product.price*Math.floor(Math.random()*5)+5)}</p>
          </li>
        ))}
      </ul>
            </div>
        </div>
  )
}

export default FlashSale