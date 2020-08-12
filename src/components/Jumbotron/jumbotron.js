import React from "react";

import "./jumbotron.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron (){
    return(
        <nav className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">User Directory</h1>
                <p className="lead">find, sort, discover </p>
            </div>
        </nav>
    )
}

export default Jumbotron;
