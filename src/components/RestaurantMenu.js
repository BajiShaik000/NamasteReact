import { useState, useEffect } from 'react';
import { swiggy_resmenu_api_URL, swiggy_menu_img_url } from '../utils/constants';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestarauntMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchResMenu()
    }, [])

    const fetchResMenu = async () => {
        const data = await fetch(swiggy_resmenu_api_URL + resId);
        const json = await data.json()

        setResInfo(json?.data?.cards[0]?.card?.card?.info);
        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        console.log(json?.data)
    }

    const MenuCard = ({ item }) => {
        const {itemAttribute,isBestseller,name,price,defaultPrice,imageId} = item?.card?.info;
        return (
            <div className='menu-container'>
                <div className='menu-content'>
                    <div className='menu-top'>
                        <span>{(itemAttribute?.vegClassifier !== 'VEG') ? 
                        <div className='square' style={{border: '1px solid red'}}><div className='circle-red'></div></div> :
                         <div className='square' style={{border: '1px solid green'}}><div className='circle-green'></div></div>}</span>
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


    if (resInfo === null) {
        return <Shimmer />
    }
    else {
        const { name, cuisines, costForTwoMessage } = resInfo;
        const { itemCards } = resMenu;

        return (
            <div className="res-menu">
                <h1 style={{ textAlign: "center" }}>{name}</h1>
                <p style={{ textAlign: "center" }}>{cuisines.join(",")}</p>
                <h2>Menu</h2>
                <ul>
                    {itemCards.map((item) => <MenuCard key={item?.card?.info?.id} item={item} />)}
                </ul>
            </div>
        )
    }
}

export default RestarauntMenu;