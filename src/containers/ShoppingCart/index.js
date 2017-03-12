import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../actions';

class ShoppingCart extends Component {
    renderItem = (item) => {
        console.log(this.props);
        return (
                <li
                    key={item.id}
                    className={'Items-list-item'}
                    onClick={() => this.props.removeFromCartDispatch(item.id)}>
                    <img alt="presentation" src={item.link}  className={'Items-image'}/>
                </li>
            )
    }
    render() {
        const {shoppingCart} = this.props;
        return (
            <ul className={'Items-list'}>
                {shoppingCart.map(this.renderItem)}
            </ul>
        );
    }
}

const mapStateToProps = ({shoppingCart}) => ({shoppingCart});
const mapDispatchToProps = (dispatch) => ({
    removeFromCartDispatch: (id) => dispatch(removeFromCart(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);