const arr = [0,0,0,0,0,0,0,0,0];

const Shimmer = () => {
    return (
        <>
            <div className="shimmer-top">
                <div className="shimmer-filter"></div>
                <div className="shimmer-search-container">
                    <div className="shimmer-search-input"></div>
                    <div className="shimmer-search-btn"></div>
                </div>
            </div>
            <div className="shimmer-container">
                {arr.map((item) => <ShimmerCard/>)}
            </div>
        </>
    )
}

const ShimmerCard = () => {
    return (
        <div className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-name"></div>
            <div className="shimmer-cusine"></div>
            <div className="shimmer-footer">
                <div className="shimmer-rating"></div>
                <div className="shimmer-distance"></div>
                <div className="shimmer-cost"></div>
            </div>
        </div>
    )
}

export default Shimmer;