let moviesTickets = [
    {TicketNo:1, MovieName: "KGF", TheaterName: "Sathyam Cinemas", ShowTime: "11pm",Rating: 4.8},
    {TicketNo:2, MovieName: "RRR", TheaterName: "Ram Cinemas", ShowTime: "11am",Rating: 5},
    {TicketNo:3, MovieName: "VIKRAM", TheaterName: "Udhayam Cinemas", ShowTime: "2pm",Rating: 4.9},
    {TicketNo:4, MovieName: "LKG", TheaterName: "Escape Multiz", ShowTime: "5pm",Rating: 4.5},
    {TicketNo:5, MovieName: "PUSHPA", TheaterName: "Mayajaal Cinemas, ECR", ShowTime: "11pm",Rating: 4.0},
    
]


let buyTickets = [];


let clickToAvaliable = document.getElementById("btn1");


function checkTicketNo(){
    let a = parseInt(prompt("Give TicketNo:"));
   buyTicket = moviesTickets.find(find => find.TicketNo === a)
   var Qty = 1
   if(buyTicket){
    let easy = buyTickets.some(some => some.TicketNo === a);
    if(easy){
        buyTickets.find(find => find.Qty++);
    }else{
        buyTickets.push({...buyTicket,Qty:1});
    }
   }
  
console.log(buyTickets);

}
clickToAvaliable.addEventListener("click", checkTicketNo);


