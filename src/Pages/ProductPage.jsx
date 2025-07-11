import React from 'react'
import { ProductData } from '../utils/data'

const ProductPage = () => {
  return (

    <div className="bg-black min-h-screen py-8 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="w-80 justify-start text-red-600 text-4xl font-semibold font-['Poppins'] leading-[60px]">
          Product Preview
        </h1>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-15">
          {ProductData.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Product Image Container */}
              {/* <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-3xl bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log(`Failed to load image: ${product.image}`);
                    e.target.src = '/assets/Product/placeholder.jpg';
                  }}
                />
              </div> */}

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                // className="w-40 h-40 object-cover rounded-[35px] shadow-md mb-4 transition-transform group-hover:scale-105 duration-300"
                className="self-stretch h-44 relative rounded-[60px] shadow-md mb-4 transition-transform group-hover:scale-105 duration-300" 
                onError={(e) => {
                  console.log(`Failed to load image: ${product.image}`);
                  e.target.src = '/assets/Product/placeholder.jpg'; // fallback image
                }}
              />

            
            
              
              {/* Product Title */}
              <h3 className="text-white text-lg font-semibold text-center leading-tight">
              
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>



 
  )
}

export default ProductPage

   