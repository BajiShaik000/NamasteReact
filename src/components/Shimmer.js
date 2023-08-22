import ShimmerCard from "./ShimmerCard";
import {shimmerArr } from "../utils/constants";

const Shimmer = () => {

    const arr = shimmerArr;

    return (
        <>
            <div className="shimmer-top">
                <div className="shimmer-filter  animate"></div>
                <div className="shimmer-search-container">
                    <div className="shimmer-search-input  animate"></div>
                    <div className="shimmer-search-btn  animate"></div>
                </div>
            </div>
            <div className="shimmer-container">
                {arr.map((item, index) => <ShimmerCard key={index} />)}
            </div>
        </>
    )
}



export default Shimmer;