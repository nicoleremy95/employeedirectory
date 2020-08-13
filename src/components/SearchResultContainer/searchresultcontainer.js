import React, {Component}from 'react';
import SearchForm from "../SearchForm/searchform"
import ResultDirectory from "../ResultDirectory/resultdirectory"
import API from "../../utils/API"
import { render } from '@testing-library/react';


class  SearchResultContainer extends Component {
    state={
        search: "",
        results: [],
        sortDesc: true
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

    // sortAtoZ =()=>{
    //     this.setState.sort()
    // }
    // sortZtoA = ()=>{
       
    //     this.setState.sort()
        
    // }

    render(){
        
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                
                />
                <button className="btn btn-primary" 
                // onClick={this.sortAtoZ()}
                >sort a-z</button>
                <button className="btn btn-primary" 
                // onClick={this.sortZtoA()}
                >sort z-a</button>
                <ResultDirectory results={this.state.results}/>
                
            </div>
        )
    }
    
}
export default SearchResultContainer;
