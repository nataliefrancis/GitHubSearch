import React, { Component } from 'react';
//import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from "axios";
import Details from './details';

const tableRowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
    }
 }
 
export class Table extends Component {
    state = {
        repository: [],
        columns: [{  
            dataField: 'any',  
            text: '#',
            formatter: (cell, row, rowIndex) => (
                Object.values = rowIndex+1
            ),     
            sort: true
            }, 
            {  
            dataField: 'name',  
            text: 'Name',
            sort: true 
          },  
          {  
            dataField: 'description',  
            text: 'Description'
          },  
          {  
            dataField: 'language',  
            text: 'Language', 
            filter: textFilter(), 
            sort:true  
          }, 
          {  
            dataField: 'stargazers_count',  
            text: 'Stars',  
            sort: true  
          }, 
          {  
            dataField: 'owner.login',  
            text: 'Owner'
          }]
    }

    componentDidMount() {
        axios.get(`https://api.github.com/search/repositories?q=tetris`)
          .then(res => {
            console.log(res);
            this.setState({    
                repository: res.data.items  
            });
        })
    }

    render() {  
        return (  
            <div className="container" style={{ marginTop: 50 }}>   
                <BootstrapTable   
                striped  
                hover  
                keyField='id'   
                data={ this.state.repository }   
                columns={ this.state.columns }
                filter={ filterFactory() } 
                rowEvents={ tableRowEvents } />  
            </div>  
        )  
    }  
}

export default Table