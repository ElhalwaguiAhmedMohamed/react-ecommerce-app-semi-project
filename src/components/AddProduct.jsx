import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function AddProduct(props) {
  const [refresh] = useOutletContext();
  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: "",
    quantity: 0,
    category: "",
    image: `images/${Math.floor(Math.random() * (4 - 1 + 1)) + 1}.jpg`,
    price: 0,
    description: "",
  });

  const updateProduct = (e) => {
    setNewProduct((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
    console.log(newProduct);
  };

  const addProduct = () => {
    axios({
      method: "post",
      url: "http://localhost:3000/products",
      data: {
        ...newProduct,
      },
    });
    toast("Product added successfully");
    refresh();
  };
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Add</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type={"text"} name="id" onChange={updateProduct} />
            </td>
            <td>
              <input type={"text"} name="name" onChange={updateProduct} />
            </td>
            <td>
              <input type={"text"} name="quantity" onChange={updateProduct} />
            </td>
            <td>
              <input type={"text"} name="category" onChange={updateProduct} />
            </td>
            <td>
              <input
                type={"text"}
                name="description"
                onChange={updateProduct}
              />
            </td>
            <td>
              <input type={"text"} name="price" onChange={updateProduct} />
            </td>

            <td>
              <Link
                to={"/table"}
                type={"button"}
                value="add"
                onClick={addProduct}
                className="btn btn-success"
              >
                Add
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
}

export default AddProduct;
