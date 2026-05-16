import React from 'react';

const SkillCard = ({skill}) => {
    const {skillName,image,category,slotsAvailable,description}=skill;
    return (
        <div>
            <div className="card bg-base-100 w-96  border-2">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{skillName}</h2>
                    <p>Category: <span className='font-bold'>{category}</span></p>
                    <p>Slots Available: <span className='font-bold'>{slotsAvailable}</span></p>

                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;