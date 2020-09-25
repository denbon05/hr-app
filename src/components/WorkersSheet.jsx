import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import cn from 'classnames';
import _ from 'lodash';
import * as actions from '../actions/index.js';
import { workersSelector, tableTitles } from '../selectors/index.js';

const mapStateToProps = (state) => {
  const props = {
    workers: workersSelector(state),
    titles: tableTitles(state),
  };
  return props;
};

const actionCreators = {

};

class WorkersSheet extends React.Component {
  renderTh() {
    const { titles } = this.props;
    return Object.values(titles).map((value) => (<th>{value}</th>));
  }

  renderTbodyContent() {
    const { workers } = this.props;
    return workers.map((worker, idx) => {
      const { id } = worker;
      return (
        <tr>
          <td>{idx + 1}</td>
          {Object.entries(worker).map(([key, info]) => {
            switch (key) {
              case 'id':
                return;
              case 'polandFirm':
                return <td>{info ? 'Tak' : 'Nie'}</td>;
            }
            return (<td>{info}</td>);
          })}
        </tr>
      )
    });
  }

  render() {
    
    return (
      <Table className="tableContainer" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            {this.renderTh()}
          </tr>
        </thead>
        <tbody>
          {this.renderTbodyContent()}
        </tbody>
      </Table>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(WorkersSheet);
