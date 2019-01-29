import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services';

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

    // constructor() {
    //     super();
    // }

    state = {
        disableChar: false
    }

    offChar = () => {
        this.setState({
            disableChar: !this.state.disableChar
        })
        // console.log(this.state.disableChar);
    }

    render() {
        const {disableChar} = this.state;
        const toggleRandomChar = !(disableChar) ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button onClick={this.offChar}>Show random Character</Button>
                            {/* <RandomChar/> */}
                            {toggleRandomChar}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    
}
