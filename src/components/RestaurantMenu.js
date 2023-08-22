import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import MenuCard from './MenuCard';
import {useRestMenu} from '../utils/useRestMenu';

const RestarauntMenu = () => {

    const { resId } = useParams();

    const [resInfo, resMenu] = useRestMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }
    else {
        const { name, cuisines } = resInfo;
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