import React from 'react';
import {Modal} from 'react-bootstrap';

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
