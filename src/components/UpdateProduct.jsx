import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
function UpdateProduct() {
  const [re, toBeUpdatedProduct] = useOutletContext();
  console.log(toBeUpdatedProduct);
  const [product, setProduct] = useState(toBeUpdatedProduct);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type={"text"} name="name" value={product.name} />
            </td>
            <td>
              <input type={"text"} name="quantity" value={product.quantity} />
            </td>
            <td>
              <input
                type={"text"}
                name="description"
                value={product.description}
              />
            </td>
            <td>
              <img src={product.image} style={{ width: 50, height: 50 }} />
            </td>

            <td>
              <input
                type={"button"}
                value="update"
                className="btn btn-success"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UpdateProduct;
