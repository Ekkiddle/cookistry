// original code from: https://medium.com/@Vaibhavihole31/creating-a-star-rating-bar-in-reactjs-a3f66456d7bb 
import { useState } from "react";

function StarRatingReview({ rating, setRating, isLocked }) {

    // Added hover state and the handle click
    const [hoveredStar, setHoveredStar] = useState(0);
    
    const handleClick = (star) => {
        if (!isLocked) {
            setRating(star); // Only update rating if not locked
        }
    };

    const handleMouseEnter = (star) => {
        if (!isLocked) {
            setHoveredStar(star);
        }
    };

    const handleMouseLeave = () => {
        if (!isLocked) {
            setHoveredStar(0);
        }
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => {
                return (
                    <span
                        key={star}
                        style={{
                            // Added is locked function and not allowed-pointer if is locked
                            cursor: isLocked ? "not-allowed" : "pointer",
                            // Edited colors and styling to match our website
                            color: hoveredStar >= star || rating >= star ? '#14213d' : 'gray',
                            fontSize: `17px`,
                        }}
                        onClick={() => {setRating(star)}}
                        // added hover feature where stars change color when hovered on
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={() => handleMouseLeave}
                    >
                        {' '}
                        ★{' '}
                    </span>
                )
            })}
        </div>
    )
}

export default StarRatingReview;