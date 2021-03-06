import React, {Component} from 'react';
// import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';



class BooksPage extends Component {

  gotService = new gotService();


  state = {
    error: false
  }

  // onItemSelected = (id) => {
  //   this.setState({
  //     selectedBook: id
  //   })
  // }

  componentDidCatch() {
    this.setState({
        error: true
    })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    // const itemList = (
      
    // )

    // const itemDetails = (
    //   <ItemDetails itemId={this.state.selectedBook} getItem={this.gotService.getBook}>
    //     {/* передаем компоненты */}
    //     <Field field='name' label='Name' /> 
    //     <Field field='numberOfPages' label='NumberOfPages' />
    //     <Field field='publisher' label='Publisher' />
    //     <Field field='released' label='Released' />
    //   </ItemDetails>
    // )

    return (
      // <RowBlock left={itemList} right={itemDetails}/>
      <ItemList 
          onItemSelected={(itemId) => {
            this.props.history.push(itemId)
          }}
          getData={this.gotService.getAllBooks}
          renderItem={({name, numberOfPages}) => `${name} ${numberOfPages}`}/>
    )
  }
}

export default withRouter(BooksPage);