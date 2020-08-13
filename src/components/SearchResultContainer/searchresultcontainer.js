import React, {Component}from 'react';
import SearchForm from "../SearchForm/searchform"
import ResultDirectory from "../ResultDirectory/resultdirectory"
import API from "../../utils/API"
import { render } from '@testing-library/react';


class  SearchResultContainer extends Component {
    state={
        search: "",
        results: [],
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
        //takes in appropriate 
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })

    }

    sortAtoZ =()=>{
        let sorted = this.state.results;
        sorted = sorted.sort((a,b)=>{
            if(a.name.first>b.name.first){
                return 1
            } else{
                return -1
            }
        })
        this.setState({
           results: sorted
        })
        
    }
    

    sortZtoA =()=>{
        let sorted = this.state.results;
        sorted = sorted.sort((a,b)=>{
            if(a.name.first>b.name.first){
                return -1
            } else{
                return 1
            }
        })
        this.setState({
           results: sorted
        })
        
    }
    

    render(){ 
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <button className="btn btn-primary" 
                onClick={this.sortAtoZ}
                >sort a-z</button>
                <button className="btn btn-primary" 
                onClick={this.sortZtoA}
                >sort z-a</button>
                <ResultDirectory results={this.state.results}/>
                
            </div>
        )
    }
    
}
export default SearchResultContainer;
