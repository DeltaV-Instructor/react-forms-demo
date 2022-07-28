import React from 'react';
import { ListGroupItem, Form, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


 let data = [1,2,3,4,5,6,7,8,9,10]; 

 class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      howToSort: '',
      sortedData: data
    }
  }


  // after form create add function
  handleSubmit = (event) => {
    event.preventDefault();
    let userName = event.target.userName.value;
    let selected = event.target.selected.value;

    let firstName = event.target.firstName.value;
    console.log('first name',firstName);


    // console.log('user name: ',userName, selected);
    //now after build constructor function
    this.setState({
      userName: userName,
      howToSort: selected
    });
    console.log('From state called in submit handler: ',this.state.userName);
    // this is because set state is slow and is doing its thing we dont see the first state set and then see the first in the second keep this in mind. There ways to get around this. So lets get things into state earlier. Add addtional event listeners.
  };





handleInput = (event) => {
  // because its not a submit we dont need event.preventDefault
  let userName = event.target.value;
  console.log('user Name from handle input:',userName);
  this.setState({
    userName: userName
  });
};


handleSelect = (event) => {
  let selected = event.target.value;
  console.log('Selected Option: ',selected);
  //skip state
  if(selected === 'even'){
    let newData = data.filter(number => number % 2 === 0);
    this.setState({ sortedData: newData});
    // index numbers from origin array so we can add  update MAp()
  }else if(selected === 'odd'){
    let newData = data.filter(number => number % 2 === 1);
    this.setState({ sortedData: newData});

  } else {
    //is "all" is selected
    this.setState({ sortedData: data});
  }

};



  render() {
    console.log('From state in render: ',this.state.userName);
    console.log('sorted DAta: ',this.state.sortedData);

    // let numbers = data.map((number, index) => {
    let numbers = this.state.sortedData.map((number, index) => {

      // return <ListGroupItem key={index}>{number} - {data[index]}</ListGroupItem>
      return <ListGroupItem key={index}>{number} - {this.state.sortedData[index]}</ListGroupItem>

    });
// Lets take user import to allow the user to choose the numbers they want to see 
// There are some quarks to forms in REACT so lets take a look
    return (
      <>
      <header>Forms in REACT</header>
      <main>
        <ListGroup>
          {numbers}
        </ListGroup>
        {/* react works this way */}
        <Form onSubmit={this.handleSubmit}>
            <Form.Label>Username:
              <Form.Control type="text" name="userName" onInput={this.handleInput}/>
            </Form.Label>

            <Form.Group controlId='firstName'>
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Label htmlFor="lastName">Last Name:</Form.Label>
            <Form.Control type="text" name="lastname" id="lastName"/>

            <Form.Group>
              <p>Selected Numbers</p>
              <Form.Select name="selected" onChange={this.handleSelect}>
                <option value="all">All</option>
                <option value="even">Even</option>
                <option value="odd">Odd</option>
              </Form.Select>
            </Form.Group>
           <Button type="submit">Submit</Button>
        </Form>
      </main>
      </>
    )
  }
}
export default App;

/*

<form onSubmit={this.handleSubmit}>
          <label>
          with no back slash we get error 
          <input type="text" name="userName" onInput={this.handleInput} />
          </label>
           also add a drop down for users to select 
          <fieldset>
            <legend>Selected Numbers</legend>
            <select name="selected" onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </select>
          </fieldset>
          how do we submit a form, there are several ways this is similar to
           201 lets add a button, add the type for react be explicit for reacts sake
           So now add event listener just like on click
           
          <button type="submit">Submit</button>
        </form>


*/