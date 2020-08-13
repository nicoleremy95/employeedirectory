import React from "react";

function SearchForm(props){
    return(
        <form>
            <div>
                <label htmlFor="search">Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="filter by name"
                    id="search"
                />
                
            </div>
        </form>
    )
}

export default SearchForm