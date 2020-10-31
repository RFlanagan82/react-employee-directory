import React, { useState, useEffect } from "react";
import DataTable from "../DataTable/DataTable";
import Nav from "../Nav/Nav";
import API from "../../utils/API";
import "./DataArea.css";
import DataAreaContext from "../../utils/DataAreaContext";

//Need to Build Logic for Data Fields
const DataArea = () => {
    //Destructure to take in current employee state and set employee state to override current.
    //define useState as an array of users in descending order and list headings.
  const [employeeState, setEmployeeState] = useState({
    emps: [],
    order: "descend",
    filteredEmps: [],
    headings: [
      { name: "Image", width: "10%", order: "descend" },
      { name: "name", width: "10%", order: "descend" },
      { name: "phone", width: "20%", order: "descend" },
      { name: "email", width: "20%", order: "descend" },
      { name: "dob", width: "10%", order: "descend" }
    ]
  });
 // Create a constant for filtering and sorting. 
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

    //Need a constant to compare headings to sort them properly
    const compareHeaders = (a, b) => {
      if (currentOrder === "ascend") {
        // account for undefined values
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
    const sortedEmps = employeeState.filteredEmps.sort(compareHeaders);
    const updatedHeadings = employeeState.headings.map(elem => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });

    //Take in existing employee state properties, filtered users,
    setEmployeeState({
      ...employeeState,
      filteredEmps: sortedEmps,
      headings: updatedHeadings
    });
  };

  //Handle search change event 
  const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = employeeState.emps.filter(item => {
      let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      console.log(filter, values)
    if(values.indexOf(filter.toLowerCase()) !== -1){
      return item
    };
    });

    //Take in existing employee state properties and update it for newly sorted or filtered state.
    setEmployeeState({ ...employeeState, filteredEmps: filteredList });
  };

  //Provide a trigger when the setState mounts for filtering employees
  useEffect(() => {
    API.getEmps().then(results => {
      console.log(results.data.results);
      setEmployeeState({
        ...employeeState,
        emps: results.data.results,
        filteredEmps: results.data.results
      });
    });
  }, []);

  return (
    <DataAreaContext.Provider
      value={{ employeeState, handleSearchChange, handleSort }}
    >
      <Nav />
      <div className="data-area">
        {employeeState.filteredEmps.length > 0 ? <DataTable /> : <div></div>}
      </div>
    </DataAreaContext.Provider>
  );
};

export default DataArea;