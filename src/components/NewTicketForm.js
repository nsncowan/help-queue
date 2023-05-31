import React from "react";
import PropTypes from "prop-types"; //import PropTypes lesson 36
import { v4 } from 'uuid'; // added lesson 36
import ReusableForm from "./ReusableForm";

function NewTicketForm(props){ //add props in lesson 36
  
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

// add PropTypes in lesson 36
NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;