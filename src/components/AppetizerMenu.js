import React from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';
import '../styling/AppetizerMenu.css';

class AppetizerMenu extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="medium"
        aria-labelledby="contained-modal-title-lg"
      >
            <Modal.Body >
                <img className="appetizerModal" src={("./images/appetizer.png")}/>
            </Modal.Body>

          <Button onClick={this.props.onHide}>Close</Button>

      </Modal>
    );
  }
}

export default AppetizerMenu;
