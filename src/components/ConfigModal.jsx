import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form, FormControl } from 'react-bootstrap';
import cn from 'classnames';
import _ from 'lodash';
import * as actions from '../actions/index.js';

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
};

class ConfigModal extends React.Component {
  clickOnNotModal = ({ target }) => {
    const { toogleConfigModal } = this.props;
    if (target.className == 'modalBackgroundDiv') toogleConfigModal();
  }

  renderCheckBoxes() {
    const { titles, valuesOnOf, changeFilter } = this.props;

    return Object.entries(titles).map(([name, title]) => {
      const uniqueKey = _.uniqueId();
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

  render() {
    const { toogleConfigModal, modalConfigOn } = this.props;
    const classesModalWithBG = cn('modalBackgroundDiv', {
      configModalHide: !modalConfigOn,
    });
    
    return (
      <div onClick={this.clickOnNotModal} className={classesModalWithBG}>
        <div className="containerModalConfig">
          <span onClick={toogleConfigModal} className="closeButtonConfig"><b>X</b></span>
          <h4>Wybierz filtry</h4>
          <hr />
          <Form className="containerConfigForm">
            {this.renderCheckBoxes()}
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ConfigModal);
