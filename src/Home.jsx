

import Header from "./Header"
import './Home.css'

function Home() {
  return (
  <>
  <Header/>
<section className="home-container-main"></section>
<section className="home-container">
<h1>Helping women never doub t that<br></br>they are valuable & Powerful</h1>
  <p >Lorem, ipsum dolor sit amet consectetur <br></br>adipisicing elit. Reiciendis modi nostrum<br></br> atque, quo consectetur veniam, blanditiis <br></br>eum incidunt harum delectus ab expedita<br></br> </p>
   <center><button>Read More</button></center>
   <div className="home-row">
   <div className="home-colume">
   <img src="/src/image/wo.jpg"/><br></br>
      
   </div>
   <div className="home-colume">
   <img src="/src/image/ew.avif"/>
  
   </div>
   <div className="home-colume">
   <img src="/src/image/st.jpg"/>
      
   </div>
   </div>
</section>
<section className="home-container-m">
<p >Lorem, ipsum dolor sit amet consectetur <br></br>adipisicing elit. Reiciendis modi nostrum<br></br> atque, quo consectetur veniam, blanditiis <br></br>eum incidunt harum delectus ab expedita<br></br> </p>
  <button id="hr">Read More</button>

</section>
<section className="home-container-l">
<h1 >We Organization inclusive <br></br>events Women & Girls</h1>
<div className="home-l-row">
  <div className="home-l-colume">
  <img src='/src/image/v.jpg'></img>
    <h2>New area of Women</h2>
    <p >Lorem, ipsum dolor sit amet <br></br>adipisicing elit. nostrum</p>
   <button>Read More</button>    
  </div>
   <div className="home-l-colume">
  <img src='/src/image/vt.jpg'></img>
    <h2>New area of Women</h2>
    <p >Lorem, ipsum dolor sit amet <br></br>adipisicing elit. nostrum</p>
   <button>Read More</button>    
  </div>
   <div className="home-l-colume">
  <img src='/src/image/vl.jpg'></img>
    <h2>New area of Women</h2>
    <p >Lorem, ipsum dolor sit amet <br></br>adipisicing elit. nostrum</p>
   <button >Read More</button>    
  </div>
</div>
</section>
<section className="home-container-lt">
<h1>Help us raise  money for our<br></br>hummanrain cause</h1>
</section>



  </>
  )
}

export default Home