import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Cart() {
  const URL = "http://localhost:3000/cart";
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    getCartProducts();
    getTotalPrice();
  }, []);

  async function getCartProducts() {
    const fetchedProducts = await axios.get(URL);
    setCartProducts(fetchedProducts.data);
  }

  const getTotalPrice = async () => {
    const tPrice = 0;
    await cartProducts.forEach((product) => {
      tPrice += product.price;
    });
    setTotalPrice(tPrice);
  };

  const deleteCartProduct = async (id) => {
    await axios.delete(URL + "/" + id);
    toast("Product deleted from cart");

    getCartProducts();
  };
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product, index) => {
            return (
              <tr
                key={(index + 1).toString()}
                onClick={() => {
                  this.setState({
                    choosenProduct: this.state.productList[product.id - 1],
                  });
                }}
              >
                {/* <th scope="row">{index + 1}</th> */}
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <img src={product.image} style={{ width: 50, height: 50 }} />
                </td>
                <td>
                  <input
                    type={"button"}
                    className="btn btn-danger"
                    value={"Delete"}
                    onClick={() => {
                      deleteCartProduct(product.id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container">
        <div className="col-md-12 text-center">
          <div class="card text-white bg-primary mb-3">
            <div class="card-header">Order</div>
            <div class="card-body">
              <h5 class="card-title">
                Number of items : {cartProducts.length}
              </h5>
              <h5>Total price : {totalPrice}</h5>
              <p class="card-text">
                The order will arrive with in 3 working days
              </p>
              <input
                type={"button"}
                value="Check out"
                className="btn btn-success"
                onClick={() => {
                  toast("Your order is on it's way!");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Cart;
