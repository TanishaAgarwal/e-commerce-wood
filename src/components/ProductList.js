import React, { Component } from 'react'
import Product from './Product';
import {ProductConsumer} from '../context'
import Title from './Title'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                            <Title name="OUR" title="PRODUCTS" />
                            <div className="row">
                                <ProductConsumer>
                                    {
                                        value => {
                                            // console.log(value)
                                            return value.products.map(product => {
                                                return <Product key={product.id} product={product}/>
                                            })
                                        }
                                    }
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
