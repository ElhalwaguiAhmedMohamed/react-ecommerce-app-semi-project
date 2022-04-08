import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function ProductCard({ productRef }) {
  const addProductToCart = async () => {
    await axios({
      method: "post",
      url: "http://localhost:3000/cart",
      data: {
        ...productRef,
      },
    });
    toast("Product added to cart!");
  };
  return (
    <>
      <div className="card">
        <img src={productRef.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{productRef.name}</h5>
          <p class="card-text">{productRef.description}</p>
          <input
            type={"button"}
            class="btn btn-primary"
            value={"Add to cart"}
            onClick={addProductToCart}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ProductCard;
