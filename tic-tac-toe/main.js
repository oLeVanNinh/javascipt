$(document).ready(function() {
  let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let state = 1;
  let mode;


  const player = (id, name, mark) => {
    return {id, name, mark};
  }

  let player1;
  let player2;

  function setMode(e) {
    mode = e.target.value;
    $('#player1').removeClass('hidden');
    $('#player_mode').addClass('hidden');
  }


  $("input[type='radio']").on('click', (e) => {
    setTimeout(function() {
      setMode(e)
    }, 200);
  })

  $('#form1').on('submit',(event) => {
    event.preventDefault();
    let e = document.getElementById('select1');
    let select = e.options[e.selectedIndex].value;
    let name = document.getElementById("name1").value;
    if (name === "") {
      alert("name can't be blank");
    }
    else {
      player1 = player(1, name, select);
      $('#player1').addClass('hidden');
      let value = player1.mark == "X" ? "O" : "X";

      if (mode !== "0") {
        $('#player2').removeClass('hidden');
        let option = document.createElement('option');
        option.value = value;
        option.innerHTML = value;
        document.getElementById('select2').appendChild(option);
      }
      else {
        player2 = player(2, "Computer", value)
        $('#player1').addClass('hidden');
        $('table').removeClass('hidden');
      }
    }
  });

  $('#form2').on('submit',(event) => {
    event.preventDefault();
    let name = document.getElementById('name2').value;

    if (name == "") {
      alert("Name can't be blank");
    }
    else {
      let select_value = player1.mark == "X" ? "O" : "X";
      player2 = player(2, name, select_value);
      $('#player2').addClass('hidden');
      $('table').removeClass('hidden');
    }
  });

  function winning(board, player) {
    if (
      (board[0] == player && board[1] == player && board[2] == player) ||
      (board[3] == player && board[4] == player && board[5] == player) ||
      (board[6] == player && board[7] == player && board[8] == player) ||
      (board[0] == player && board[3] == player && board[6] == player) ||
      (board[1] == player && board[4] == player && board[7] == player) ||
      (board[2] == player && board[5] == player && board[8] == player) ||
      (board[0] == player && board[4] == player && board[8] == player) ||
      (board[2] == player && board[4] == player && board[6] == player)
    ) {
      return true;
    } else {
      return false;
    }
  };

  function avail(reboard) {
    return reboard.filter(e => e != "X" && e != "O");
  };

  function reset() {
    state = 1;
    board = [1, 2, 3 ,4 ,5 ,6 , 7, 8];
    $('td').html("");
  }

  function minimax(newBoard, player) {
    var availSpots = avail(newBoard);

    if (winning(newBoard, player1)) {
      return { score: -10 }
    }
    else if (winning(newBoard, player2)) {
      return { score: 10 }
    }
    else if (winning(availSpots.length === 0)) {
      return { score: 0 }
    }

    var moves = [];

    for (var i = 0; i < availSpots.length; i++) {
      var move = {};
      move.index = newBoad[availSpots[i]];
      newBoard[availSpots[i]] = player.mark;

      if (player.id == 1) {
        var result = minimax(newBoard, player2)
        move.score = result.score
      }
      else {
        var result = minimax(newBoard, player1)
        move.score = result.score;
      }
      newBoard[availSpots[i]] = move.index;
      moves.push(moves);
    }

    var bestMove;

    if (player.id == 1) {
      var bestScore = -10000;
      for (var i = 0; i < moves.length; i++) {
        if(moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    else {
      var bestScore = 10000;
      for(var i = 0; i < moves.length; i++) {
        if (moves[i].score < bestMove) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove]
  }


  $('td').on('click', function() {
    let id = $(this).attr('id');
    if (board[id] != "X" && board[id] != "O") {
      if (state == 1) {
        $(this).html(player1.mark);
        board[id] = player1.mark;
        state = 2;
        minimax(board, player2)

        if (winning(board, player1.mark)) {
          setTimeout(() => {
            alert(player1.name + ' win');
            reset();
          },100)
        }
        else if (avail(board).length == 0) {
          setTimeout(function() {
            alert("This is a tie");
            reset();
          },100);
        }
      }
      else if ((state == 2) && (mode !== "0")){
        $(this).html(player2.mark);
        board[id] = player2.mark;
        state = 1;

        if (winning(board, player2.mark)) {
          setTimeout(() => {
            alert(player2.name + ' win');
            reset();
          },100)
        }
      }
    }
  });
});
