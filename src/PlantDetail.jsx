import React from 'react';


const PlantDetail = ({name,image,description,cost}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <img src={image} />
            </div>
            <h2>{cost}</h2>
        </div>
    )
}

export default PlantDetail;