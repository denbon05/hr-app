import React from 'react';
import { connect } from 'react-redux';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import Calendar from './Calendar';
import cn from 'classnames';
import * as actions from '../actions/index.js';
import logoHr from '../images/logoHR.png';
import bell from '../images/bell-solid.svg';

const mapStateToProps = (state) => {
  const props = {
    bellClicked: state.reminder.bellClicked,
  };
  return props;
};

const actionCreators = {
  clickBell: actions.clickBell,
};



class NavBar extends React.Component {
  renderCalendar() {
    
  }

  render() {console.log(this.props);
    const { bellClicked, clickBell } = this.props;
    const bellClasses = cn("navBelIcon", {
      "bellAlarm": bellClicked,
    });

    return (
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#home2">Home2</Nav.Link>
            <Nav.Link href="#link2">Link2</Nav.Link>
        </Nav>

        <Form inline className="navFormContainer">
          <section className="navIconContainer">
            <img src={bell} onClick={clickBell} className={bellClasses} />
            {bellClicked && <div className="calendar"><Calendar /></div>}
          </section>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 navFieldSearch" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(NavBar);
