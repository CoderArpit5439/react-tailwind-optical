import React from "react";
import { Link } from "react-router-dom";

// components
import OwlCarousel from 'react-owl-carousel';

const products = [
  {
    id: "1",
    imageSrc: "https://i.pinimg.com/564x/3e/d3/b6/3ed3b6a2b09a5e68e77bc11b60a8faf7.jpg",
    imageAlt: "imageAlt",
    href: "href",
    name: "3-Piece / Rimless",
    color: "Unisex Frame",
    price: "price",
  },
  {
    id: "2",
    imageSrc: "https://i.pinimg.com/564x/6b/8c/07/6b8c0728e4b0cd2dce9046a7c27172ba.jpg",
    imageAlt: "imageAlt",
    href: "href",
    name: "Full Rim Metal",
    color: "Unisex Frame",
    price: "price",
  },
  {
    id: "3",
    imageSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1325x636/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-glasses-blue-transparent-full-rim-square-lenskart-air-air-classic-la-e15417-c7-eyeglasses_csvfile-1671795759299-g_6035.jpg",
    imageAlt: "imageAlt",
    href: "href",
    name: "Full Rim TR90 ",
    color: "Unisex Frame",
    price: "price",
  },
  {
    id: "4",
    imageSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e11889-c3-eyeglasses_G_4382.jpg",
    imageAlt: "imageAlt",
    href: "href",
    name: "Half Rim / Supra",
    color: "Unisex Frame",
    price: "price",
  },
]

const LenseType = [
  {
    id: "1",
    imageSrc: "https://www.corneoeyewear.com/assets/images/square28.jpg",
    imageAlt: "imageAlt",
    href: "href",
    heading: "Photochromic Lense",
    subHeading: "Sun-Activated Lenses",
  },
  {
    id: "2",
    imageSrc: "https://www.corneoeyewear.com/assets/images/service09.jpg",
    imageAlt: "imageAlt",
    href: "href",
    heading: "Bi Focal Lense",
    subHeading: "Dual Vision Lenses",
  },
  {
    id: "3",
    imageSrc: "https://www.corneoeyewear.com/assets/images/service10.jpg",
    imageAlt: "imageAlt",
    href: "href",
    heading: "Progressive Lense",
    subHeading: "Multi-Focus Lenses",
  },
  {
    id: "4",
    imageSrc: "https://www.corneoeyewear.com/assets/images/service08.jpg",
    imageAlt: "imageAlt",
    href: "href",
    heading: "Computer Lense",
    subHeading: "Screen Protection Lenses",
  },
]


export default function Landing() {
  return (
    <>

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center "
          style={{ minHeight: '75vh' }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1608539733292-190446b22b83?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto" style={{ marginLeft: 'auto', marginRight: "auto" }}>
            <div className="items-center flex flex-wrap  ">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center ">
                <div className="pr-12"
                //     padding-right: 3rem;
                >
                  <h1 className="text-white font-semibold text-5xl p-4 ">
                    Welcome to
                  </h1>
                  <h1 className=" font-bold text-5xl p-4 text-center from-red-500 via-green-200 to-blue-300 bg-gradient-to-r bg-clip-text text-transparent">
                    Shree Netram Optical.
                  </h1>
                  <p className="mt-4 text-lg text-gray-200">
                    Where we bring clarity to your vision and style to your look.
                    As a premier optical destination,
                    we take pride in offering a curated selection of eyewear that blends fashion, functionality, and superior craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4" style={{ marginLeft: 'auto', marginRight: "auto" }}>
            <div className="flex flex-wrap  ">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4  text-center ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center   inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-eye"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Vision</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      we're committed to improving your vision and style. Our team uses advanced technology and personalized service
                      to ensure you get the perfect glasses. See better, look better with us!
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4  text-center ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3  text-center  inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-glasses"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Products</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Discover our wide range of glasses and sunglasses. Find your perfect
                      pair for every occasion and style. Explore now for the best selection!
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center  ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3  text-center  inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-microscope"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Services</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Experience our exceptional eye care services.
                      From comprehensive eye exams to specialized treatments,
                      we're here to ensure your vision health is in good hands.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  flex-wrap  items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-500 p-3  text-center  inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Protect Your Eyes: The Importance of Specialized Eyewear
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  In today's digital age, eye strain and discomfort are common
                  issues. Blue cut lenses offer relief by filtering harmful blue
                  light emitted by screens.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Photogrey glasses adapt to changing light conditions,
                  while anti-glare and UV ray-protected lenses enhance visual
                  comfort and protect eye health.
                  Prioritize your vision with specialized eyewear solutions.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Book your Eyecheck-up Schedule!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-500">
                  <img
                    alt="..."
                    src="https://plus.unsplash.com/premium_photo-1661607090924-58a4776ae1c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXllJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                      style={{ top: '-94px', height: '95px' }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Eye Check-Up Journey
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      1. Fill out a Health History Form.
                    </p>
                    <p className="text-md font-light mt-2 text-white">
                      2. Undergo a Torch Check-Up.
                    </p>
                    <p className="text-md font-light mt-2 text-white">
                      3. Refraction Test via Auto Refractometer.
                    </p>
                    <p className="text-md font-light mt-2 text-white">
                      4. Precise Refraction Tests with Vision Drum, Trial Box, and Frame.
                    </p>
                    <p className="text-md font-light mt-2 text-white">
                      5. Thorough Near Vision Test."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------TYPES OF FRAMES --------------------------START-------------> */}


        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex  flex-wrap  justify-center text-center   mb-24">
              <div className="w-full lg:w-12/12 px-4">
                <h2 className="text-4xl font-semibold">Types of Frames</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-500">
                We offer various frame types: sleek 3-Piece/Rimless frames for a minimalist look, durable Full Rim Metal frames, lightweight and flexible Full Rim TR90 frames, and stylish Half Rim/Supra frames that combine strength with elegance. Find the perfect frame to suit your style and comfort needs!
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --------------------TYPES OF FRAMES --------------------------END-------------> */}

        {/* --------------------TYPES OF LENSE --------------------------START-------------> */}

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4" style={{ marginLeft: 'auto', marginRight: "auto" }}>
            <div className="flex  flex-wrap  justify-center text-center   mb-24">
              <div className="w-full lg:w-12/12 px-4">
                <h2 className="text-4xl font-semibold">Types of lenses</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-500">
                  Our lens options include photochromic lenses that darken in sunlight,
                  bifocal lenses with separate sections for near and distance vision,
                  progressive lenses offering a smooth transition between distances,
                  and blue cut computer lenses that protect your eyes from harmful screen light.
                  Choose the perfect lens for your needs!
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {LenseType.map((lense) => (
                <div key={lense.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={lense.imageSrc}
                      alt={lense.imageAlt}
                      className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={lense.href}>
                          <span aria-hidden="true" className="absolute inset-0 text-2xl" />
                          {lense.heading}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{lense.subHeading}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------TYPES OF LENSE --------------------------END-------------> */}



        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>



          <div className="container mx-auto px-4" style={{ marginLeft: 'auto', marginRight: "auto" }}>
            <div className="items-center flex flex-wrap  ">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("../assets/img/shop-image.JPG")}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blue-600 p-3  text-center  inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Winning Hearts Since 2023</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-500">
                    Established in 2023, Shree Netram Optical has become a premier eyewear brand
                    in Indore. Our success stems from prioritizing customer satisfaction.
                    By offering unbeatable deals and exceptional service, we've earned the trust
                    of our customers. At Shree Netram Optical, customer
                    happiness is our top priority, driving our journey towards excellence.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100 mr-3">
                            <i className="fas fa-infinity"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Blue Cut Computer Glasses
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100 mr-3">
                            <i className="fas fa-mask"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Fashionable Eyewear & Sunglasses
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100 mr-3">
                            <i class="fas fa-prescription"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Power Sunglasses
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="pb-20 relative block bg-gray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64" style={{ marginLeft: 'auto', marginRight: "auto" }}>
            <div className="flex  text-center flex-wrap    justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Our Commitment
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                  Your satisfaction matters. That's why we pay attention to every detail,
                  ensuring top-notch quality in your eyewear.
                  Here's why our customers keep coming back.
                </p>
              </div>
            </div>
            <div className="flex  flex-wrap  mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4  text-center ">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-glasses text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Exclusive Selections
                </h6>
                <p className="mt-2 mb-4 text-gray-400">
                  Discover our curated signature collection, tailored to complement your unique style and fashion preferences.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4  text-center ">
                <div className="text-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lock text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Safe Transactions
                </h5>
                <p className="mt-2 mb-4 text-gray-400">
                  Experience hassle-free online payments through our secure and encrypted payment gateways, providing you with peace of mind and security for every transaction
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4  text-center ">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-money-bill text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Unbeatable Prices
                </h5>
                <p className="mt-2 mb-4 text-gray-400">
                  At our store, we ensure our valued customers receive the most competitive prices on all purchases, guaranteeing you the best deal every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form schedule */}
        <section className="relative block py-24 lg:pt-0 bg-gray-800">
          <div className="container mx-auto px-4" style={{ marginLeft: 'auto', marginRight: "auto" }}>
            <div className="flex  flex-wrap  justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Schedule Your Eye Test Today!
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Mobile number
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="+91 9*********"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className=" text-center  mt-6">
                      <button
                        className="bg-gray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
