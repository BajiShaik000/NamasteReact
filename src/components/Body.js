import RestarauntCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [all, setAll] = useState(null);
    const [filtered, setFiltered] = useState(null);
    const [searchText, setSearchText] = useState("");

    const searchFn = (searchText,all) => {
        if (searchText === ''){
            return all;
        }
        else{
            const filteritems = all.filter((res) => 
            res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
            return filteritems;
        }
    }

    const fetchData = async () => {
        const result = await fetch(swiggy_api_URL)
        const json = await result.json()
        const resData = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setAll(resData);
        setFiltered(resData);
    }

    useEffect(() => {
        fetchData()
    },[])

    if (!all){
        return <Shimmer/>
    }

    return (
        <>
            <div className="secondary-bar">
                <button className="filter" onClick={() => {
                    const filterData = all.filter(res => res.info.avgRating >= 4);
                    setFiltered(filterData);
                }}>Top Restaraunts</button >
                <div className="search">
                    <input type="text" className="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => {
                        const searchData = searchFn(searchText, all);
                        setFiltered(searchData);
                    }}
                    >Search</button>
                </div>
            </div>
            <div className='restaurant-list'>
                {filtered.map((restaurant => {
                    return <RestarauntCard key={restaurant.info.id} {...restaurant.info} />
                }))}
            </div>
        </>
    )
}

export default Body;