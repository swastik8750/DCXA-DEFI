import * as A from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { makeStyles } from "@material-ui/core/styles";
import comingsoon from '../ComingSoon/comingsoon.png';
// import {useState} from 'react';
const useStyles=makeStyles({
  root:{
    marginLeft:"25%",
  },
  root1:{
    marginLeft:"22%",
    height:"200px",
    width:"275px"
  }
});
export default function ComingSoon(props) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const show = props.show;
  const handleClose = props.handleClose;
  const handleShow = props.handleShow;
  const classes=useStyles();
  return (
    <>

      <A.Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <A.Modal.Header closeButton>
          <h1 className={classes.root}>COMING SOON</h1>
        </A.Modal.Header>
        <A.Modal.Body>
         <A.Image className={classes.root1} src={comingsoon}/>
        </A.Modal.Body>
        <A.Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </A.Modal.Footer>
      </A.Modal>
    </>
  );
}