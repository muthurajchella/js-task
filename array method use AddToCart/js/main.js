let moviesTickets = [
    {TicketNo:1, MovieName: "KGF", TheaterName: "Sathyam Cinemas", ShowTime: "11pm",},
    {TicketNo:2, MovieName: "RRR", TheaterName: "Ram Cinemas", ShowTime: "11am",Rating: 5},
    {TicketNo:3, MovieName: "VIKRAM", TheaterName: "Udhayam Cinemas", ShowTime: "2pm",Rating: 4.9},
    {TicketNo:4, MovieName: "LKG", TheaterName: "Escape Multiz", ShowTime: "5pm",Rating: 4.5},
    {TicketNo:5, MovieName: "PUSHPA", TheaterName: "Mayajaal Cinemas, ECR", ShowTime: "11pm",Rating: 4.0},
    
]

let yourTickets = [];

let getBtn1 = document.getElementById("btn1");

function bookTicket(){
    let book = parseInt(prompt("Enter You'r Ticket Number"))
    let ticket = moviesTickets.find(function(item, index){
        return item.TicketNo === book;
    })
    if(ticket){
        let tickets = yourTickets.map(function(item, index){
            if(item.TicketNo == book){
                item.qty = item.qty+1;
                return item; 

            }
        })
    }
    ticket.qty = 1;
    yourTickets.push(ticket);
    console.log(yourTickets)
}

getBtn1.addEventListener("click", bookTicket);

