import { useContext } from "react";
import { CartContext } from "./cartcontext";
import commonStyles from "../styles/common.module.css";
import styles from "../styles/cart.module.css";
function Cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(CartContext);
  return (
    <>
      <div className={commonStyles.headeinnerBody}>
        <h2>Cart</h2>
        <div>
          {[...cartItems]
            .slice()
            .reverse()
            .map((item) => (
              <div className={styles.carttable} key={item.id}>
                <div className={styles.cartbox1}>
                  <img src={item.image} height={"150px"} alt={item.title} />
                </div>
                <div className={styles.cartbox2}>
                  <div
                    className={styles.cartitembox}
                    style={{ fontsize: "12px" }}
                  >
                    <h4>{item.title}</h4>
                  </div>
                  <div className={styles.cartitembox}>
                    <p style={{color:"red",fontSize:"25px"}}>{item.price}</p>
                  </div>

                  <div className={styles.cartitembox}>
                    <div className={styles.cartbutton}>
                    <button className={styles.cartCount}
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button className={styles.cartCount}
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </button>

                      <button className={styles.cartRemove}
                        onClick={() => {
                          deleteFromCart(item);
                        }}
                      >
                        Remove
                      </button>
                      </div>

                      <div className={styles.cartplace}>
                        <div>
                        <p ><b>Total Amount :</b></p>
                        <div style={{color:"red",fontSize:"30px"}}>
                          {item.price * item.quantity}
                        </div>
                        </div>
                        <button className={styles.placeOrder}>Place Order</button>
                      </div>

                    </div>
                  </div>

                </div>
              
            ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
