import React, {
    Component
} from 'react';
import './wishlist.css';
import ProductCondensed from '../product-condensed/product-condensed';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WHISHLIST_CHANGED} from '../services/notification-service';
let ns = new NotificationService();
let ds = new DataService();
class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishList: []
        }
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }
    componentDidMount() {
        ns.addObserver(NOTIF_WHISHLIST_CHANGED, this, this.onWishListChanged);
    }
    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WHISHLIST_CHANGED);
    }
    onWishListChanged(newWishList) {
        this.setState({ wishList: newWishList });
    }
    createWishList = () => {
        const list = this.state.wishList.map((product) =>
            <ProductCondensed product={product} key={product._id} />
        );
        return (list);
    }
    render() {
        return (
            <div className="card-block">
                <h4 className="card-title">Wish List</h4>
                <ul className="list-group">
                    {this.createWishList()}
                </ul>
            </div>
        );
    }
}
export default WishList;