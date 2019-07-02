import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var headerStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  };
  return (
    <div>
      <style jsx>{`
      h1 {
        background-color: pink;
        margin-left: 5px;
        margin-right: 5px;
      }
      `}</style>
      <div>
        <h1>Help Queue!</h1>
        <Link to='/'>Home</Link> | <Link to='/newticket'>Create Ticket</Link>
      </div>
    </div>
  );
}

export default Header;
