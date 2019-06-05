import React from "react";
function hello() {
  return 'How are you';
}

function HelloDiv() {
  return (
    <div className="container-fluid">
      <h1 className="display-3">JOHN REACT BOILER PLATE</h1><br></br>
      <div>Hello My name is John</div><br></br>
      <button className="btn btn-danger">Button</button><br></br><br></br>
      <ul>
        <h3 className="display-4">Things I have Learned in React so far</h3>
        <li>Components</li>
        <li>RENDER</li>
        <li>IMPORT // EXPORT</li>
        <li>CDNS STILL WORK IN THE HEADER OF THE HTML PAGE</li>
      </ul>
    {hello()}
    </div>
    
  );
}

export default HelloDiv;
