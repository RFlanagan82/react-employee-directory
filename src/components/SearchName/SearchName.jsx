import React, { useContext } from "react";
import "./SearchName.css"
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className= "searchbox">
            <form className= "form-inline">
                <input
                    className="form-control mr-sm-2"
                    type= "search"
                    placeholder= "name"
                    onChange={e => context.handleSearchChange(e)}
                    />
                <button className="searchBtn" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchName;