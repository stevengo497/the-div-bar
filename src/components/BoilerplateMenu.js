import React from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';
import '../styling/BoilerplateMenu.css';

class BoilerplateMenu extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Boilerplates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Shrimp and GITS</h4>
          <p>
            Jalapeno peppers stuffed with a mixture of cheese and spices. Deep fried for your pleasure.
          </p>
          <h4>GUI Mac & Cheese</h4>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <h4>&lt;span&gt;ish rice and beans</h4>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <h4>Cheese-Debugger w/ CURLy fries</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <h4>Chicken Params-ean</h4>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BoilerplateMenu;
