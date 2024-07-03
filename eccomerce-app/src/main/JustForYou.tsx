import  { useEffect, useState } from 'react';

// Define types for the data
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

function JustForYou() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from DummyJSON
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data.products);
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
    <div className='my-4 flex justify-center flex-col align-middle'>
      <h1 className='text-4xl my-2'>Just For You</h1>
      <div className="  jst4u-products">

      <ul className="grid grid-cols-5 gap-1 gap-y-4">
        {products.map(product => (
          <li key={product.id} className='bg-white flex-col align-middle justify-center p-2 cursor-pointer jst4u-product'>
            <img src={product.thumbnail} alt={product.title} width={100}  className="relative h-3/4 w-full"/>
            {/* <h2>{product.title}</h2> */}
            <h2>{`${product.description.length>70?product.description.substring(0,70):product.description}...`}</h2>

            <p className='text-3xl text-orange-600'>${product.price}</p>
          </li>
        ))}
      </ul>
      </div>
      <p className="m-4 w-1/3 relative left-1/3 text-center border-2 border-orange-500 cursor-pointer p-2 text-orange-500 ">Load More</p>

    </div>
  );
}

export default JustForYou;
