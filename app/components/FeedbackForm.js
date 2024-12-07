import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import StarRatingReview from "./StarRatingReview";

function FeedbackForm() {

    const [rating, setRating] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const [isTextBoxVisible, setIsTextBoxVisible] = useState(true);
    const [isRatingConfrimatiomVisible, setRatingConfrimatiomVisible] = useState(false);
    const [ratingText, setRatingText] = useState("Rate this recipe: ")

    // sets the rating scale to locked if clicked
    const handleRating = (newRating) => {
        if (!isLocked) {
            setRating(newRating);
            setIsLocked(true);
            setRatingConfrimatiomVisible(true);
            setRatingText("Thank you for your rating!");
        }
    };

    // sets the rating stars to visible is undo is clicked
    const handleUndoRating = () => {
        setRating(0);
        setIsLocked(false);
        setRatingConfrimatiomVisible(false);
        setRatingText("Rate this recipe: ");
    };

    // sets the textfield to invisible when submit is clicked 
    const handleSubmit = () => {
        setIsTextBoxVisible(false);
    };

    return (
        <div className="pb-8 pt-2 mx-8 space-y-6 flex flex-col sm:justify-start">

            {/* Recipe rating from user */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 items-center sm:justify-start">
                {ratingText}<StarRatingReview rating={rating} setRating={handleRating} isLocked={isLocked}/>

                {/* Auto appears when rating set */}
                {isRatingConfrimatiomVisible && (
                    <a
                        href="#"
                        className="text-[#555555] text-xs sm:ml-2 italic hover:text-[#fca311] cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            handleUndoRating();
                        }}>
                        {"undo"}
                    </a>
                )}
            </div>

            {/* Textfield section */}
            {isTextBoxVisible && (
                <div className="flex flex-row flex-col items-center">

                    {/* Feedback prompt */}
                    <div className="mb-4 sm:flex sm:flex-row sm:justify-start sm:w-full">
                        {"Share your feedback with us: "}
                    </div>

                    {/* Textfield for user feedback  */}
                    <TextField
                        label="Enter your text"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Write your feedback here..."
                    />

                    {/* Submit button sets textfield visible to false */}
                    <div className="flex sm:flex-col-reverse sm:justify-start sm:w-full">
                        <Button
                            variant="contained"
                            className="w-28 mt-6 normal-case bg-[#14213d] text-white hover:bg-[#fca311] ml-auto"
                            onClick={handleSubmit}>
                            {"Submit"}
                        </Button>
                    </div>
                </div>
            )}

            {/* Auto appears when textfield disappears */}
            {!isTextBoxVisible && (
                <div className="#14213d font-semibold flex flex-col items-center sm:justify-start sm:w-full sm:flex-row">
                    {"Thank you for your feedback!"}
                </div>
            )}
        </div>
    );
}

export default FeedbackForm;