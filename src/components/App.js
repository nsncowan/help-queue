import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){
  return (
    <React.Fragment> {/* use a <React.Fragment> to wrap multiple elements. */}
      <Header /> {/* add code from Header.js, in this case, replacing: <h1>Help Queue</h1> */}
      <TicketControl />
    </React.Fragment>
  );
}

export default App;