
import styles from "../../styles/Productcard.module.css";
import { Link } from "react-router-dom";

function Productcard(props) {
 var prod =props.product;
  // function onADCclick(){
  //   props.onAddtocartclick(prod);
  // }
  return (
    <div className={styles.content}>
      <Link to={"/productdetail/"+prod.id} className="nav-link">
      <div className={styles.box}>
        <div>
          <img src={prod.image} height="250px" width="150px" alt="product" />
        </div>
        <div>
          <b>{props.product.title}</b>
        </div>
        <div>{props.product.category}</div>


        <div style={{ fontSize: "22px" }}>{props.product.price}</div>
        <div style={{color:"brown"}}>{props.product.rating.rate}</div>
        {/* <button onClick = {onADCclick}>Add to cart</button> */}
      </div>
      </Link>
    </div>
  );
}

export default Productcard;
