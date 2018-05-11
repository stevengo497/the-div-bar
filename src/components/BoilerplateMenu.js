import React from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';
import '../styling/BoilerplateMenu.css';

class BoilerplateMenu extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="small"
      >
            <img className="boilerplateModal" src={("./images/boilerplates.png")}/>
      </Modal>
    );
  }
}

export default BoilerplateMenu;
