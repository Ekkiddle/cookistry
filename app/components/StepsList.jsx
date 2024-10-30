function StepsList(props) {

    const category = props.category;
    const stepList = props.steps;
    
    const listItems = stepList.map(step =>
        <li key={step.number}>
            Step&nbsp;
            {step.number}:&nbsp;
            {step.instruction}</li>);

    return (<>
        <h3 className="medium-title">{category}</h3>
        <ol className="list-item">{listItems}</ol>
    </>);
}
export default StepsList