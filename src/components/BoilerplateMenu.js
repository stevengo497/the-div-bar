import React from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';
import '../styling/BoilerplateMenu.css';

class BoilerplateMenu extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="medium"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Body >
            <img className="boilerplateModal" src={("./images/boilerplates.png")}/>
        </Modal.Body>

          <Button onClick={this.props.onHide}>Close</Button>

      </Modal>
    );
  }
}

export default BoilerplateMenu;
