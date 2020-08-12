import React from "react";

function SearchForm(props){
    return(
        <form>
            <div>
                <label htmlFor="search">Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    placeholder="search by name"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm