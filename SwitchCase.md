
```js
import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TroubleShoot from './TroubleShoot';
import { v4 } from 'uuid'
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
class TicketControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      stateName: 'list',
      mainTicketList: [],
      selectedTicket: null,
      // editingTicket?
    };
  }
 
  handleClick = () => {
    let nextState = null; // =====>>>>> this defines where the 'click' will take the user.
    let nextSelectedTicket = this.state.selectedTicket;
    switch(this.state.stateName){
      case 'ticketDetail': // =====>>>>> this is the current state (if this were a conditional, it would be an 'if' or 'else if')
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
    // BELOW: this is where the applicable 'case' is actually used to set the state
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
    this.setState({
      mainTicketList: newMainTicketList
    });
    this.handleClick()
    };

  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      stateName: 'list',
      mainTicketList: newMainTicketList,
      selectedTicket: null
    });
  }
  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({stateName: "editing"});
  }

  handleEditingTicketInListToBeClickedOnLaterWhenYouNeedToUpdateAFormForWhenYouUseCreateReactAppButDoNotKnowWhatYouAreDoingButHaveToDoItAnyWayAlright = (ticketToEdit) => {
    const editedMainTicketList = this.state.mainTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
      this.setState({
        mainTicketList: editedMainTicketList,
        stateName: "list"

        
      });

  }
  

  render (){
    let currentlyVisibleState = null;
    let buttonText = null;
    let addTicketButton = null; //thhanks camaron

    switch(this.state.stateName){
      case "editing":
        currentlyVisibleState = <EditTicketForm 
        ticket={this.state.selectedTicket}
        onClickingEdit ={this.handleEditingTicketInListToBeClickedOnLaterWhenYouNeedToUpdateAFormForWhenYouUseCreateReactAppButDoNotKnowWhatYouAreDoingButHaveToDoItAnyWayAlright } />
        buttonText= "Return To Ticket List";
        break;
      case 'ticketDetails':
        currentlyVisibleState = <TicketDetail 
          ticket={this.state.selectedTicket} 
          onClickingDelete = {this.handleDeletingTicket}
          onClickingEdit = {this.handleEditClick} />
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
```