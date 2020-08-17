const area = document.getElementById('area')
const modalResult = document.getElementById('modal-result-wrapper')
const contentWrapper = document.getElementById('content')
const overlay = document.getElementById('overlay')
const btnClose = document.getElementById('btn-close')
let result = ''
let move = 0


area.addEventListener('click', e => {
    if (e.target.className === 'box') {
        if (e.target.innerHTML === '') {
            move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O'
            move++
            check()
        } else {}
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box')
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            result = 'крестики'
            prepareResult(result)
        } else if (
            boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O'
        ) {
            result = 'нолики'
            prepareResult(result)
        }
    }
    var contentCount = 0
    for (i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML == 'X' || boxes[i].innerHTML == 'O') {
            contentCount++
        }
    }
    if (contentCount == boxes.length) {
        result = 'ничья'
        prepareResult(result)
    }

}

const prepareResult = winner => {
    if (winner == 'ничья') {
        contentWrapper.innerHTML = 'Ничья!'
    }
    else {
        contentWrapper.innerHTML = `Победили ${winner}!`
    }
    modalResult.style.display = 'block'
}

const closeModal = () => {
    modalResult.style.display = 'none'
    location.reload()
}

btnClose.addEventListener('click', closeModal)
