const arr = [0,0,0,0,0,0,0,0,0];

const Shimmer = () => {
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
                {arr.map((item,index) => <ShimmerCard key={index}/>)}
            </div>
        </>
    )
}

const ShimmerCard = () => {
    return (
        <div className="shimmer-card">
            <div className="shimmer-img  animate"></div>
            <div className="shimmer-name  animate"></div>
            <div className="shimmer-cusine  animate"></div>
            <div className="shimmer-footer">
                <div className="shimmer-rating  animate"></div>
                <div className="shimmer-distance  animate"></div>
                <div className="shimmer-cost  animate"></div>
            </div>
        </div>
    )
}

export default Shimmer;