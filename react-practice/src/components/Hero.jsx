import React from 'react'
import foodImage from '../assets/food.jpg'
import pizza from '../assets/pizza.jpg'
import burger from '../assets/Burger.webp'
import biryani from '../assets/Chicken-Biryani.jpg'
import noodles from '../assets/Noodles.jpg'
import pasta from '../assets/pasta.jpg'
import sandwich from '../assets/sandwich.jpg'
import vegetable from '../assets/vegetables.jpg'

function Hero() {
  return (
    <div className="container-fluid">

      <div
        style={{
          backgroundImage: `url(${foodImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px"
        }}
      >
        <div className="row h-100">

          <div className="col-md-12 d-flex flex-column justify-content-center align-items-start text-white ms-4 px-4">

            <h1>Delicious Food</h1>

            <p>Fresh • Tasty • Affordable</p>

            <button className="btn btn-warning">
              Order Now
            </button>

          </div>
        </div>
      </div>


      
      <div className="col-md-12 d-flex align-items-center justify-content-center my-4">
        <h1 className="fw-bold fs-2">OUR MENU</h1>
      </div>


      
      <div className="row">

        
        <div className="col-md-4 mb-4">
          <div className="card">

            <img
              src={pizza}
              className="card-img-top object-fit-cover"
              alt="Pizza"
              style={{ height: "200px" }}   
            />

            <div className="text-center fs-5">
              <p className="text-dark fw-bold mb-2">PIZZA</p>

              <p className="fw-bold text-success">
                ₹199
              </p>
              <button className="btn btn-warning  rounded-pill fw-bold" style={{width: "450px"}}>
                Order Now
              </button>

            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">

            <img
              src={burger}
              className="card-img-top object-fit-cover"
              alt="Burger"
              style={{ height: "200px" }}  
            />

            <div className="text-center">

              <p className="text-dark fw-bold fs-5 mb-2">
                BURGER
              </p>

              <p className="fw-bold text-success fs-5">
                ₹149
              </p>
              <button className="btn btn-warning  rounded-pill fw-bold" style={{width: "450px"}}>
                Order Now
              </button>

            </div>
          </div>
        </div>


        
        <div className="col-md-4 mb-4">
          <div className="card">

            <img
              src={biryani}
              className="card-img-top object-fit-cover"
              alt="Chicken Biryani"
              style={{ height: "200px" }}   
            />

            <div className="text-center">

              <p className="text-dark fw-bold fs-5 mb-2">
                CHICKEN BIRYANI
              </p>

              <p className="fw-bold text-success fs-5">
                ₹249
              </p>
              <button className="btn btn-warning rounded-pill fw-bold" style={{width: "450px"}}>
                Order Now
              </button>

            </div>
          </div>
        </div>

      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">

            <img
              src={noodles}
              className="card-img-top object-fit-cover"
              alt="Chicken Noodles"
              style={{ height: "200px" }}  
            />
            <div className="text-center">
              <p className="text-dark fw-bold fs-5 mb-2">
                NOODLES
              </p>
              <p className="fw-bold text-success fs-5">
                ₹179
              </p>
              <button className="btn btn-warning  rounded-pill fw-bold " style={{width: "450px"}}>
                Order Now
              </button>

            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">

            <img
              src={sandwich}
              className="card-img-top object-fit-cover"
              alt="Sandwich"
              style={{ height: "200px" }}   
            />

            <div className="text-center">

              <p className="text-dark fw-bold fs-5 mb-2">
                SANDWICH
              </p>

              <p className="fw-bold text-success fs-5">
                ₹129
              </p>

              
              <button className="btn btn-warning rounded-pill fw-bold " style={{width: "450px"}}>
                Order Now
              </button>

            </div>
          </div>
        </div>


        <div className="col-md-4 mb-4">
          <div className="card">

            <img
              src={pasta}
              className="card-img-top object-fit-cover"
              alt="Pasta"
              style={{ height: "200px" }} 
            />

            <div className="text-center">

              <p className="text-dark fw-bold fs-5 mb-2">
                PASTA
              </p>

              <p className="fw-bold text-success fs-5">
                ₹199
              </p>

            
              <button className="btn btn-warning rounded-pill fw-bold " style={{width: "450px"}}>
                Order Now
              </button>

            </div>
          </div>
        </div>

      </div>


    

      <div className="row">

        <div className="col-md-12 bg-warning rounded-3 py-3 px-4">

          <div className="d-flex align-items-center justify-content-center">

            <div className="text-center">

              <p className="fw-bold mb-1">
                SPECIAL OFFER
              </p>

              <p className="fw-bold text-danger fs-2 mb-1">
                Get 20% Off
              </p>

              <p className="fw-bold mb-0">
                On your first order
              </p>

            </div>

            <button className="btn bg-danger text-white rounded-pill ms-5 px-4">
              Order Now
            </button>

          </div>

        </div>
      </div>


      

      <div className="row align-items-center py-3">

        <div className="col-md-6">

          <div className="px-4">

            <div className="d-flex align-items-center gap-2">

              <span className="fs-3">
                👨‍🍳
              </span>

              <span className="text-decoration-underline fw-bold fs-3">
                ABOUT
              </span>

            </div>

            <p className="mt-2 ms-5">
              We serve fresh and delicious food
              <br />
              made with quality ingredients.
            </p>

          </div>

        </div>


        <div className="col-md-6">

          <div className="card border-0 me-4">

            <img
              src={vegetable}
              className="card-img-top rounded-2"
              alt="Food"
              style={{ height: "200px" }}
            />

          </div>

        </div>

      </div>

      <div className="row bg-secondary">

        <div className="col-md-12">

          <div className="text-center text-decoration-underline">

            <h1 className="fs-3 fw-bold">
              CONTACT
            </h1>

          </div>

          
          <div className="d-flex justify-content-center align-items-center m-4 gap-5">

            <div className="text-center">

              <i className="bi bi-envelope-heart bg-warning rounded-3 p-1"></i>

            
              <span className="ms-2">
                foodie@gmail.com
              </span>

            </div>


            <div className="text-center">

              <i className="bi bi-telephone bg-warning rounded-3 p-1"></i>

              <span className="ms-2">
                1234567891
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className="row bg-dark text-white text-center py-3">

        <div className="col-md-12">

          <p className="mb-0">
            © 2026 Foodie Restaurant
          </p>

        </div>

      </div>

    </div>
  )
}

export default Hero