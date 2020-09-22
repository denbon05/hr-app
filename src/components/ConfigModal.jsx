import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form, FormControl } from 'react-bootstrap';
import cn from 'classnames';
import _ from 'lodash';
import * as actions from '../actions/index.js';
import { titles } from '../reducers/index.js';

const mapStateToProps = (state) => {
  const props = {
    modalConfigOn: state.configModal.modalConfigOn,
    titles: state.configModal.titles,
    valuesOnOf: state.configModal.valuesOnOf,
  };
  return props;
};

const actionCreators = {
  toogleConfigModal: actions.toogleConfigModal,
  changeFilter: actions.changeFilter,
  confirmFiltresForSheet: actions.confirmFiltresForSheet,
};

class ConfigModal extends React.Component {
  renderCheckBoxes() {
    const { titles, valuesOnOf, changeFilter } = this.props;console.log(valuesOnOf)

    return titles.map((titleObj) => {
      const uniqueKey = _.uniqueId();
      const [[name, title]] = Object.entries(titleObj);
      const switchOn = valuesOnOf[name];

      return (
        <Form.Check
          onChange={() => changeFilter({ name })}
          checked={switchOn}
          className="configItem"
          key={uniqueKey}
          type="switch"
          id={name}
          label={title}
        />
      );
    });
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    const { confirmFiltresForSheet } = this.props;
  }

  render() {
    const { toogleConfigModal, modalConfigOn } = this.props;
    const classesModalWithBG = cn('modalBackgroundDiv', {
      configModalHide: modalConfigOn,
    });
    
    return (
      <div className={classesModalWithBG}>
        <div className="containerModalConfig">
          <span onClick={toogleConfigModal} className="closeButtonAdd"><b>X</b></span>
          <h4>Wybierz filtry</h4>
          <hr />
          <Form onSubmit={this.handlerSubmit} className="containerConfigForm">
            {this.renderCheckBoxes()}
            <Button
              variant="warning"
              className="buttonConfigModal"
            >
              Zastosuj
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ConfigModal);
