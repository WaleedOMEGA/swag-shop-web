import NotificationService, {
    NOTIF_WHISHLIST_CHANGED
} from './notification-service';
let ns = new NotificationService();

var wishList = [];
let instance = null;
class DataService{
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }
    addWishListItem = item => {
        wishList.push(item);
        ns.postNotification(NOTIF_WHISHLIST_CHANGED,wishList);
    }
    
    removeWishListItem = item => {
        for (var x=0; x < wishList.length; x++){
            if (wishList[x]._id === item._id) {
                wishList.splice(x, 1);
                ns.postNotification(NOTIF_WHISHLIST_CHANGED,wishList);
                break;
            }
        }
    }
    itemOnWishList = item => {
        for (var x = 0; x < wishList.length; x++){
            if (wishList[x]._id === item._id) {
                return true;
            }
        }
        return false;
    }
}
export default DataService;