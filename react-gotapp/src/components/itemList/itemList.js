import React, {Component} from 'react';
// import './itemList.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const LilStyled = styled.li`
    cursor: pointer;
`

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        
        this.gotService.getAllCharacters()
            .then( (charList) => {
                this.setState({
                    charList            
                })
            })
    }

    renderItems(arr) {        
        return arr.map((item, i) => {
            return (
                <LilStyled 
                    key={i}
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(item.id)}>
                    {item.name}
                </LilStyled>
            )
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        const {charList, error} = this.state;
        
        if (!charList) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(charList);       
        
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}