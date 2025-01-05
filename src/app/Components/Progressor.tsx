import React from 'react'

const Progressor = () => {
  return (
    <div>
      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-10 mb-10'>
      <div className='w-full'>
        <div className='flex items-center w-full'>
          <div className='w-8 h-8 shrink-0 mx-[-1px] bg-yellow-500 p-1.5 flex items-center justify-center rounded-full'>
            <span className='text-base text-black font-bold '>1</span>
          </div>
          <div className='w-full h-1 mx-4 rounded-lg bg-orange-600'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-yellow-500 font text-base'>step:1 Choose Your Dish</h6>
            <p className='text-xs text-white'>Expoler Our delicious menu and select your favorite pizza.</p>
          </div>
        </div>

        <div className='w-full'>
        <div className='flex items-center w-full'>
          <div className='w-8 h-8 shrink-0 mx-[-1px] bg-yellow-500 p-1.5 flex items-center justify-center rounded-full'>
            <span className='text-base text-black font-bold '>2</span>
          </div>
          <div className='w-full h-1 mx-4 rounded-lg bg-orange-600'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-yellow-500 font text-base'>step:2 Customize Your Order</h6>
            <p className='text-xs text-white'>Tailor your meal to your taste with our wide range of toppings and sauces.</p>
          </div>
        </div>

        <div className='w-full'>
        <div className='flex items-center w-full'>
          <div className='w-8 h-8 shrink-0 mx-[-1px] bg-yellow-500 p-1.5 flex items-center justify-center rounded-full'>
            <span className='text-base text-black font-bold '>3</span>
          </div>
          <div className='w-full h-1 mx-4 rounded-lg bg-orange-600'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-yellow-500 font text-base'>step:3 place Your Order</h6>
            <p className='text-xs text-white'>Ready to eat? Proceed to checkout and complate your order!</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Progressor;