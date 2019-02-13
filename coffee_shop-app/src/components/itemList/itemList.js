import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ItemList extends Component {

  state = {
    itemList: null,
    error: false
  }

  componentDidMount() {
      const {getData, name} = this.props;
      
      // this.gotService.getAllCharacters()
      getData()
          .then( (itemList) => {
              this.setState({
                  itemList,
                  name            
              })
          })
      console.log({name});
  }

  renderCoffee(arr) {
    const {name} = this.state;     
    return arr.map((item,i) => {
      return (
        <div key = {i} className="shop__item"
          onClick={() => this.onRenderCoffee(item, name)}>													
          <img src={item.url} alt={item.name}/>
          <div className="shop__item-title">
            {item.name}
          </div>
          <div className="shop__item-country">
            {item.country}
          </div>
          <div className="shop__item-price">
            {item.price}
          </div>        
        </div>
      )
    })
  }

  onRenderCoffee = (item, name) => {
    if(name !== 'coffeePage') {
      this.props.history.push(`/cofeePage/${item.name}`, item);
    }
  }

  render() {

    const {itemList} = this.state;

    console.log(itemList);
    
    if (!itemList) {
        return null
    }

    // if (error) {
    //     return <ErrorMessage/>
    // }

    const item = this.renderCoffee(itemList);       
    
    return (
      <>
        {item}
      </>
    );
}


}

export default withRouter(ItemList);