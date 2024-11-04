function StepsList(props) {

    const category = props.category;
    const stepList = props.steps;
    
    const listItems = stepList.map(step =>
        <li key={step.number}>
            Step&nbsp;
            {step.number}:&nbsp;
            {step.instruction}</li>);

    return (<>
        <div className="text-xl font-bold mt-2">{category}</div>
        <ol className="text-medium">{listItems}</ol>
    </>);
}
export default StepsList