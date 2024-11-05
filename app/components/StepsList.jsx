import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

function StepsList(props) {
    const category = props.category;
    const stepList = props.steps;

    // State to track the checked status for each step
    const [checkedSteps, setCheckedSteps] = useState(
        stepList.reduce((acc, step) => {
            acc[step.number] = false;
            return acc;
        }, {})
    );

    // Toggle function for checkbox
    const handleToggle = (stepNumber) => {
        setCheckedSteps(prevState => ({
            ...prevState,
            [stepNumber]: !prevState[stepNumber]
        }));
    };

    // Map over steps and render list items with checkboxes, instructions, and conditional images
    const listItems = stepList.map((step) => (
        <li key={step.number} className="mb-3" style={{
            textDecoration: checkedSteps[step.number] ? 'line-through' : 'none'
        }}>
            <div className='flex flex-col md:flex-row gap-2'>
                <div className="w-full">
                    <div className="flex flex-row items-center gap-3 text-lg">
                        <Checkbox
                            checked={checkedSteps[step.number]}
                            onChange={() => handleToggle(step.number)}
                            size="small"
                            sx={{ p: 0, zIndex: 1 }}
                        />
                        <strong>Step {step.number}</strong>
                    </div>
                    <div className="text-sm">{step.instruction}</div>
                </div>
                {/* Conditionally render image if step.imagePath is not an empty string */}
                {step.image != "" ? (
                    <div className="min-h-40 w-full">
                    <img 
                        src={step.image} 
                        alt="Recipe" 
                        className="w-full h-full object-cover max-h-40" 
                    />
                </div>
                ) : <div></div>}
            </div>
        </li>
    ));

    return (
        <>
            <div className="sticky top-24 md:top-12 bg-colour2 shadow-xl">
                <h2 className="m-4 text-colour5 font-bold text-2xl">{category}</h2>
            </div>
            <ol className="text-medium px-6">{listItems}</ol>
        </>
    );
}

export default StepsList;
