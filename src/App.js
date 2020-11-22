import React from 'react';
import PersonalData from "./profile/personalData"

const handleName = (name) => {
  alert(name);
}

function App() {
  return (
    <div style={{margin:"30px auto",textAlign:"center"}}> 
     
     <PersonalData name="Hatem Hamrouni" 
                   bio=" A simple human who looks for happiness "
                   profession="Graphic Designer"
                   handleName={handleName}>
<img src="/pic.jpg" width="250px"alt="My pic"/>
     </PersonalData>
    
    </div>
  );
}

export default App;
