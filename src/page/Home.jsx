import React,{useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./style/homr.css"
import twos from "./style/two.jpg"
function Home() {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check user's authentication status on component mount
    const usersDataToken = localStorage.getItem("keyCheckData");
    if (usersDataToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data and update login state
  
    localStorage.removeItem('keyCheckData');
    setIsLoggedIn(false);
    navigate("/form");
  };
  
  


//   useEffect(()=>{

//     if(!localStorage.getItem("keyCheckData")){
// navigate("/form")
// alert("login ")
//     }

//   },[])


  return (
    <div>


<div className="homeback">


<div className="flexhome">
<div className="icones">
<span class="material-symbols-outlined">
settings_accessibility
</span>
</div>

<div className="head-one">
  <h1>
  web3 events
  </h1>

</div>
<div className="nav">


<Link to="/">home</Link>
            <br />
            <Link to="/form">form</Link>
       
         
            {isLoggedIn ? (
              <>        
                  <br />
                <Link to="/verify">mint</Link>
                <br />
                <button onClick={handleLogout}>logout</button>
               
              </>
            ) : (
              <Link to="/login">login</Link>
         
            )}

</div>

    </div>

<div className="second">

<div className="two">
<h1>  event organisation</h1>

<p>Newsletters: Subscribe to newsletters from blockchain and web3-focused websites. These newsletters often include event 
  announcements and industry news.</p>

</div>

<div className="images">
  <img src={twos} alt="" />
</div>

</div>


    </div>
 
    
        </div>
  )
}

export default Home