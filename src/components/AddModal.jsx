import React from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import cn from 'classnames';
import _ from 'lodash';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const props = {
    modallAddOn: state.addModal.modallAddOn,
    wayOfStay: state.addModal.wayOfStay,
    name: state.addModal.name,
    phone: state.addModal.phone,
    address: state.addModal.address,
    passportNumb: state.addModal.passportNumb,
    birthday: state.addModal.birthday,
    job: state.addModal.job,
    polandFirm: state.addModal.polandFirm,
    bankAccountNum: state.addModal.bankAccountNum,
    wayOfStay: state.addModal.wayOfStay,
    startVisa: state.addModal.startVisa,
    endVisa: state.addModal.endVisa,
    arriveDate: state.addModal.arriveDate,
    departureDate: state.addModal.departureDate,
    countLegalDayLost: state.addModal.countLegalDayLost,
    datePIP: state.addModal.datePIP,
    kartaPobytuDate: state.addModal.kartaPobytuDate,
    notes: state.addModal.notes,
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
  chooseWayOfStay: actions.chooseWayOfStay,
  getStartVisaDate: actions.getStartVisaDate,
  getEndVisaDate: actions.getEndVisaDate,
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
    const id = _.uniqueId();
    addWorker({ id });
  }

  renderVisaInputs() {
    const { getStartVisaDate, getEndVisaDate } = this.props;

    return (
      <div className="visaDate">
        <Form.Group>
        <Form.Label>Poczatek visy</Form.Label>
          <Form.Control
            onChange={({target: { value } }) => getStartVisaDate({ value })}
            type="date"
            className="mb-2"
            id="startVisaDate"
            placeholder="Jane Doe"
          />
        </Form.Group>
        <Form.Group>
        <Form.Label>Konec visy</Form.Label>
          <Form.Control
            onChange={({target: { value } }) => getEndVisaDate({ value })}
            type="date"
            className="mb-2"
            id="endVisaDate"
            placeholder="Jane Doe"
          />
        </Form.Group>
      </div>
    );
  }

  render() {
    const {
      toogleAddModal, modallAddOn,
      onchangeName, onchangePhoneNumber,
      onchangeAddress,
      onchangePassportNumber, selctBirthDayDate,
      onchangeJob, polandFirmToogle, onchangeBankAccountNum,
      chooseWayOfStay, wayOfStay,
      selctArriveDate, selectDepartureDate, onchangeCountLegalDays,
      selectPIPDate, selectConclusionDate,
      onchangeNotes,
    } = this.props;

    const classesAddModalWithBG = cn('modalBackgroundDiv', {
      addModalHide: !modallAddOn,
    });

    const showVisaInputs = wayOfStay === 'visa';
    const classesWayOfStay = cn('mb-3', {
      wayOfStay: !showVisaInputs,
      wayOfStayWithDates: showVisaInputs,
    });

    return (
      <div onClick={this.clickOnNotModal} className={classesAddModalWithBG}>
        <div className="containerModalAdd">
        <span onClick={toogleAddModal} className="closeButtonAdd"><b>X</b></span>
          <Form onSubmit={(e) => this.handlerAddWorker(e)} className="containerForm">
            <div className="mainInfo">
              <Form.Control
                value={this.props.name}
                onChange={({ target: { value } }) => onchangeName({ value })}
                required
                type="text"
                className="mb-2 mr-sm-2 nameAdd"
                id="inlineFormInputName2"
                placeholder="Namiary"
              />
              <Form.Control
                onChange={({ target: { value } }) => onchangePhoneNumber({ value })}
                value={this.props.phone}
                type="number"
                className="mb-2 mr-sm-2 telAdd"
                id="inlineFormInputName3"
                placeholder="Telefon"
              />
              <Form.Control
                onChange={({ target: { value } }) => onchangeAddress({ value })}
                value={this.props.address}
                type="address"
                className="mb-2 mr-sm-2 addressAdd"
                id="inlineFormInputName4"
                placeholder="Adres"
              />
              <Form.Control
                onChange={({ target: { value } }) => onchangePassportNumber({ value })}
                type="text"
                value={this.props.passportNumb}
                className="mb-2 mr-sm-2 passportAdd"
                id="inlineFormInputName5"
                placeholder="Numer paszportu"
              />
              <Form.Group className="birhDayDiv" controlId="exampleForm.ControlInput1">
                <i data-tooltip="data urodzenia" className="fas fa-baby fa-2x mr-2"></i>
                <Form.Control
                  value={this.props.birthday}
                  onChange={({ target: { value } }) => selctBirthDayDate({ value })}
                  type="date"
                  max={this.maxShowBirthDayDate()}
                />
              </Form.Group>
            </div>

            <div className="jobContainer">
              <Form.Control
                  onChange={({ target: { value } }) => onchangeJob({ value })}
                  value={this.props.job}
                  type="text"
                  className="mb-2 mr-sm-2 jobAdd"
                  id="inlineFormInputName6"
                  placeholder="Praca"
              />
              <Form.Check
                onChange={polandFirmToogle}
                value={this.props.polandFirm}
                type="checkbox"
                className="mb-2 mr-sm-2 poladndFirm"
                id="inlineFormCheck"
                label="Polska firma"
              />
              <Form.Control
                onChange={({ target: { value } }) => onchangeBankAccountNum({ value })}
                value={this.props.bankAccountNum}
                type="number"
                className="mb-2 mr-sm-2 bankNumber"
                id="inlineFormInputName7"
                placeholder="Konto bankowe"
              />
            </div>

            <div className="containerInputDateAdd">
              <Form.Group key='inline-radio' className={classesWayOfStay}>
                <Form.Check onChange={({target: { id } }) => chooseWayOfStay({ id })} name="legalWay" inline label="BezVis" type='radio' id='bezViz' />
                <Form.Check onChange={({target: { id } }) => chooseWayOfStay({ id} )} name="legalWay" inline label="Visa" type='radio' id='visa' />
              </Form.Group>
              { showVisaInputs && this.renderVisaInputs()}
              <div className="arriveDepartureDates">
                <Form.Group className="arriveDateAdd" controlId="exampleForm.ControlInput2">
                  <Form.Label>Data przyjazdu</Form.Label>
                  <Form.Control value={this.props.arriveDate} onChange={({ target: { value } }) => selctArriveDate({ value })} type="date" />
                </Form.Group>
                <Form.Group className="departureDateAdd" controlId="exampleForm.ControlInput3">
                  <Form.Label>Data wyjazdu</Form.Label>
                  <Form.Control value={this.props.departureDate} onChange={({ target: { value } }) => selectDepartureDate({ value })} type="date" />
                </Form.Group>
              </div>
              <Form.Group className="pobytSelectAdd">
                <Form.Label>Zostalo dni</Form.Label>
                <Form.Control
                  onChange={({ target: { value } }) => onchangeCountLegalDays({ value })}
                  value={this.props.countLegalDayLost}
                  type="number"
                  className="mb-2 mr-sm-2"
                  id="inlineFormInputName7"
                  placeholder="Pobyt"
                />
              </Form.Group>
              <div className="kartaAndPIPDates">
                <Form.Group className="pipDateAdd" controlId="exampleForm.ControlInput4">
                  <Form.Label>Zgloszenia PIP</Form.Label>
                  <Form.Control value={this.props.datePIP} onChange={({ target: { value } }) => selectPIPDate({ value })} type="date" />
                </Form.Group>
                <Form.Group className="kartaPobytuDateAdd" controlId="exampleForm.ControlInput5">
                  <Form.Label>Wniosek na kartu</Form.Label>
                  <Form.Control value={this.props.kartaPobytuDate} onChange={({ target: { value } }) => selectConclusionDate({ value })} type="date" />
                </Form.Group>
              </div>
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
