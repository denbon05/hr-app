import React from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import cn from 'classnames';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const props = {
    modallAddOn: state.modals.modallAddOn,
  };
  return props;
};

const actionCreators = {
  toogleAddModal: actions.toogleAddModal,
};

class AddModal extends React.Component {

  render() {
    const { toogleAddModal, modallAddOn } = this.props;
    const classesAddModalWithBG = cn('modalBackgroundDiv', {
      addModalHide: false /*!modallAddOn*/,
    });console.log(classesAddModalWithBG)

    return (
      <div className={classesAddModalWithBG}>
        <div className="containerModalAdd">
        <span onClick={toogleAddModal} className="closeButtonAdd"><b>X</b></span>
          <Form className="containerForm">
            <div className="mainInfo">
              <Form.Control
                type="text"
                className="mb-2 mr-sm-2 nameAdd"
                id="inlineFormInputName2"
                placeholder="Namiary"
              />
              <Form.Control
                type="tel"
                className="mb-2 mr-sm-2 telAdd"
                id="inlineFormInputName3"
                placeholder="Telefon"
              />
              <Form.Control
                type="address"
                className="mb-2 mr-sm-2 addressAdd"
                id="inlineFormInputName4"
                placeholder="Adres"
              />
              <Form.Control
                type="text"
                className="mb-2 mr-sm-2 passportAdd"
                id="inlineFormInputName5"
                placeholder="Numer paszportu"
              />
              <Form.Group className="birhDayDiv" controlId="exampleForm.ControlInput1">
                <i data-tooltip="data urodzenia" className="fas fa-baby fa-2x mr-2"></i>
                <Form.Control type="date" />
              </Form.Group>
            </div>

            <div className="jobContainer">
              <Form.Control
                  type="text"
                  className="mb-2 mr-sm-2 jobAdd"
                  id="inlineFormInputName6"
                  placeholder="Praca"
              />
              <Form.Check
                type="checkbox"
                className="mb-2 mr-sm-2 poladndFirm"
                id="inlineFormCheck"
                label="Polska firma"
              />
              <Form.Control
                type="numer"
                className="mb-2 mr-sm-2 bankNumber"
                id="inlineFormInputName7"
                placeholder="Konto bankowe"
              />
            </div>

            <div className="containerInputDateAdd">
              <Form.Group className="arriveDateAdd" controlId="exampleForm.ControlInput2">
                <Form.Label>Data przyjazdu</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="departureDateAdd" controlId="exampleForm.ControlInput3">
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
              <Form.Group className="pipDateAdd" controlId="exampleForm.ControlInput4">
                <Form.Label>Zgloszenia PIP</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="kartaPobytuDateAdd" controlId="exampleForm.ControlInput5">
                <Form.Label>Wniosek na kartu</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </div>

            <div className="containerSubmitWithNotesAdd">
              <Form.Control placeholder="Notatki" as="textarea" rows="1" className="notesAdd" />
            </div>
            <Button variant="success" type="submit" className="mb-2 buttonAdd">
              Gotowo
            </Button>
          </Form>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(AddModal);
