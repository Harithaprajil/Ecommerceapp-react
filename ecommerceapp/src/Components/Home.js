import styles from "../styles/common.module.css";
import homeStyle from "../styles/Home.module.css";



function Home() {
    return (
        <div className={styles.headeinnerBody}>
        <img src={"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f3d6f4c5b413adda.png?q=20"}  alt={"banner"} height={'20%'} width={'100%'}/>
        <div className={homeStyle.advert}>
            <div className={homeStyle.advertbox}>
                <img src={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/22e305bf45e2e1a2.jpeg?q=20"} alt={"advt"}/>

            </div>
            <div className={homeStyle.advertbox}>
                <img src={"https://rukminim1.flixcart.com/fk-p-flap/520/280/image/893ea2a230487675.jpg?q=20"} alt={"advt"}/>
            </div>
            <div className={homeStyle.advertbox}>
                <img src={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6f23fc1a646a9c64.jpg?q=20"}alt={"advt"}/>
            </div>
            </div>
            

            <div className={homeStyle.advert}>
            <div className={homeStyle.advertbox}>
                <img src={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/e2db10907d69915e.jpg?q=20"}alt={"advt"}/>
            </div>
            <div className={homeStyle.advertbox}>
                <img src={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/21efa502c90cf24e.jpg?q=20"}alt={"advt"}/>
            </div>
            <div className={homeStyle.advertbox}>
                <img src={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4c35a59d166e1064.jpg?q=20"}alt={"advt"}/>
            </div>
            </div>
            {/* <div className={homeStyle.advertbox}>
                <img src={""}/>
            </div>
            <div className={homeStyle.advertbox}>
                <img src={""}/>
            </div>
            <div className={homeStyle.advertbox}>
                <img src={""}/>
            </div> */}







    
        </div>
        
    );
}

export default Home;