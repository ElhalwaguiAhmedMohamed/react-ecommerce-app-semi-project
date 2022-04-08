import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AddProduct from "./AddProduct";
function ProductTable() {
  const URL = "http://localhost:3000/products";
  let toBeUpdatedProductIndex = -1;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const fetchedProducts = await axios.get(URL);
    setProducts(fetchedProducts.data);
  }

  const deleteProduct = async (id) => {
    await axios.delete(URL + "/" + id);

    toast("Product deletd successfully");
    getProducts();
  };
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr
                key={(index + 1).toString()}
                onClick={() => {
                  this.setState({
                    choosenProduct: this.state.productList[product.id - 1],
                  });
                }}
              >
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
                <td>
                  <img src={product.image} style={{ width: 50, height: 50 }} />
                </td>
                <td>{product.description}</td>
                <td>
                  <Link
                    type={"button"}
                    to="/table/update"
                    className="btn btn-success"
                    value={"Update"}
                    style={{ margin: 5 }}
                    onClick={() => {
                      toBeUpdatedProductIndex = index;
                    }}
                  >
                    Update
                  </Link>
                  <input
                    type={"button"}
                    className="btn btn-danger"
                    value={"Delete"}
                    onClick={() => {
                      deleteProduct(product.id);
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
          <Link
            to={"/table/add"}
            type={"button"}
            value="add new product"
            className="btn btn-success col-12"
            style={{ width: 150 }}
          >
            Add new product
          </Link>
        </div>
      </div>
      <ToastContainer />

      <Outlet context={[getProducts, products[toBeUpdatedProductIndex]]} />
    </>
  );
}

export default ProductTable;
