import React, { Component } from "react";
const ProductContext = React.createContext();

class ProductProvider extends Component {

  state = {
    isLogin: false,
  };
  
  toggleLogin = () => {
    
    this.setState({ isLogin: this.state.isLogin === true ? false : true });
    
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
