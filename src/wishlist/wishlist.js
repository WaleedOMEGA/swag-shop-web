import React, {
    Component
} from 'react';
import './wishlist.css';
import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {
    render() {
        return (
            <div className="card-block">
                <h4 className="card-title">Wish List</h4>
                <ul className="list-group">
                </ul>
            </div>
        );
    }
}
export default WishList;