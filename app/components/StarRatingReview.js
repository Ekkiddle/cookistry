// original code from: https://medium.com/@Vaibhavihole31/creating-a-star-rating-bar-in-reactjs-a3f66456d7bb 
import { useState } from "react";

function StarRatingReview({ rating, setRating }) {
    const [hoveredStar, setHoveredStar] = useState(0);
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => {
                return (
                    <span
                        key={star}
                        style={{
                            cursor: 'pointer',
                            // Edited colors and styling to match our website
                            color: hoveredStar >= star || rating >= star ? '#14213d' : 'gray',
                            fontSize: `17px`,
                        }}
                        onClick={() => {
                            setRating(star)
                        }}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
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