import React from 'react';
import {Modal} from 'react-bootstrap';

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
