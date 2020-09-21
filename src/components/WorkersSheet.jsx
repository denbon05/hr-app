import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormControl } from 'react-bootstrap';
import cn from 'classnames';
import _ from 'lodash';
import * as actions from '../actions/index.js';
import { workersSelector } from '../selectors/index.js';

const mapStateToProps = (state) => {
  const props = {
    addModal: workersSelector(state),
  };
  console.log(props);
  return props;
};

const actionCreators = {

};

class WorkersSheet extends React.Component {

  render() {
    
    return (
      <div></div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(WorkersSheet);
