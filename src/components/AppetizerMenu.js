import React from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';
import '../styling/AppetizerMenu.css';

class AppetizerMenu extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="small"
      >
                <img className="appetizerModal" src={("./images/appetizer.png")}/>
      </Modal>
    );
  }
}

export default AppetizerMenu;
