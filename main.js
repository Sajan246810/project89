var player1_name,player2_name;
function update_players(){
    player1_name = document.getElementById("player_1_name_input").value ; 
    player2_name = document.getElementById("player_2_name_input").value ; 
    localStorage.setItem("player 1 :", player1_name);
    localStorage.setItem("player 2 :", player2_name);
}