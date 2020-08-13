import React, {Component}from 'react';
import SearchForm from "../SearchForm/searchform"
import ResultDirectory from "../ResultDirectory/resultdirectory"
import API from "../../utils/API"
import { render } from '@testing-library/react';


class  SearchResultContainer extends Component {
    state={
        search: "",
        results: [],
        ab: true
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

    sortName = () =>{
        this.setState({ab:!this.state.ab});
        if (this.state.ab === true) {   
            this.setState({results:this.state.results.sort((a,b) => {
                if(a.name.last < b.name.last){
                    return 1
                } else {
                    return -1
                }
            })})
        } else {
            this.setState({results:this.state.results.sort((a,b) => {
                if(a.name.last > b.name.last){
                    return 1
                } else {
                    return -1
                }
            })})
        }
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
