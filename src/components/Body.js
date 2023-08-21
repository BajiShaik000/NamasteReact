import RestarauntCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';

const Body = () => {
    const [all, setAll] = useState(null);
    const [filterValue, setFilterValue] = useState(true);
    const [searchValue,setSearchValue] =useState(true);
    const [filtered, setFiltered] = useState(null);
    const [searchText, setSearchText] = useState("");

    const searchFn = (searchText, all) => {
        if (searchText === '') {
            return all;
        }
        else {
                const filteritems = all.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                return filteritems;
        }
            
    }

    const filterButtondisable = !searchValue ? {cursor:"none",backgroundColor:"grey"} : null;
    const searchButtondisable = (searchText === '' || filterValue === false) ? {cursor:"none",backgroundColor:"grey"}:null

    const fetchData = async () => {
        const result = await fetch(swiggy_api_URL)
        const json = await result.json()
        const resData = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setAll(resData);
        setFiltered(resData);
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!all) {
        return <Shimmer />
    }
    else {
        return (
            <>
                <div className="secondary-bar">
                    <button className="filter" disabled={!searchValue} style={filterButtondisable} onClick={() => {
                        setFilterValue(!filterValue);
                        (filterValue) ? (
                            setFiltered(all.filter(res => res.info.avgRating >= 4))
                        ) : setFiltered(all);
                        
                        

                    }}>{filterValue ? "Top Restaurants" : "All Restaraunts"}</button >
                    <div className="search">
                        <input type="text" className="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        <button  disabled={searchText === '' || filterValue === false} style={searchButtondisable} onClick={() => {
                            const searchData = searchFn(searchText, all);
                            if (searchText !== ''){
                                setSearchValue(!searchValue);
                            }
                            if (searchValue === true){
                                setFiltered(searchData);
                            }
                            else{
                                setFiltered(all);
                                setSearchText('');
                            }
                            
                        }}
                        >{searchValue ? "Search" : "Clear Search"}</button>
                    </div>
                </div>
                <div className='restaurant-list'>
                    {filtered.map((restaurant => {
                        return <Link key={restaurant?.info?.id} to={'/restaurant/' + restaurant?.info?.id} ><RestarauntCard {...restaurant?.info} /></Link>
                    }))}
                </div>
            </>
        )
    }

}
export default Body;