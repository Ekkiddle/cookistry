// original code from: https://medium.com/@Vaibhavihole31/creating-a-star-rating-bar-in-reactjs-a3f66456d7bb 
function StarRatingDisplay({ rating }) {
    return (
        <div>
            {/* Rating from 1-5 */}
            {[1, 2, 3, 4, 5].map((star) => {
                return (
                    <span
                    key={star}
                        className='star'
                        style={{
                            cursor: 'default',
                            // Edited colors and styling to match our website
                            color: rating >= star ? '#14213d' : 'gray',
                            fontSize: `17px`,
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

export default StarRatingDisplay;
