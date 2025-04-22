import commonstyles from '../styles/common.module.css'
function AboutUs() {
    return ( <div>
        <div className={commonstyles.headeinnerBody}>
        <h1>About Us</h1>
     <img src ={"https://images.pexels.com/photos/6238100/pexels-photo-6238100.jpeg?auto=compress&cs=tinysrgb&w=600"} alt={"aboutuspic"}/>
        
        <h3>This  AboutUs page created for an e commerce app</h3>
        <h3>It is a shopping site,which help us to get the things to our door step.  </h3>
        </div>

    </div> );
}

export default AboutUs;