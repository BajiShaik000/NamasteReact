import { useState, useEffect } from 'react';
import { swiggy_resmenu_api_URL } from '../utils/constants';

export const useRestMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState(null);

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

    return [resInfo,resMenu]
}

export default useRestMenu;