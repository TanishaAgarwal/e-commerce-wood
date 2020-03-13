import React, { Component } from 'react'
import { storeProducts, detailProduct } from './store';
import ls from 'local-storage'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct: detailProduct,
        cart:[],
    };

    componentDidMount(){
        this.setProducts();
    }

    setProducts = ()=>{
        let products = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            products = [...products, singleItem];
        });
        this.setState(()=>{
            return { products };
        });
    };

    getItem = (id) =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        // console.log("hello from details")
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product]};
        },()=>{console.log("hello cart");})
    }


    render() {
        return (
            <ProductContext.Provider value={{...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};