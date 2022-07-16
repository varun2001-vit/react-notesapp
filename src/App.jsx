import React from 'react';
import Header from './Components/header'
import Footer from './Components/Footer'
import Note  from './Components/Note'
import Notes from './notes'
function App() {
    return (
      <div>
      
      <Header/>
      {Notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer/> 
      
      </div>


      );
}

export default App;
      
      

