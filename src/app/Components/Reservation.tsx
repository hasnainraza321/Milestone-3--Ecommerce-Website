import React from 'react';

const ReservationsSection = () => {
  return (
    <section className='bg-gradient-to-r from-black to-blue-950 py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-6 text-white'>Make A Reservation</h2>
        <form className='max-w-md mx-auto'>
          <div className='mb-4 text-white'>
            <input 
              type="text" 
              placeholder='Your Name' 
              className='w-full p-3 border border-yellow-500 rounded-md' 
              required 
            />
          </div>

          <div className='mb-4'>
            <input 
              type="email" 
              placeholder='Your Email' 
              className='w-full p-3 border border-yellow-500 rounded-md' 
              required 
            />
          </div>

          <div className='mb-4'>
            <input 
              type="date" 
              className='w-full p-3 border border-yellow-500 rounded-md' 
              required 
            />
          </div>

          <div className='mb-4'>
            <input 
              type="time" 
              className='w-full p-3 border border-yellow-500 rounded-md' 
              required 
            />
          </div>

          <div className='mb-4'>
            <button className='bg-orange-500 py-3 px-4 rounded-md hover:bg-yellow-500 text-white font-bold'>
              Reserve Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationsSection;
