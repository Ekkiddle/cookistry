// original code from: https://medium.com/@Vaibhavihole31/creating-a-star-rating-bar-in-reactjs-a3f66456d7bb 
function StarRatingReview({ rating, setRating }) {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => {
                return (
                    <span
                        key={star}
                        style={{
                            cursor: 'pointer',
                            // Edited colors and styling to match our website
                            color: rating >= star ? '#14213d' : 'gray',
                            fontSize: `17px`,
                        }}
                        onClick={() => {
                            setRating(star)
                        }}
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