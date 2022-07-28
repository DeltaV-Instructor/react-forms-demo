import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


 let data = [1,2,3,4,5,6,7,8,9,10]; 

 class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      howToSort: ''
    }
  }


  // after form create add function
  handleSubmit = (event) => {
    event.preventDefault();
    let userName = event.target.userName.value;
    let selected = event.target.selected.value;
    console.log('user name: ',userName, selected);
    //now after build constructor function
    this.setState({
      userName: userName,
      howToSort: selected
    })
  };





  render() {
    let numbers = data.map((number, index) => {
      return <ListGroupItem key={index}>{number} - {data[index]}</ListGroupItem>
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
        <form onSubmit={this.handleSubmit}>
          <label>
          {/* with no back slash we get error */}
            <input type="text" name="userName" />
          </label>
          {/* also add a drop down for users to select */}
          <fieldset>
            <legend>Selected Numbers</legend>
            <select name="selected">
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </select>
          </fieldset>
          {/* how do we submit a form, there are several ways this is similar to 201 les add a button, add the type for react be explicit for reacts sake
          So now add event listener just like on click
           */}
          <button type="submit">Submit</button>
        </form>
      </main>
      </>
    )
  }
}
export default App;