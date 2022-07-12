
function Option(props) {

    return <button style={{ backgroundColor: props.bgColor }} onClick={() => props.handleClick(props.indx, props.activeState)}>{props.ans}</button>
}

export default Option