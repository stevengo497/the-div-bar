import React from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';
import '../styling/AppetizerMenu.css';

class AppetizerMenu extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">&lt;App&gt;etizers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>JalapeNULL Poppers</h4>
          <p>
            Jalapeno peppers stuffed with a mixture of cheese and spices. Deep fried for your pleasure.
          </p>
          <h4>Chinese EggNODES</h4>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <h4>Hello World Hummus</h4>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <h4>&lt;div&gt; in a blanket</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <h4>Nacho Tater Bots</h4>
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

// class App extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//
//     this.state = {
//       smShow: false,
//       lgShow: false
//     };
//   }
//   render() {
//     let smClose = () => this.setState({ smShow: false });
//     let lgClose = () => this.setState({ lgShow: false });
//
//     return (
//       <ButtonToolbar>
//         <Button
//           bsStyle="primary"
//           onClick={() => this.setState({ smShow: true })}
//         >
//           Launch small demo modal
//         </Button>
//         <Button
//           bsStyle="primary"
//           onClick={() => this.setState({ lgShow: true })}
//         >
//           Launch large demo modal
//         </Button>
//
//         {/* <MySmallModal show={this.state.smShow} onHide={smClose} /> */}
//         <AppetizerMenu show={this.state.lgShow} onHide={lgClose} />
//       </ButtonToolbar>
//     );
//   }
// }
//
export default AppetizerMenu;
// render(<App />);
