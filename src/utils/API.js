import axios from "axios";

export default{ 
    //collect users
    getEmps: function(){    
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};