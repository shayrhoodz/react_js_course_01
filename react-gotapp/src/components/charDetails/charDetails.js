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

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    
    componentDidMount() {
        this.updateChar();
        // this.setState({
        //     loading: false
        // })
    }

    // принимает 2 аргумента prevProps и prevState
    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char,
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

        const { char, loading, error } = this.state;
        
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        if (!this.state.char) {
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

const View = ({char}) => {
    const {name, gender, born, died, culture, id} = char;
    return (
        <>
            <h4>{name} {id}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    );
}