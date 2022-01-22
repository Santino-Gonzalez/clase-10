let round = 0
let userSequence = []
let machineSequence = []

function updateStatus(status, typeAlert){
    const $statusText = document.querySelector("#status")
        $statusText.innerText = status
        $statusText.className = typeAlert
}

function reset(){
    let round = 0
    let userSequence = []
    let machineSequence = []
}

function highlight($color){
    $color.style.opacity = 1
    setTimeout(function(){
        $color.style.opacity = 0.5
    }, 500)
}

function blockUserClick(){
    document.querySelectorAll(".color").forEach(function($colors){
        $colors.onclick = function(){
        }
    })
}

function unblockUserClick(){
    document.querySelectorAll(".color").forEach(function($colors){
        $colors.onclick = handleUserClicks
    })
}

function showMachineSequence(){
    blockUserClick()
    const $colors = document.querySelectorAll(".color")
    const machineColor = Math.floor(Math.random() * $colors.length)

    machineSequence.push($colors[machineColor])

    const userDelay = (machineSequence.length + 1) * 1000

    machineSequence.forEach(function($color, index) {
        const msDelay = (index + 1) * 1000;
        setTimeout(function() {
        highlight($color)
    }, msDelay)})

    setTimeout(function(){
        updateStatus("Ahora es tu turno de jugar. Suerte!", "alert alert-success")
        unblockUserClick()
    },userDelay)

    userSequence = []
    round++
    document.querySelector("#rounds").innerText = `Ronda Nº ${round}`
}

function lose(){
    updateStatus(`Has perdido! Toca "Empezar" para jugar devuelta.`, "alert alert-danger")
}

function handleUserClicks(e){
    const $color = e.target
    console.log($color)
    highlight($color)
    userSequence.push($color)

    const $machineColor = machineSequence[userSequence.length - 1]

    if($color.id !== $machineColor.id){
        lose()
        return
    }

     if($color.length === $machineColor){
        setTimeout(function(){
            blockUserClick()
            handleRound
        }, 1000)
    }
}

function handleRound(){
    updateStatus("Atencion! Es el turno de la maquina.", "alert alert-warning")
    showMachineSequence()
}

function startGame(){
    reset()
    handleRound()
}

document.querySelector("#start-button").onclick = function(){
    startGame()
}
