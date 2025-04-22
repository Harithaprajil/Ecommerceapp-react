import Productcard from "./ProductCard";
import styles from "../../styles/ProductList.module.css";
import commonStyles from "../../styles/common.module.css";


import { useEffect, useState } from "react";


const Products = () => {
  // function addtocart(prods) {
  //   console.log("products",prods);
  // }
  const[searchText ,setSearchText] = useState('');
  const onSearchChange= ($e)=>{
    setSearchText($e.target.value);
  }
  const [ProductList,setProductlist] = useState([]);
  
  function loadProductsBySearchText() {
    fetch('https://fakestoreapi.com/products').then((response)=>{
      response.json().then ((data)=>{setProductlist(data);

      })
    })
  }
  useEffect(()=>{
    loadProductsBySearchText();
  },[searchText]);
  
  const filteredproducts= ProductList.filter((p)=>{
    return p.category.toLowerCase().includes(searchText);
  })
  
   
// const classnamefortitle = [styles.container,commonStyles.headeinnerBody].join(' ')
  return (
    <>
      <div className={commonStyles.headeinnerBody}> 
      search:<input type="text" id="productSearch" onChange={onSearchChange}/><button>search</button>
    </div>
      <div className={styles.container}>

        {
        filteredproducts.map((p) => {
         return <Productcard product ={p}/>
        }) 
        }
      </div>
      {/* <div>
        {
          <Productdetail productdetail = {ProductList}/>
        }
      </div> */}
    
      <div id='test'></div>
    </>
  );
};

export default Products;
