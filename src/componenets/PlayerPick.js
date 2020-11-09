function PlayerPick(props) {

    function playerChoice(e) {
        if (!props.playerPick) {
        let elem = document.getElementsByClassName('choice active');
        if(elem.length > 0){
            elem[0].classList.remove('active');
        }
        let someElement = e.target;
        someElement.classList.add("active");
        props.setPick(e.target.dataset.name);
        props.setTime(3);
        }
    }

    return (
        <div id="player-pick" className="choices">
        <p class="mini-heading">Player</p>
        <div className={"choice-wrap " + (props.playerPick ? 'disabled' : 'enabled')}>
            <div className="choice paper" data-name="paper" onClick={playerChoice}><i className="fas fa-hand-paper"></i></div>
            <div className="choice scissors" data-name="scissors" onClick={playerChoice}><i className="fas fa-hand-scissors"></i></div>
            <div className="choice rock" data-name="rock" onClick={playerChoice}><i className="fas fa-hand-rock"></i></div>
        </div>
        <p class="mini-choice">Pick: {props.playerPick} </p>
        </div>
    )
}

export default PlayerPick;