var d= [".",".",".",".",".",".",".",".",".",];

var a = 0,e=0;

function reply(id) {
    if(e==0){
    if(d[id-1] != "."){
        document.querySelector('.main').textContent = "Oops! ";
        document.querySelector('.main1').textContent = "You re-entered the same block"; 
    }
    else if(a%2 == 0){
        document.getElementById(id).innerHTML = 'o';
        document.querySelector('.main').textContent = "Player 2's(x) turn";
        document.querySelector('.main1').textContent = " ";
        d[id-1] = "o";
        a++;
        my2(1);
    } 
    else {
           document.getElementById(id).innerHTML = 'x';
           document.querySelector('.main').textContent = "Player 1's(o) turn";
           document.querySelector('.main1').textContent = " ";
           d[id-1] = "x";
           a++;
           my2(2);
    }
    if(a==9){
        my2(1);
        if(e!=1){
            document.querySelector('.main').textContent = "Tie! ,Game over ";
            document.querySelector('.main1').textContent = "Restart to play the next game"; 
            e =1;
        }
   }
    }
    else{
        document.querySelector('.main').textContent = "Game over ";
        document.querySelector('.main1').textContent = "Restart to play the next game"; 
    }
}
function my1(){
    location.reload(); 
}
function my2(q){
    if(d[0]==d[1] && d[1] == d[2] && d[1]!="."){
        e =1;console.log("vf");
    }
    else if(d[3]==d[4] && d[4] == d[5]&& d[3]!=(".")){
        e =1;
    }
    else if(d[6]==d[7] && d[7] == d[8]&& d[6]!=(".")){
        e =1;
    }
    else if(d[0]==d[3] && d[3] == d[6]&& d[0]!=(".")){
        e =1;
    }
    else if(d[1]==d[4] && d[4] == d[7]&& d[1]!=(".")){
        e =1 ;
    }
    else if(d[2]==d[5] && d[5] == d[8]&& d[2]!=(".")){
        e =1;
    }
    else if(d[0]==d[4] && d[4] == d[8]&& d[0]!=(".")){
        e =1;
    }
    else if(d[2]==d[4] && d[4] == d[6]&& d[2]!=(".")){
        e=1;
    }
    if(e==1){
        var s= "Player "
        s = s+q+" has won";
        document.querySelector('.main').textContent = s;
        document.querySelector('.main1').textContent = "Restart to play the next game"; 
    
    }
}
