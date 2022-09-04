import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { delCart } from '../redux/action'

const Cart = () => {
  const [loading, setLoading] = useState(false)

  const state = useSelector((state) => state.handleActions)

  const dispatch = useDispatch()
  const delProduct = (product) => {
    dispatch(delCart(product))
  }

  const ShowProduct = () => {
    let productCard = state.map((product) => (
      <>
        <div className="col-md-3 mb-4">
          <div className="card h-100 text-center p-4" key={product.id}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title mb-0" style={{ color: 'black' }}>
                {product.title.substring(0, 12)}...
              </h5>
              <p className="card-text lead fw-bold" style={{ color: 'black' }}>
                ${product.price}
              </p>

              <button
                to="/products"
                className="btn btn-outline-dark"
                onClick={() => delProduct(product)}
              >
                <i className="fa "></i> Remove from cart
              </button>
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
            height="120%"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">YOUR CART</h5>
              <div>
                <div>
                  <div className="container py-5">
                    <div className="row py-4">
                      {loading ? <Loading /> : <ShowProduct />}
                    </div>

                    {Sum[0] !== 0 ? (
                      <div>
                        <h2>Total sum of products</h2>
                        <h3>${Sum}</h3>
                        <br />
                        <br />
                        <button to="/products" className="btn btn-outline-dark">
                          <i className="fa "></i> CHECKOUT
                        </button>
                      </div>
                    ) : (
                      <div>
                        <h2>Your cart is empty! Start shopping!</h2>
                        <br />
                        <br />
                        <Link to="/products" className="btn btn-outline-dark">
                          <i className="fa "></i> START SHOPPING
                        </Link>
                      </div>
                    )}
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
