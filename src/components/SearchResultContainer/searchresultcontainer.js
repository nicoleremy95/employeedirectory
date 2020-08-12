import React, {Component}from 'react';
import SearchForm from "../SearchForm/searchform"
import ResultDirectory from "../ResultDirectory/resultdirectory"
import API from "../../utils/API"
import { render } from '@testing-library/react';


class  SearchResultContainer extends Component {
    state={
        search: "",
        results: []
    }

    componentDidMount(){
        this.searchUsers()
        
    }

    searchUsers= query =>{
        API.search(query)
        .then(res=>this.setState({results:res.data.results}))
        .catch(err=> console.log(err))
    }

    handleInputChange = event =>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event =>{
        event.preventDefault();
        this.searchUsers(this.state.search)
    }
    render(){
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                
                />
                <ResultDirectory results={this.state.results}/>
                
            </div>
        )
    }
    
}
export default SearchResultContainer;
