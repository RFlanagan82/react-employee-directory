import React, { useState, useEffect } from "react";
import DataTable from "../DataTable/DataTable";
import Nav from "../Nav/Nav";
import API from "../../utils/API";
import "./DataArea.css";
import DataAreaContext from "../../utils/DataAreaContext";

//Need to Build Logic for Data Fields
const DataArea = () => {
    //Destructure to take in current employee state and set employee state to override current.
    //define useState as an array of employees in descending order and list headers.
  const [employeeState, setEmployeeState] = useState({
    emps: [],
    order: "descend",
    filteredEmps: [],
    headers: [
      { name: "Image", width: "10%", order: "descend" },
      { name: "name", width: "10%", order: "descend" },
      { name: "phone", width: "20%", order: "descend" },
      { name: "email", width: "20%", order: "descend" },
      { name: "dob", width: "10%", order: "descend" }
    ]
  });
 // Create a constant for handling filtering and sorting. 
  const handleSort = header => {
    let currentOrder = employeeState.headers
      .filter(elem => elem.name === header)
      .map(elem => elem.order)
      .toString();

    if (currentOrder === "descend") {
      currentOrder = "ascend";
    } else {
      currentOrder = "descend";
    }

    //Need a constant to compare headers to sort them properly
    const compareHeaders = (a, b) => {
      if (currentOrder === "ascend") {
        // account for undefined values
        if (a[header] === undefined) {
          return 1;
        } else if (b[header] === undefined) {
          return -1;
        }
        // sort order by header A name compared to B down or by age down
        else if (header === "name") {
          return a[header].first.localeCompare(b[header].first);
        } else if (header === "dob") {
          return a[header].age - b[header].age;
        } else {
          return a[header].localeCompare(b[header]);
        }
      } else {
        // account for undefined values
        if (a[header] === undefined) {
          return 1;
        } else if (b[header] === undefined) {
          return -1;
        }
        // sort order by header B name compared to A or by age going up
        else if (header === "name") {
          return b[header].first.localeCompare(a[header].first);
        }else if (header === "dob") {
          return b[header].age - a[header].age;
        }  else {
          return b[header].localeCompare(a[header]);
        }
      }
    };

    //Define and return newly sorted employees
    const sortedEmps = employeeState.filteredEmps.sort(compareHeaders);
    const updatedheaders = employeeState.headers.map(elem => {
      elem.order = elem.name === header ? currentOrder : elem.order;
      return elem;
    });

    //Set sorted list as new Employee state.
    setEmployeeState({
      ...employeeState,
      filteredEmps: sortedEmps,
      headers: updatedheaders
    });
  };

  //Handle search change event for filtering employees
  const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = employeeState.emps.filter(item => {
      let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      console.log(filter, values)
    if(values.indexOf(filter.toLowerCase()) !== -1){
      return item
    };
    });

    //Take in existing employee state properties and update list by filtered name in search bar.
    setEmployeeState({ ...employeeState, filteredEmps: filteredList });
  };

  //Trigger the results data for search query
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

  //Display on the app page
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