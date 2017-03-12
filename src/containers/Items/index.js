import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../../actions';
import './Items.css';

class Items extends Component{

    renderList = () => {
        const { items, addToCartAction } = this.props;
        return items.map((data) => (
            <li key={data.id} onClick={() => addToCartAction(data)}>
                <img alt="presentation" className={'Items-image'} src={data.link} />
                <span>{data.title}</span>
            </li>));
    }


    render() {
        return (
            <ul className={'Items-list'}>
                {this.renderList()}
            </ul>
        );
    }

}

const mapStateToProps = ({items}) => ({ items } );

const mapDispatchToProps = (dispatch) => ({
   addToCartAction : (item) => dispatch(addToCart(item))
});


export default connect(mapStateToProps, mapDispatchToProps)(Items);