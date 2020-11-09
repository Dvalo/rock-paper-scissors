function ComputerPick(props) {
    return (
        <div id="computer-pick" className="choices">
        <p class="mini-heading">Computer</p>
        <div className="choice-wrap">
            <div className="choice paper"><i className="fas fa-hand-paper"></i></div>
            <div className="choice scissors"><i className="fas fa-hand-scissors"></i></div>
            <div className="choice rock"><i className="fas fa-hand-rock"></i></div>
        </div>
        <p class="mini-choice">Pick: {props.computerPick} </p>
        </div>
    )
}

export default ComputerPick;