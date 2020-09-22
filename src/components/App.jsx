import React from 'react';
import AddModal from './AddModal';
import ConfigModal from './ConfigModal';
import WorkersSheet from './WorkersSheet';
// import NewTaskForm from './NewTaskForm.jsx';
// import Tasks from './Tasks.jsx';
import NavBar from './NavBar.jsx';

const App = () => (
  <>
    <NavBar />
    <AddModal />
    <ConfigModal />
    <WorkersSheet />
  </>
);
export default App;