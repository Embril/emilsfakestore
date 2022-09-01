import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const [loading, setLoading] = useState(false)

  const state = useSelector((state) => state.handleCart)

  let product = state[0]

  const ShowProduct = () => {
    let productCard = state.map((product) => (
      <>
        <div className="col-md-3 mb-4">
          <div class="card h-100 text-center p-4" key={product.id}>
            <img
              src={product.image}
              class="card-img-top"
              alt={product.title}
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title mb-0" style={{ color: 'black' }}>
                {product.title.substring(0, 12)}...
              </h5>
              <p class="card-text lead fw-bold" style={{ color: 'black' }}>
                ${product.price}
              </p>
            </div>
          </div>
        </div>
      </>
    ))
    return productCard
  }

  const Loading = () => {
    return
    ;<>.....Loading</>
  }

  let prices = []
  prices.push(state.map((x) => x.price))
  let Sum = prices.map((y) => y.reduce((x, a) => x + a, 0))

  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="https://htmlcolorcodes.com/assets/images/colors/turquoise-color-solid-background-1920x1080.png"
            className="card-img"
            alt="background"
            height="120%px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                YOUR PRODUCTS
              </h5>
              <div>
                <div>
                  <div className="container py-5">
                    <div className="row py-4">
                      {loading ? <Loading /> : <ShowProduct />}
                    </div>
                    <div>{Sum}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cart
