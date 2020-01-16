import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/BookingForm.css";
import { showForm } from "../actions/bookings";

const BookingForm = (props) => {

  const { show, showForm } = props;

  return (
    <Modal show={show} onHide={() => showForm(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => showForm(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => showForm(false)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const mapStateToProps = state => {
  return {
    show: state.bookings.show,
  };
};

const mapDispatchToProps = {
  showForm,
};

BookingForm.prototype = {
  showForm: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);

