import React from 'react';
import ReactDOM from 'react-dom'
function Note() {
    return ( 
        <div className="note">
        <h1>heelo bro </h1>
        <p>I am varun</p>
         </div>
    );
}
function Note1() {
    return ( 
        <div className="note">
        <h1>React </h1>
        <p>React is cool</p>
         </div>
    );
}
function Note2() {
    return ( 
        <div className="note">
        <h1>Node js </h1>
        <p>I like Node</p>
         </div>
    );
}
function Note3() {
    return ( 
        <div className="note">
        <h1>backend </h1>
        <p>Backend is awesome</p>
         </div>
    );
}

export default Note;
export { Note1, Note2, Note3 };