import { swiggy_resmenu_api_URL, swiggy_menu_img_url } from '../utils/constants';

const MenuCard = ({ item }) => {
    const { itemAttribute, isBestseller, name, price, defaultPrice, imageId } = item?.card?.info;
    return (
        <div className='menu-container'>
            <div className='menu-content'>
                <div className='menu-top'>
                    <span>
                        {(itemAttribute?.vegClassifier !== 'VEG') ?
                            <div className='square' style={{ border: '1px solid red' }}>
                                <div className='circle-red'></div>
                            </div> :
                            <div className='square' style={{ border: '1px solid green' }}>
                                <div className='circle-green'></div>
                            </div>}
                    </span>
                    <span className='best'>{isBestseller ? "⭐ Bestseller" : ""}</span>
                </div>
                <br />
                <h3>{name}</h3>
                <br />
                <h5>₹ {price / 100 || defaultPrice / 100}</h5>
            </div>
            <div className='menu-img'>
                <img src={swiggy_menu_img_url + imageId} alt='menu-image' />
            </div>
        </div>
    )
}

export default MenuCard;