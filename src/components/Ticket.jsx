import React from 'react';
import PropTypes from 'prop-types';
import MyStyledComponent from './../../MyStyledComponent';

function Ticket(props){
  // let myStyles = new MyStyledComponent;
  // var ticketStyles = {
  //   backgroundColor: '#ecf0f1',
  //   fontFamily: 'sans-serif',
  //   paddingTop: '50px'
  // }
  return (
    <div>
      <style jsx>{`
          div {
            background-color: dodgerblue;
            margin-left: 5px;
            margin-right: 5px;
          }

          .ticketList {
            font-size: 200px;
          }
        `}</style>
      <div className="ticketList">
        {/* render() {
          <h3 myStyles class="whiteText">{props.location} - {props.names}</h3>
        } */}
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
