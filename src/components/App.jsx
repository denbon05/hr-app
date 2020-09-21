import React from 'react';
import AddModal from './AddModal';
import WorkersSheet from './WorkersSheet';
import NewTaskForm from './NewTaskForm.jsx';
import Tasks from './Tasks.jsx';
import NavBar from './NavBar.jsx';

const App = () => (
  <>
    <NavBar />
    <AddModal />
    <WorkersSheet />
    {/* <NewTaskForm />
    <Tasks /> */}
  </>
);
export default App;