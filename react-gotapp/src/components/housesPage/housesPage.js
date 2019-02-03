import React, {Component} from 'react';
// import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock'



export default class HousesPage extends Component {

  gotService = new gotService();


  state = {
    selectedHouse: null,
    error: false
  }

  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id
    })
  }

  componentDidCatch() {
    this.setState({
        error: true
    })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({name, region}) => `${name} ${region}`}/>
    )

    const itemDetails = (
      <ItemDetails itemId={this.state.selectedHouse} getItem={this.gotService.getHouse}>
        {/* передаем компоненты */}
        <Field field='name' label='Name' /> 
        <Field field='region' label='Region' />
        <Field field='words' label='Words' />
        <Field field='titles' label='Titles' />
        <Field field='overlord' label='Overlord' />
        <Field field='ancestralWeapons' label='AncestralWeapons' />
      </ItemDetails>
    )
    console.log(this.state.selectedHouse);

    return (
      <RowBlock left={itemList} right={itemDetails}/>
    )
  }
}