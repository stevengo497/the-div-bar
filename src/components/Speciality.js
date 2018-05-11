import React from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';

class SpecialityMenu extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="small"
      >
            <img className="specialityMenu" src={("./images/specialty.png")}/>
      </Modal>
    );
  }
}

export default SpecialityMenu;
