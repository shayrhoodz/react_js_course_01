import React, {Component} from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';


const DivStyled = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }    
`
const SpanStyled = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`


// получили компонент из CharacterPage
const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    // gotService = new gotService();

    state = {
        item: null,
        loading: true,
        error: false
    }

    
    componentDidMount() {
        this.updateItem();
        // this.setState({
        //     loading: false
        // })
    }

    // принимает 2 аргумента prevProps и prevState
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getItem} = this.props;
        if (!itemId) {
            return;
        }

        // this.gotService.getCharacter(itemId)
        getItem(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false
                })
            })
        // this.foo.bar = 0;
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        // if (this.state.error) {
        //     return <ErrorMessage/>
        // }

        const { item, loading, error } = this.state;
        
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={item} children={this.props.children}/> : null;

        if (!this.state.item) {
            return <SpanStyled>Please select a character</SpanStyled>
        }

        return (
            <DivStyled className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </DivStyled>
        )

        
    }
}

const View = ({item, children}) => {

    const {name, id} = item;
    return (
        <>
            <h4>{name} {id}</h4>
            <ul className="list-group list-group-flush">
                {/* так получаем КОМПОНЕНТ переданный из CharacterPage */}
                {
                    React.Children.map(children, (item) => {
                        return React.cloneElement(item, {item})
                    })
                }
            </ul>
        </>
    );
}