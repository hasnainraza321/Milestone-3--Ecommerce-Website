import React from 'react';

const FloatingImageContentBlock = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10 mb-6 md:mb-0'>
        <h2 className='text-3xl font-bold mb-4 text-white'>
          Delicious Pizza
        </h2>
        <p className='text-white mb-4'>
          Indulge in the ultimate pizza experience with our fresh, juicy slices made from the finest ingredients!
        </p>
        <button className='bg-orange-500 text-white px-6 py-3 rounded hover:bg-yellow-500 transition duration-300'>
          Order Now!
        </button>

        <h3 className='text-2xl font-bold mt-8 mb-4 text-white'>
          Coming Soon: Our New Pizza Launches
        </h3>
        <ul className='text-white space-y-2'>
          <li><strong>Get ready for a mouthwatering experience.</strong></li>
          <li><strong>Introducing our brand-new pizza creations.</strong></li>
          <li><strong>Packed with delicious, fresh ingredients.</strong></li>
          <li><strong>Stay tuned for the big reveal!</strong></li>
          <li><strong>Prepare your taste buds for something extraordinary.</strong></li>
        </ul>
      </div>

      <div className='md:w-1/2'>
        <img 
          src='/images/delicious.png' 
          alt='delicious pizza' 
          className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
