import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
// import CharacterPage from '../characterPage';
// import BooksPage from '../booksPage';
// import HousesPage from '../housesPage';
import {HousesPage, BooksPage, CharacterPage, BooksItem} from '../pages';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import styled from 'styled-components';

const Button = styled.button`
    outline : none;
    margin-bottom : 10px;
    padding : 5px;
    background-color : blue;
    border : 0px;
    border-radius : 0.25rem;
    color : white;
    cursor : pointer;
`

export default class App extends Component {

    gotService = new gotService();

    state = {
        showChar: true,
        error:false
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleBlock = () => {
        this.setState({
            showChar: !this.state.showChar
        })
        // console.log(this.state.showChar);
    };



    render() {
        const {showChar} = this.state;
        const toggleRandomChar = !showChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                <Button onClick={this.toggleBlock}>Toggle random character</Button>
                                {/* <RandomChar/> */}
                                {toggleRandomChar}
                            </Col>
                        </Row>
                        <Route path='/' exact component={() => <h1>Welcome to GOT DB</h1>}/>
                        <Route path='/characters' component={CharacterPage}/>                        
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        {/* <div className="app">  */}
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                // console.log(match);
                                // console.log(location);
                                // console.log(history);
                            return <BooksItem bookId={id} />}
                        }/>
                        {/* </div> */}
                    </Container>
                </div>
            </Router>
        );
    }
    
}
