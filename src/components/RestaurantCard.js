import { IMAGE_CDN } from "../utils/constants";

const RestarauntCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    sla,
    avgRating,
    costForTwo
}) => {
    return (
        <div className='card'>
            <img
                src={
                    IMAGE_CDN +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <span>
                <h4 style={(avgRating < 4) ? {backgroundColor:"red"}:null}>☆  {avgRating}</h4>
                <h4>{sla.lastMileTravelString}</h4>
                <h4>{costForTwo}</h4>
            </span>
        </div>
    )
}

export default RestarauntCard;