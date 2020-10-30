import axios from "axios";

export default{ 
    //collect users
    getUsers: function(){    
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};