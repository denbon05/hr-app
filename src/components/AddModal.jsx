import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import cn from 'classnames';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const props = {

  };
  return props;
};

const actionCreators = {
  showAddModal: actions.showAddModal,
};

const AddModal = (show) => {
  const classesAddModalWithBG = cn('modalBackgroundDiv', {
    addModalHide: show,
  });

  return (
    <div className={classesAddModalWithBG}>
      <div className="containerModalAdd">
        <Form className="containerForm">
          <div className="mainInfo">
            <Form.Control
              type="name"
              className="mb-2 mr-sm-2 nameAdd"
              id="inlineFormInputName2"
              placeholder="Namiary.."
            />
            <Form.Control
              type="tel"
              className="mb-2 mr-sm-2 telAdd"
              id="inlineFormInputName2"
              placeholder="Telefon"
            />
            <Form.Control
              type="address"
              className="mb-2 mr-sm-2 addressAdd"
              id="inlineFormInputName2"
              placeholder="Adres"
            />
            <Form.Control
              type="text"
              className="mb-2 mr-sm-2 passportAdd"
              id="inlineFormInputName2"
              placeholder="Numer paszportu"
            />
            <Form.Group className="birhDayDiv" controlId="exampleForm.ControlInput1">
              <i className="fas fa-baby fa-2x mr-2"></i>
              <Form.Control type="date" />
            </Form.Group>
          </div>

          <div className="containerInputDateAdd">
            <Form.Group className="arriveAdd" controlId="exampleForm.ControlInput1">
              <Form.Label>Data przyjazdu</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Data wyjazdu</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="pobytSelectAdd" controlId="pobytSelect">
              <Form.Label>Pobyt</Form.Label>
              <Form.Control as="select">
                <option>90 dni</option>
                <option>180 dni</option>
                <option>360 dni</option>
              </Form.Control>
            </Form.Group>
          </div>

          <Form.Check
            type="checkbox"
            className="mb-2 mr-sm-2"
            id="inlineFormCheck"
            label="Remember me"
          />
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(AddModal);
