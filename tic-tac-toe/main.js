$(document).ready(function() {
  let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let state = 1;
  let mode;
  var iter = 0;


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
    console.log(reboard);
    return reboard.filter(e => e != "X" && e != "O");
  };

  function reset() {
    state = 1;
    board = [1, 2, 3 ,4 ,5 ,6 , 7, 8];
    $('td').html("");
  }

  function return_score(board, reboard) {
    if (winning(board, player1.mark)) {
      return { score: -10 };
    }
    else if (winning(board, player2.mark)) {
      return { score: 10 };
    }
    else if (reboard.length === 0) {
      return { score: 0};
    }
  }

  function minimax(reboard, player) {
    iter++;
    let array = avail(reboard);
    if (winning(reboard, player1.mark)) {
      return {
        score: -10
      };
    } else if (winning(reboard, player2.mark)) {
      return {
        score: 10
      };
    } else if (array.length === 0) {
      return {
        score: 0
      };
    }

    var moves = [];
    for (var i = 0; i < array.length; i++) {
      var move = {};
      move.index = reboard[array[i]];
      reboard[array[i]] = player.mark;

      if (player.id == 1) {
        var g = minimax(reboard, player2);
        move.score = g.score;
      } else {
        var g = minimax(reboard, player1);
        move.score = g.score;
      }
      reboard[array[i]] = move.index;
      moves.push(move);
    }

    var bestMove;
    if (player.id === 2) {
      var bestScore = -10000;
      for (var i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      var bestScore = 10000;
      for (var i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  }


  $('td').on('click', function() {
    let id = $(this).attr('id');
    if (board[id] != "X" && board[id] != "O") {
      if (state == 1) {
        $(this).html(player1.mark);
        board[id] = player1.mark;
        state = 2;

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
        if ( mode == "0") {
          let target = minimax(board, player2).index;
          $(`#${target}`).html(player2.mark);
          board[target] = player2.mark;
          state = 1;
          if (winning(board, player2.mark)) {
            setTimeout(() => {
              alert(player2.name + ' win');
              reset();
            },100)
          }
        }
      }
      else if (state == 2) {
        if ( mode !== "0" ) {
          $(this).html(player2.mark);
          board[id] = player2.mark;
          state = 1;
        }

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
