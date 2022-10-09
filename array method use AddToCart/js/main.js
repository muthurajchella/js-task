let moviesTickets = [
    {TicketNo:1, MovieName: "KGF", TheaterName: "Sathyam Cinemas", ShowTime: "11pm"},
    {TicketNo:2, MovieName: "RRR", TheaterName: "Ram Cinemas", ShowTime: "11am"},
    {TicketNo:3, MovieName: "VIKRAM", TheaterName: "Udhayam Cinemas", ShowTime: "2pm"},
    {TicketNo:4, MovieName: "LKG", TheaterName: "Escape Multiz", ShowTime: "5pm"},
    {TicketNo:5, MovieName: "PUSHPA", TheaterName: "Mayajaal Cinemas, ECR", ShowTime: "11pm"},
    
]

let yourTickets = [];

let getBtn1 = document.getElementById("btn1");
let getBtn2 = document.getElementById("btn2");

function bookTicket(){
    let book = parseInt(prompt("Enter You'r Ticket Number"))
    let ticket = moviesTickets.find(function(item, index){
        return item.TicketNo === book;
    })
    if(ticket){
        let tickets = yourTickets.map(function(item, index){
            if(item.TicketNo == book){
                item.qty = +1;
                return item; 

            }
        })
    }else{
        alert("Please Enter Your Ticket Number")
    }
    ticket.qty = 1;
    yourTickets.push(ticket);
    console.log(yourTickets)
}

getBtn1.addEventListener("click", bookTicket);

function result(){
    // console.log("your Booking Tickets"+ yourTickets)
}
getBtn2.addEventListener("click", result)