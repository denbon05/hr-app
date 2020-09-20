import React from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import cn from 'classnames';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const props = {
    modallAddOn: state.addModal.modallAddOn,
  };
  return props;
};

const actionCreators = {
  toogleAddModal: actions.toogleAddModal,
  onchangeName: actions.onchangeName,
  onchangePhoneNumber: actions.onchangePhoneNumber,
  onchangeAddress: actions.onchangeAddress,
  onchangePassportNumber: actions.onchangePassportNumber,
  selctBirthDayDate: actions.selctBirthDayDate,
  onchangeJob: actions.onchangeJob,
  polandFirmToogle: actions.polandFirmToogle,
  onchangeBankAccountNum: actions.onchangeBankAccountNum,
  selctArriveDate: actions.selctArriveDate,
  selectDepartureDate: actions.selectDepartureDate,
  onchangeCountLegalDays: actions.onchangeCountLegalDays,
  selectPIPDate: actions.selectPIPDate,
  selectConclusionDate: actions.selectConclusionDate,
  onchangeNotes: actions.onchangeNotes,
  addWorker: actions.addWorker,
};

class AddModal extends React.Component {
  clickOnNotModal = ({ target }) => {
    const { toogleAddModal } = this.props;
    if (target.className == 'modalBackgroundDiv') toogleAddModal();
  }

  maxShowBirthDayDate = () => {
    const d = new Date();
    const year = d.getFullYear() - 16;
    let month = d.getMonth();
    const day = d.getDate();
    if (month.toString().length === 1) month = `0${month}`;
    return `${year}-${month}-${day}`;
  }

  handlerAddWorker = (e) => {
    e.preventDefault();
    const { addWorker } = this.props;
    addWorker();
  }

  render() {
    const {
      toogleAddModal, modallAddOn,
      onchangeName, onchangePhoneNumber,
      onchangeAddress,
      onchangePassportNumber, selctBirthDayDate,
      onchangeJob, polandFirmToogle, onchangeBankAccountNum,
      selctArriveDate, selectDepartureDate, onchangeCountLegalDays,
      selectPIPDate, selectConclusionDate,
      onchangeNotes,
    } = this.props;
    const classesAddModalWithBG = cn('modalBackgroundDiv', {
      addModalHide: !modallAddOn,
    });

    return (
      <div onClick={this.clickOnNotModal} className={classesAddModalWithBG}>
        <div className="containerModalAdd">
        <span onClick={toogleAddModal} className="closeButtonAdd"><b>X</b></span>
          <Form onSubmit={(e) => this.handlerAddWorker(e)} className="containerForm">
            <div className="mainInfo">
              <Form.Control
                onChange={({ target: { value } }) => onchangeName({ value })}
                required
                type="text"
                className="mb-2 mr-sm-2 nameAdd"
                id="inlineFormInputName2"
                placeholder="Namiary"
              />
              <Form.Control
                onChange={({ target: { value } }) => onchangePhoneNumber({ value })}
                type="number"
                className="mb-2 mr-sm-2 telAdd"
                id="inlineFormInputName3"
                placeholder="Telefon"
              />
              <Form.Control
                onChange={({ target: { value } }) => onchangeAddress({ value })}
                type="address"
                className="mb-2 mr-sm-2 addressAdd"
                id="inlineFormInputName4"
                placeholder="Adres"
              />
              <Form.Control
                onChange={({ target: { value } }) => onchangePassportNumber({ value })}
                type="text"
                className="mb-2 mr-sm-2 passportAdd"
                id="inlineFormInputName5"
                placeholder="Numer paszportu"
              />
              <Form.Group className="birhDayDiv" controlId="exampleForm.ControlInput1">
                <i data-tooltip="data urodzenia" className="fas fa-baby fa-2x mr-2"></i>
                <Form.Control
                  onChange={({ target: { value } }) => selctBirthDayDate({ value })}
                  type="date"
                  max={this.maxShowBirthDayDate()}
                />
              </Form.Group>
            </div>

            <div className="jobContainer">
              <Form.Control
                  onChange={({ target: { value } }) => onchangeJob({ value })}
                  type="text"
                  className="mb-2 mr-sm-2 jobAdd"
                  id="inlineFormInputName6"
                  placeholder="Praca"
              />
              <Form.Check
                onChange={polandFirmToogle}
                type="checkbox"
                className="mb-2 mr-sm-2 poladndFirm"
                id="inlineFormCheck"
                label="Polska firma"
              />
              <Form.Control
                onChange={({ target: { value } }) => onchangeBankAccountNum({ value })}
                type="number"
                className="mb-2 mr-sm-2 bankNumber"
                id="inlineFormInputName7"
                placeholder="Konto bankowe"
              />
            </div>

            <div className="containerInputDateAdd">
              <Form.Group className="arriveDateAdd" controlId="exampleForm.ControlInput2">
                <Form.Label>Data przyjazdu</Form.Label>
                <Form.Control onChange={({ target: { value } }) => selctArriveDate({ value })} type="date" />
              </Form.Group>
              <Form.Group className="departureDateAdd" controlId="exampleForm.ControlInput3">
                <Form.Label>Data wyjazdu</Form.Label>
                <Form.Control onChange={({ target: { value } }) => selectDepartureDate({ value })} type="date" />
              </Form.Group>
              <Form.Group className="pobytSelectAdd">
                <Form.Label>Pobyt</Form.Label>
                <Form.Control
                  onChange={({ target: { value } }) => onchangeCountLegalDays({ value })}
                  type="number"
                  className="mb-2 mr-sm-2"
                  id="inlineFormInputName7"
                  placeholder="Ile dni zostalo"
                />
              </Form.Group>
              <Form.Group className="pipDateAdd" controlId="exampleForm.ControlInput4">
                <Form.Label>Zgloszenia PIP</Form.Label>
                <Form.Control onChange={({ target: { value } }) => selectPIPDate({ value })} type="date" />
              </Form.Group>
              <Form.Group className="kartaPobytuDateAdd" controlId="exampleForm.ControlInput5">
                <Form.Label>Wniosek na kartu</Form.Label>
                <Form.Control onChange={({ target: { value } }) => selectConclusionDate({ value })} type="date" />
              </Form.Group>
            </div>

            <div className="containerSubmitWithNotesAdd">
              <Form.Control onChange={({ target: { value } }) => onchangeNotes({ value })} placeholder="Notatki" as="textarea" rows="1" className="notesAdd" />
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
