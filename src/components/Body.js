import RestarauntCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [data, setData] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    const searchFn = (searchText,data) => {
        const filteritmes = data.filter((res) => 
        res.data.name.toLowerCase().includes(searchText.toLowerCase()))
        return filteritmes;
    }

    return (
        <>
            <div className="secondary-bar">
                <button className="filter" onClick={() => {
                    const filterData = data.filter(res => res.data.avgRating > 4);
                    setData(filterData);
                }}>Top Restaraunts</button >
                <div className="search">
                    <input type="text" className="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => {
                        const searchData = searchFn(searchText, data)
                        setData(searchData) 
                    }}
                    >Search</button>
                </div>
            </div>
            <div className='restaurant-list'>
                {data.map((restaurant => {
                    return <RestarauntCard key={restaurant.data.id} {...restaurant.data} />
                }))}
            </div>
        </>
    )
}

export default Body;