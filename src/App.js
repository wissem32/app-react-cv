import React from 'react';
import logo from './logo.svg';
import photo from './photo.jpg';
import './App.css';
import Personelinfo from './Personelinfo/Personelinfo.js';
import Education from './Education/Education.js';
import Stage from './Stage/Stage.js';


function App() {
  return (
    <div className="row">
      <div className="col-md-4">
        <h3 className="name">Mahmoud Wissem</h3>
        <img className="image" src={photo} />
          <div className="personel-info">
            <h4 className="name">Personel Info</h4>
          </div> 

           <div>
          
              <Personelinfo titre="adress:" des="route Mahdia km 0,5 cite polica Sfax"/>  
              <Personelinfo titre="phone:" des="24364708"/>  
              <Personelinfo titre="E.mail:" des="wissemmahmoud6@gmail.com"/>  
              <Personelinfo titre="Date of birth:" des="30/11/1989/"/>  
              <Personelinfo  titre="Date of birth:" des="30/11/1989/"/>  

           </div>
              <div className="personel-info">
                <h4 style={{color:"white"}}>Skills</h4>
              </div> 
          <p style={{color:"white"}}>html</p>

          <div class="progress">
          <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
     
    </div>
          </div>
          <p style={{color:"white"}}>css</p>
          <div class="progress">
             <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
     
              </div>
           </div>
           <p style={{color:"white"}}>javascrip</p>

           <div class="progress">
             <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
     
              </div>
           </div>

           <p style={{color:"white"}}>React</p>

           <div class="progress">
             <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
     
              </div>
           </div>
          
  
     </div>

      <div className="col-md-8">

          <hr/>
            <p>Education</p>
          <hr/>
          <div>
              <Education date="2010"  titre="diplome:" des="bac informatique" institu="école secondair majida boulila"/>  
              <Education date="2015"  titre="diplome:" des="lisence appliqué en informatique industriel" institu="ENET'COM"/>  
              <Education date="2019"  titre="diplome:" des=" developpement web" institu="centre de formation GOMY CODE"/>  

         </div>
         
         <hr/>
            <p>Stage</p>
          <hr/>
          <div>
              <Stage date="2014"   etablisement="STEG"/>  
              <Stage date="2014"   etablisement="Techno-max"/>  

         </div> 
       </div>

      </div>
  );
}

export default App;
