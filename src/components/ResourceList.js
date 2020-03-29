import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = props => {
  const [resources, setResources] = useState([]);

  const fetchResources = async resourceName => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${props.resourceName}`
    );

    setResources(response.data);
  };

  useEffect(() => {
    fetchResources(props.resourceName);
  }, [props.resourceName]);

  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
