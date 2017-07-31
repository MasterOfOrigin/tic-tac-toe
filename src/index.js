function newGame() {
  this.player = 1
  this.grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
}


$(document).ready(function(){
  game = new NewGame()
  $(".square").click(function(something) {
    var row = Number(jQuery(this).children("p")[0].id[0])
    var col = Number(jQuery(this).children("p")[0].id[2])
    if (game.grid[row][col] === 0) {
      game.grid[row][col] = game.player
      if (game.player === 1) {
        $("#PlayerTurn").text("Player 2's Turn")
        jQuery(this).children("p").text("X")
        game.player = -1
      } else if (game.player === -1) {
        $("#PlayerTurn").text("Player 1's Turn")
        jQuery(this).children("p").text("O")
        game.player = 1
      }
      if (checkWinner() === 1) {
        $("#PlayerWin").text("Player 1 Wins!!!")
        setTimeout(() => {$("#PlayerWin").text("")
        game = new NewGame()
        }, 2000)
      } else if (checkWinner() === -1) {
        $("#PlayerWin").text("Player 2 Wins!!!")
        setTimeout(() => {
        $("#PlayerWin").text("")
        game = new NewGame()
        }, 2000)
      }
    }
  })

  function checkWinner() {
    console.log("In checkWinner")
    // row sum
    for (var row of game.grid) {
      var rowSum = 0
      for (var col of row) {
        rowSum += col
      }
      console.log("rowSum: ", rowSum, row)
      if (rowSum === 3) {
        return 1
      } else if (rowSum === -3) {
        return -1
      }
    }
    //col sum
    for (var col = 0; col < 3; col++) {
      var colSum = 0
      for (var row = 0; row < 3; row ++) {
        colSum += game.grid[row][col]
        if (colSum === 3) {
          return 1
        } else if (colSum === -3) {
          return -1
        }
      }
    }
    // diagonalSum
    var rightSum = 0
    var leftSum = 0
    for (var i = 0; i < 3; i++) {
      leftSum += game.grid[i][2-i]
      rightSum += game.grid[i][i]
      if (rightSum === 3 || leftSum === 3) {
        return 1
      } else if (rightSum === -3 || leftSum === -3) {
        return -1
      }
    }

    return 0
  }

})


function NewGame() {
  this.player = 1
  this.grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  $("p").text("")
  $("#PlayerTurn").text("Player 1's Turn")
}
