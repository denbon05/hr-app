import React from 'react';
import { connect } from 'react-redux';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import AddModal from './AddModal.jsx';
import Calendar from './Calendar.jsx';
import cn from 'classnames';
import * as actions from '../actions/index.js';
import logoHr from '../images/logoHR.png';
import bell from '../images/bell-solid.svg';

const mapStateToProps = (state) => {
  const props = {
    bellClicked: state.reminder.bellClicked,
    modallAddOn: state.modals.modallAddOn,
  };
  return props;
};

const actionCreators = {
  clickBell: actions.clickBell,
  showAddModal: actions.showAddModal,
};



class NavBar extends React.Component {

  render() {console.log(this.props);
    const {
      showAddModal, modallAddOn,
      bellClicked, clickBell,
    } = this.props;
    const bellClasses = cn("navBelIcon", {
      "bellAlarm": bellClicked,
    });

    return (
      <>
        <Navbar bg="light" expand="lg" className="navBar">
          <Navbar.Brand href="#home" className="logoBrand">
            <img
              src={logoHr}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo HR"
            />
          </Navbar.Brand>

          <Nav className="navLinksContainer">
            <Button onClick={() => showAddModal(true)} size="sm" variant="outline-success">
              <i className="fas fa-user-plus fa-lg" />
            </Button>
            <Button size="sm" variant="outline-primary">
              <i className="fas fa-address-book fa-lg" />
            </Button>
            <Button size="sm" variant="outline-danger">
              <i className="fas fa-users-slash fa-lg" />
            </Button>
            <Button size="sm" variant="outline-warning">
              <i className="fas fa-users-cog fa-lg" />
            </Button>
          </Nav>

          <Form inline className="navFormContainer">
            <section className="navIconContainer">
              <img src={bell} onClick={clickBell} className={bellClasses} />
              {bellClicked && <div className="calendar"><Calendar /></div>}
            </section>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 navFieldSearch" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <AddModal onHide={modallAddOn} />
      </>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(NavBar);
