import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const LiStyled = styled.li`
    cursor: pointer;
`

export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const {getData} = this.props;
        
        // this.gotService.getAllCharacters()
        getData()
            .then( (itemList) => {
                this.setState({
                    itemList            
                })
            })
    }

    renderItems(arr) {        
        return arr.map((item,i) => {
            const {id} = item;
            // console.log(item);
            const label = this.props.renderItem(item);
            return (
                <LiStyled 
                    key={i}
                    className="list-group-item"
                    onClick={ () => this.props.onItemSelected(id)}>
                    {label}
                </LiStyled>
            )
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        const {itemList, error} = this.state;
        
        if (!itemList) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(itemList);       
        
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}