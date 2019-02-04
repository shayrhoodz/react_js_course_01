import React, {Component} from 'react';
// import './randomChar.css';
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
    font-weight: bold;
`

export default class RandomChar extends Component {

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    // метод (хук) вызывается тогда когда уже вызван и render и constructor (когда элемент уже помещен на страницу)
    componentDidMount() {
        // console.log('mounting');
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    // вызывается когда элемент исчез со страницы (метод вызывается до того как сама дом структура будет удалена со страницы)
    componentWillUnmount() {
        // console.log('unmounting');
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        // console.log('update');
        const id = Math.floor(Math.random()*140 + 25); // 25 - 140 персонаж
        // const id = 130000;
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }
    
    render() {
        // console.log('render');
        
        // const {show} = this.props;
        // console.log(show);

        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <DivStyled className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </DivStyled>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <SpanStyled>Gender </SpanStyled>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <SpanStyled>Born </SpanStyled>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <SpanStyled>Died </SpanStyled>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <SpanStyled>Culture </SpanStyled>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}