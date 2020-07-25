import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Filters from './Components/Filter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import API from './api/API';
class App extends React.Component {


  constructor(props)  {
    super(props);
    this.state = {tasks: [], projects: [], filter: 'All', openMobileMenu: false, modalOpen: false, editedTask: null};
  }
  getProjects(tasks) {
    return [...new Set(tasks.map((task) => {
      if(task.project)
        return task.project;
      else
        return null;
    }))];
  }

  componentDidMount() {
    // fake loading the tasks from the API server, and create the projects list
    API.getTasks().then((tasks) => this.setState({tasks: tasks, projects: this.getProjects(tasks)}));
  }


  toggleModal = () => {
    this.setState((state) => ({modalOpen: !state.modalOpen, editedTask: null}));
  }

  showSidebar = () => {
    this.setState((state) => ({openMobileMenu: !state.openMobileMenu}));
  }


 

  filterTasks = (filter, project) => {
    switch(filter){
      case 'filter-important':
        API.getTasks('important').then((tasks) => this.setState({tasks: tasks, filter: 'Important'}));
        break;
      case 'filter-today':
        API.getTasks('today').then((tasks) => this.setState({tasks: tasks, filter: 'Today'}));
        break;
      case 'filter-week':
        API.getTasks('week').then((tasks) => this.setState({tasks: tasks, filter: 'Next Week'}));
        break;
      case 'filter-private':
        API.getTasks('private').then((tasks) => this.setState({tasks: tasks, filter: 'Private'}));
        break;
      case 'filter-shared':
        API.getTasks('shared').then((tasks) => this.setState({tasks: tasks, filter: 'Shared'}));
        break;
      case 'filter-project':
        API.getTasks(project).then((tasks) => this.setState({tasks: tasks, filter: project}));
        break;
      default:
        API.getTasks().then((tasks) => this.setState({tasks: tasks, filter: 'All'}));
        break;
    }
  }


  render(){
    return(
      <React.Fragment>
 <NavBar/> 
 <Container fluid>
          <Row className="vheight-100 mt-5">
            <Collapse in={this.state.openMobileMenu}>
              <Col sm={4} bg="light" id="left-sidebar" className="collapse d-sm-block below-nav">
                <Filters projects = {this.state.projects} filterTasks = {this.filterTasks} activeFilter = {this.state.filter}/>
              </Col>
            </Collapse>
            {/* <Col sm={8} className="below-nav">
            <h1>{this.state.filter}</h1>
            <TodoList tasks = {this.state.tasks} editTask = {this.editTask} updateTask = {this.addOrEditTask} deleteTask = {this.deleteTask} />
            <Button variant="success" size="lg" className="fixed-right-bottom" onClick={this.toggleModal}>&#43;</Button>
            </Col>

            {this.state.modalOpen && <TodoForm modalOpen={this.state.modalOpen} toggleModal={this.toggleModal} addOrEditTask={this.addOrEditTask} task={this.state.editedTask}/>} */}
          </Row>
        </Container>



      {/* <div className = "container-fluid mt-5">
          <div className="row vheight-100">
            <aside className="collapse d-sm-block col-sm-4 col-12 bg-light below-nav" id="left-sidebar">
            <Filters projects = {this.state.projects} filterTasks = {this.filterTasks} activeFilter = {this.state.filter}/>
            </aside>
            <main className="col-sm-8 col-12 below-nav">
              <TodoList tasks = {this.state.tasks}/>
              <button type="button" className="btn btn-lg btn-success fixed-right-bottom">&#43;</button>
            </main>
          </div>
        </div> */}
      </React.Fragment>
     
    );
  }
}

export default App;
