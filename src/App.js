import React, { useState } from "react";

import ResourceList from "./components/ResourceList";

const App = () => {
  // resourceName: currentState resourceName
  // setResourceName:  function that changes resourceName
  // useState: function (param === 'initalState')

  const [resourceName, setResourceName] = useState("posts");

  return (
    <React.Fragment>
      <h1>API CALL - REACT HOOKS</h1>
      <button className="button" onClick={() => setResourceName("posts")}>
        POSTS LIST
      </button>
      <button className="button" onClick={() => setResourceName("todos")}>
        TODOS LIST
      </button>
      <ResourceList resourceName={resourceName} />
    </React.Fragment>
  );
};

export default App;
