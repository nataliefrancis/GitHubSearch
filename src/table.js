import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Col, Row } from 'react-bootstrap';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import Header from './header';

    //---------props is null. Needs fixing---------//
// const tableRowEvents = {
//     onClick: (e, row, rowIndex) => {
//       console.log(`clicked on row with index: ${rowIndex}`);
//       console.log(row);
//       this.props.history.push({
//         pathname: '/details',
//         state: { detail: row}
//       })
//     }
//  }

        //----table dropdown info----//
const expandRow = {
    renderer: (row, rowIndex) => (
        <Card>
        <Card.Body>
            <Row>
                <Col className="col-2"><Card.Img src={row.owner.avatar_url} /></Col>
                <Col>
                    <Card.Title>{ `${row.name}` }</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Author: { `${row.owner.login}` }</Card.Subtitle>
                    <Card.Subtitle className="mb-2">Last Update: { `${row.updated_at}` }</Card.Subtitle>
                </Col>
                <Col>
                    <Card.Text>{ `${row.description}` }</Card.Text>
                    <Card.Text>{ `${row.language}` }</Card.Text>
                    <Card.Link href={row.url}>Repo Link</Card.Link>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    ),
    showExpandColumn: false
  };
 
export class Table extends Component {
    //TO-DO: Classes not being recognized, bootstrap or otherwise. Carets not showing.

    state = {
        error: null,
        repository: [],
        columns: [{  
            dataField: 'any',  
            text: '#',
            formatter: (cell, row, rowIndex) => (
                Object.values = rowIndex+1
            ),     
            classes: 'sm-wide point',
            sort: true
            }, 
            {  
            dataField: 'name',  
            text: 'Name',
            classes: 'point',
            sort: true 
          },  
          {  
            dataField: 'description',  
            text: 'Description',
            classes: 'lg-wide point',
          },  
          {  
            dataField: 'language',  
            text: 'Language', 
            filter: textFilter(), 
            classes: 'point',
            sort:true  
          }, 
          {  
            dataField: 'stargazers_count',  
            text: 'Stars', 
            classes: 'sm-wide point', 
            sort: true  
          }, 
          {  
            dataField: 'owner.login',  
            text: 'Owner',
            classes: 'point',
          }]
    }

    componentDidMount() {
            //receives query from search.js
        let querystring = this.props.location.state.detail
        axios.get(`https://api.github.com/search/repositories?q=`+querystring)
          .then(res => {
            console.log(res);
            this.setState({    
                repository: res.data.items  
            })
            .catch(error => {
                this.setState({error: error.message});
                console.log("API error response: "+error);
            });
        })
    }

    render() {  
        return (  
            <div>
                <Header></Header>
                <Container className="top-margin">   
                    <BootstrapTable   
                    striped  
                    hover  
                    keyField='id'   
                    data={ this.state.repository }   
                    columns={ this.state.columns }
                    filter={ filterFactory() } 
                    //rowEvents={ tableRowEvents }
                    expandRow={ expandRow }/>
                </Container> 
            </div>
        )  
    }  
}

export default Table