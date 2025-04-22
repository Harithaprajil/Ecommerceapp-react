import commonStyles from "../../styles/common.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import prostyle from "../../styles/productdetail.module.css";
import { CartContext } from "../cartcontext";
const Productdetail = (props) => {
  const params = useParams();
  const [productDetail, setProductDetail] = useState("");
  const { cartItems, addToCart } = useContext(CartContext);

  function getProductDetails() {
    fetch("https://fakestoreapi.com/products/" + params.id).then((response) => {
      response.json().then((data) => {
        setProductDetail(data);
        console.log(data);
      });
    });
  }
  
  useEffect(()=>{
    getProductDetails();
  }, [params.id]);

  const productdesign = [commonStyles.headeinnerBody, prostyle.prodetail].join(
    " "
  );
  
  
  return (
    <div className={productdesign}>
      <div className={prostyle.prodetail}>
        <div className={prostyle.prodetailtable1}>
          <img src={productDetail.image} height={"250px"} />
        </div>
        <div className={prostyle.prodetailtable2}>
          <div className={prostyle.prodetailbox}>
            <b>{productDetail.title}</b>
          </div>
          <div className={prostyle.prodetailbox} style={{ color: "red",  fontSize:"25px"}}>
            {productDetail.price}
          </div>
          <div className={prostyle.prodetailbox}>{productDetail.category}</div>
          <div className={prostyle.prodetailbox}>
            {productDetail.description}
          </div>
          {/* <div className={prostyle.prodetailbox}>{productDetail.rating.rate}</div>
           <div className={prostyle.prodetailbox}>{productDetail.rating.count}</div> */}
          <div className={prostyle.prodetailbox}>
            {" "}
            <button
              onClick={() => addToCart(productDetail)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
