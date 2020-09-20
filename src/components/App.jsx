import React from 'react';
import AddModal from './AddModal';
import NewTaskForm from './NewTaskForm.jsx';
import Tasks from './Tasks.jsx';
import NavBar from './NavBar.jsx';

const App = () => (
  <>
    <NavBar />
    <AddModal />
    {/* <NewTaskForm />
    <Tasks /> */}
  </>
);
export default App;