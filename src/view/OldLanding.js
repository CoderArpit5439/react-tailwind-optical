import React from 'react'
import OwlCarousel from 'react-owl-carousel';


const OldLanding = () => {
  return (
    <>
         {/* HEADER START */}

      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex    p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img class="p-2" style={{ height: "75px", width: "auto" }} src='https://demo.stripocdn.email/content/guids/353ea90f-89bd-4753-9253-ac82b8c031f4/images/screenshot_20240501_152158removebgpreview.png'>
            </img>
            <span class="ml-3 text-xl">Shree Netram Optical</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex    items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900" href='#galary'>Galary</a>
            <a class="mr-5 hover:text-gray-900" href='#eyewear'>Eye wear</a>
            <a class="mr-5 hover:text-gray-900" href='#eyetest'>Eye test</a>
            <a class="mr-5 hover:text-gray-900" href='#aboutas'>About us</a>
            <a class="mr-5 hover:text-gray-900" href='#contact'>Contact</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* HEADER END */}

      {/* GALARY START */}
      {/* https://images.unsplash.com/photo-1577400983943-874919eca6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
      <section class="text-white body-font bg-gradient-to-r from-cyan-500 to-blue-500" id='galary'>
        <div class="container px-5 py-24 mx-auto flex   ">
          <div class="flex w-full mb-20   ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-stone-50 lg:w-1/3 lg:mb-0 mb-4">Why Shree Netram Optical ?</h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to Shree Netram optical, where we bring clarity to your vision and style to your look. As a premier optical destination, we take pride in offering a curated selection of eyewear that blends fashion, functionality, and superior craftsmanship.
              <p>
                <strong> Our Vision: </strong>
                At Shree Netram optical, we believe that clear vision is essential for a vibrant life. Our mission is to provide exceptional eye care solutions, combining cutting-edge technology with a passion for personalized service. Whether you're in need of prescription glasses or simply want to upgrade your frames, our dedicated team of eyewear specialists is here to help you see and look your best.
              </p>
              <p>
                <strong> Our Products: </strong>
                Explore our extensive collection of eyeglasses and sunglasses</p>
            </p>
          </div>
          <div class="flex    md:-m-2 -m-1">
            <div class="flex    w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full rounded-md object-cover h-full object-center block" src="https://plus.unsplash.com/premium_photo-1661302956617-b40b5d2bf19d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGV5ZSUyMGNhcmV8ZW58MHx8MHx8fDA%3D" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full rounded-md object-cover h-full object-center block" src="https://plus.unsplash.com/premium_photo-1661607090924-58a4776ae1c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXllJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D" />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full rounded-md h-full object-cover object-center block" src="https://plus.unsplash.com/premium_photo-1661376617518-5d725a3bbe77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
            <div class="flex    w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full rounded-md h*3/4 object-cover object-center block" src="https://images.unsplash.com/photo-1608539733377-5557e02926b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full rounded-md object-cover h-full object-center block" src="https://images.unsplash.com/photo-1582142407894-ec85a1260a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXlld2VhcnxlbnwwfHwwfHx8MA%3D%3D" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full rounded-md object-cover h-full object-center block" src="https://images.unsplash.com/photo-1611222777277-61319d63ca94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALARY END */}

      {/* ITEMS CARD START */}

      <section class="text-gray-600 body-font bg-gray-200 " id='eyewear'>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex    -m-4">
            <OwlCarousel items={3}
              className="owl-theme"
              loop
              autoplay={true}
              
              // nav
              margin={8}
              responsive={{
                0: {
                  items: 1 // Display 1 item on screens smaller than 600px
                },
                600: {
                  items: 3 // Display 3 items on screens between 600px and 1000px
                },
                1000: {
                  items: 5 // Display 5 items on screens larger than 1000px
                }
              }}>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
              <div class=" w-full bg-white rounded-lg">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div class="mt-4 ms-4 pb-5 ">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 ">$16.00</p>
                </div>
              </div>
             

            </OwlCarousel>
          </div>
        </div>
      </section>

      {/* ITEMS CARD END */}

      {/* STEPS START */}

      <section class="text-gray-600 body-font" id='eyetest'>
        <div class="container px-5 py-24 mx-auto flex   ">
          <div class="flex    w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                  <p class="leading-relaxed">Start by filling out our comprehensive Health History Form, ensuring we understand your unique needs and concerns.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                  <p class="leading-relaxed">Next, undergo a thorough Torch Check-Up, allowing us to examine the external health of your eyes.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                  <p class="leading-relaxed">"Our state-of-the-art Auto Refractometer machine performs a precise Refraction Test, assessing your eye's refractive error.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                  <p class="leading-relaxed">Refinement continues with tests using Vision Drum, Trial Box, and Trial Frame, ensuring accurate prescription and fit.</p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                  <p class="leading-relaxed">Finally, we conduct a meticulous Near Vision Test, ensuring clarity and comfort in your daily activities. Your eye health is our priority!</p>
                </div>
              </div>
            </div>
            <img class="lg:w-3/5 lg:h-96 lg:mt-24 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://t3.ftcdn.net/jpg/06/24/78/24/240_F_624782487_fNwxl2AqMDb4A4qgY9xkNXYchhwojL8x.jpg" alt="step" />
          </div>
        </div>
      </section>

      {/* STEPS END */}

      {/* STATICS START  */}

      <section class="text-gray-600 body-font" id='aboutas'>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col    w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div class="flex    -m-4   ">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p class="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                <p class="leading-relaxed">Users</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
                <p class="leading-relaxed">Files</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
                <p class="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATICS END  */}

      {/* MAP & FEEDBACK START */}

      <section class="text-gray-600 body-font relative" id='contact'>
        <div class="absolute inset-0 bg-gray-300">
          <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.58350623353!2d75.98911168537572!3d22.632023077817255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e7127365b6ef%3A0x27d2e929cd1c66d7!2sShree%20Netram%20Optical%20%7C%20Best%20optical%20in%20Indore!5e0!3m2!1sen!2sus!4v1713592335121!5m2!1sen!2sus"  ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
            <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
      </section>

      {/* MAP & FEEDBACK END */}

      {/* FOOTER START  */}

      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img class="p-2" style={{ height: "75px", width: "auto" }} src='https://demo.stripocdn.email/content/guids/353ea90f-89bd-4753-9253-ac82b8c031f4/images/screenshot_20240501_152158removebgpreview.png'>
            </img>
            <span class="ml-3 text-xl">Shree Netram Optical</span>
          </a>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500 hover:text-blue-900 cursor-pointer" href='https://www.facebook.com/profile.php?id=61556067072946&mibextid=LQQJ4d' target='_blank'>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-pink-600 cursor-pointer" href='https://www.instagram.com/shree_netram_optical?igsh=ejltY3Ezbm5xdmZx' target='_blank'>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>

      {/* FOOTER END  */}
    </>
  )
}

export default OldLanding