import React, { useContext } from "react";
import "./DataBody.css"
import DataAreaContext from "../../utils/DataAreaContext"

//Build out the Data sets for the table
const DataBody = () => {
    const context = useContext(DataAreaContext);

    // Create function to compute Date of Birth
    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate =[month, day, year].join("-");
        return formattedDate;
    }
    return (
        <tbody>
        {context.employeeState.filteredEmps[0] !== undefined && context.employeeState.filteredEmps[0].name !== undefined ? 
        (context.employeeState.filteredEmps.map(({ login, name, picture, phone, email, dob }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={picture.medium}
                    alt={"profile image for " + name.first + " " + name.last}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-field align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + email} target="__blank">
                    {email}
                  </a>
                </td>
                <td data-th="DOB" className="align-middle">
                  {formatDate(dob.date)}
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    );
  }
  
  export default DataBody;