import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';

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
        showChar: false,
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
            <> 
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
                    <CharacterPage/>
                </Container>
            </>
        );
    }
    
}
