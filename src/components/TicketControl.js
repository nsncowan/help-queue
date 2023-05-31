import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TroubleShoot from './TroubleShoot';
import { v4 } from 'uuid'
import TicketDetail from './TicketDetail';
class TicketControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      stateName: 'list',
      mainTicketList: [],
      selectedTicket: null,
    };
  }
 
  handleClick = () => {
    let nextState = null;
    let nextSelectedTicket = this.state.selectedTicket;
    switch(this.state.stateName){
      case 'ticketDetail':
        nextState = 'list'
        nextSelectedTicket = null;
        break;
      case 'troubleshoot':
        nextState = 'form';
        break;
      case 'form':
        nextState = 'list';
        break;
      case 'list':
        nextState = 'troubleshoot';
        break;
      default:
        nextState = 'list';
        break;
    }
    this.setState({
      stateName: nextState,
      selectedTicket: nextSelectedTicket
    })
  };

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
      this.setState({
        selectedTicket: selectedTicket,
        stateName: 'ticketDetails'
      });

  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList});
    this.handleClick()
    };
  
  

  render (){
    let currentlyVisibleState = null;
    let buttonText = null;
    let addTicketButton = null; //thhanks camaron

    switch(this.state.stateName){
      case 'ticketDetails':
        currentlyVisibleState = <TicketDetail ticket={this.state.selectedTicket}/>;
        buttonText = 'Return to Ticket List';
        break;
      case 'troubleshoot':
        currentlyVisibleState = <TroubleShoot />;
        buttonText = "YES DUH";
        break;
      case 'form':
        currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>;
        buttonText = "Return to Ticket List";
        break;
      case 'ticketList':
        currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket}/>
        buttonText ="Troubleshoot";
        break;
      default: 
        currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket}/>
        buttonText ="Troubleshoot";
        break;
    }
 
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}
export default TicketControl;




/* // This is the original version, through "Showing Ticket Detail"
// THIS IS A CLASS COMPONENT
import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: [], // adds mainTicketList to state. added in lesson 36
      selectedTicket: null // this is the new state slice added in the TicketDetail lesson
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
                    mainTicketList: newMainTicketList,
                    formVisibleOnPage: false 
                  });
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} />
      buttonText = "Return to Ticket List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />  // new code in this line 
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} /> // new code as of lesson 36
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl; */