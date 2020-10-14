import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact imageSrc="https://randomuser.me/api/portraits/men/13.jpg" 
               name="Lance Kim" 
               statusText="Online" 
               statusInd/>
      <Contact imageSrc="https://randomuser.me/api/portraits/men/51.jpg" 
               name="Armando Kelley" 
               statusText="Offline"/>
      <Contact imageSrc="https://randomuser.me/api/portraits/women/53.jpg" 
               name="Sonia Taylor" 
               statusText="Online"
               statusInd/>
    </div>
  );
}

export default App;
