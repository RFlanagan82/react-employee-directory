import React, { useContext } from "react";
import "./DataBody.css"
import DataAreaContext from "../../utils/DataAreaContext"

//Build out the Data sets for the table
const DataBody = () => {
    const context = useContext(DataAreaContext);

    // Create function to compute Date of Birth as MM-DD-YYYY
    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        //grab day array without the timestamp data starting at 'T' in the API value.
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate =[month, day, year].join("-");
        return formattedDate;
    }

    //Bring in current employee list with filter set to 0 and no undefined items shown.
    //Map over needed table elements out of the  API to display on my app table.
    return (
        <tbody>
        {context.employeeState.filteredEmps[0] !== undefined && context.employeeState.filteredEmps[0].name !== undefined ? 
        (context.employeeState.filteredEmps.map(({ id, name, picture, phone, email, dob }) => {
            return (
              <tr key={id.uuid}>
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