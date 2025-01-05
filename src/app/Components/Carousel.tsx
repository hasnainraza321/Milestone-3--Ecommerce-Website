import React from 'react';

const Carousel = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-blue-950">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-3 gap-4 h-full">
            {/* Larger Image */}
            <div className="col-span-2 bg-gradient-to-r from-gray-900 to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-2 pt-40 flex-grow"
              >
                <img
                  src="/images/Margherita Pizza.png"
                  alt="Margherita Pizza"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/50"></div>
                <h3 className="z-10 text-4xl font-bold text-white absolute inset-0 flex items-center justify-center">
                  Margherita Pizza
                </h3>
              </a>
            </div>

            {/* Smaller Images */}
            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-auto flex flex-col">
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-2 pt-40 flex-grow"
                >
                  <img
                    src="/images/Pepperoni Pizza.png"
                    alt="Pepperoni Pizza"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/50"></div>
                  <h3 className="z-10 text-4xl font-bold text-white absolute inset-0 flex items-center justify-center">
                    Pepperoni Pizza
                  </h3>
                </a>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-auto flex flex-col">
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-2 pt-40 flex-grow"
                >
                  <img
                    src="/images/BBQ Chicken Pizza.png"
                    alt="BBQ Chicken Pizza"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/50"></div>
                  <h3 className="z-10 text-4xl font-bold text-white absolute inset-0 flex items-center justify-center">
                    BBQ Chicken Pizza
                  </h3>
                </a>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-auto flex flex-col">
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-2 pt-40 flex-grow"
                >
                  <img
                    src="/images/Veggie Pizza.png"
                    alt="Veggie Pizza"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/50"></div>
                  <h3 className="z-10 text-4xl font-bold text-white absolute inset-0 flex items-center justify-center">
                    Veggie Pizza
                  </h3>
                </a>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-auto flex flex-col">
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-2 pt-40 flex-grow"
                >
                  <img
                    src="/images/Cheese Lover Pizza.png"
                    alt="Cheese Lover Pizza"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/50"></div>
                  <h3 className="z-10 text-4xl font-bold text-white absolute inset-0 flex items-center justify-center">
                    Cheese Lover Pizza
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
