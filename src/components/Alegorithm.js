import React from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';

class AlegorithmMenu extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="small"
      >
            <img className="alegorithmMenu" src={("./images/alegorithm.png")}/>
      </Modal>
    );
  }
}

export default AlegorithmMenu;
