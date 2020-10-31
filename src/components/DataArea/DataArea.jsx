import React, { useState, useEffect } from "react";
import DataTable from "../DataTable/DataTable";
import Nav from "../Nav/Nav";
import API from "../../utils/API";
import "./DataArea.css";
import DataAreaContext from "../../utils/DataAreaContext";

//Need to Build Logic for Data Fields
const DataArea = () => {
    //Define useState as an Array of users in descending order and list headings.
  const [employeeState, setemployeeState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "Image", width: "10%", order: "descend" },
      { name: "name", width: "10%", order: "descend" },
      { name: "phone", width: "20%", order: "descend" },
      { name: "email", width: "20%", order: "descend" },
      { name: "dob", width: "10%", order: "descend" }
    ]
  });
 // Need to create a method for sorting. Map and Filter; default to descend 
  const handleSort = heading => {
    let currentOrder = employeeState.headings
      .filter(elem => elem.name === heading)
      .map(elem => elem.order)
      .toString();

    if (currentOrder === "descend") {
      currentOrder = "ascend";
    } else {
      currentOrder = "descend";
    }

    //Need a method to compare headings to sort them properly
    const compareFnc = (a, b) => {
      if (currentOrder === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === "dob") {
          return a[heading].age - b[heading].age;
        } else {
          return a[heading].localeCompare(b[heading]);
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        }else if (heading === "dob") {
          return b[heading].age - a[heading].age;
        }  else {
          return b[heading].localeCompare(a[heading]);
        }
      }
    };
    const sortedUsers = employeeState.filteredUsers.sort(compareFnc);
    const updatedHeadings = employeeState.headings.map(elem => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });

    setemployeeState({
      ...employeeState,
      filteredUsers: sortedUsers,
      headings: updatedHeadings
    });
  };

  //Need a method to handle search change event 
  const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = employeeState.users.filter(item => {
      let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      console.log(filter, values)
    if(values.indexOf(filter.toLowerCase()) !== -1){
      return item
    };
    });

    setemployeeState({ ...employeeState, filteredUsers: filteredList });
  };

  //Provide a trigger when the setState mounts for filtering employees
  useEffect(() => {
    API.getUsers().then(results => {
      console.log(results.data.results);
      setemployeeState({
        ...employeeState,
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }, []);

  return (
    <DataAreaContext.Provider
      value={{ employeeState, handleSearchChange, handleSort }}
    >
      <Nav />
      <div className="data-area">
        {employeeState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
      </div>
    </DataAreaContext.Provider>
  );
};

export default DataArea;