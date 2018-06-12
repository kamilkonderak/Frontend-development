var move = {
    UP: 1,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 4,
    ARROW_UP: "ArrowUp",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
};

var player = document.getElementById("player");
player.style.top = 500 + "px";
player.style.left = 500 + "px";

var enemy = document.getElementById("enemy");
enemy.style.top = 100 + "px";
enemy.style.left = 100 + "px";

var refreshButton = document.getElementById("refresh");
Rx.Observable.fromEvent(refreshButton, 'click').subscribe(function (x) {location.reload();});

var gameOver = false;

function randomMove() {
    var x = Math.floor(Math.random() * 4 + 1);
    switch (x) {
        case 1:
            return move.UP;
        case 2:
            return move.RIGHT;
        case 3:
            return move.DOWN;
        case 4:
            return move.LEFT;
        default:
            break;
    }
}

function moveShape(x_dir, y_dir, shape) {
    var y = parseInt(shape.style.top);
    shape.style.top = (y + y_dir) + "px";
    var x = parseInt(shape.style.left);
    shape.style.left = (x + x_dir) + "px";
}

Rx.Observable
    .timer(0, 500)
    .map(function (x) {
        return randomMove()
    })
    .subscribe({
        next: function (x) {
            if (!gameOver) {
                var move_length = 20;
                switch (x) {
                    case move.UP : {
                        moveShape(0, -move_length, enemy);
                        break;
                    }
                    case move.DOWN : {
                        moveShape(0, move_length, enemy);
                        break;
                    }
                    case move.LEFT : {
                        moveShape(-move_length, 0, enemy);
                        break;
                    }
                    case move.RIGHT : {
                        moveShape(move_length, 0, enemy);
                        break;
                    }
                    default:
                        break;
                }
            }
        }
    });

var pressButton = Rx.Observable.fromEvent(document, 'keydown');pressButton.throttleTime(100).map(function (e) {return e.key;})
    .subscribe(
        function (key) {
            if (!gameOver) {
                var move_length = 20;
                switch (key) {
                    case move.ARROW_UP : {
                        moveShape(0, -move_length, player);
                        break;
                    }
                    case move.ARROW_DOWN : {
                        moveShape(0, move_length, player);
                        break;
                    }
                    case move.ARROW_LEFT : {
                        moveShape(-move_length, 0, player);
                        break;
                    }
                    case move.ARROW_RIGHT : {
                        moveShape(move_length, 0, player);
                        break;
                    }
                    default:
                        break;
                }
            }
        }
    );

Rx.Observable.timer(0, 10).subscribe(function (x) {gameOver = player.style.top === enemy.style.top && player.style.left === enemy.style.left;});
