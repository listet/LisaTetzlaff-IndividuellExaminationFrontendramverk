
function TicketsSectionSeats(orders) {

    //Tom array för nya biljetter
    const newTickets = [];

    // Funktion för att få en random section
    const getRandomSection = () => {
        const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        const randomIndex = Math.floor(Math.random() * sections.length);
        return sections[randomIndex];
    };

    // Funktion för att få en random plats (om det är flera platser på samma event - platser bredvid varandra). 
    const getRandomSeats = (qty) => {
        const seats = [];
        const seatsPerSection = 30;
        const startSeat = Math.floor(Math.random() * (seatsPerSection - qty)) + 1;
        // Skapa en array med platser, börjar från startSeat och ökar med 1 för varje iteration.
        for (let i = 0; i < qty; i++) {
            seats.push(startSeat + i);
        }
        return seats;
    };

    // Genererar biljetter och unika ID´n för varje biljett
    orders.forEach(order => {
        const sections = {};
        for (let i = 0; i < order.qty; i++) {
            const eventId = order.eventId;
            if (!sections[eventId]) {
                // Kallar på funktionerna för section och seats
                sections[eventId] = {
                    section: getRandomSection(),
                    seats: getRandomSeats(order.qty)
                };
            }
            const { section, seats } = sections[eventId];
            //genererar unikt ID
            const ticketId = Math.random().toString(36).substr(2, 5).toUpperCase();
            //Går igenom seats och tilldelar seat
            const seat = seats.shift();
            // Ny biljett med id, section och seat
            newTickets.push({
                ...order,
                id: ticketId,
                section,
                seat
            });
        }
    });

    return newTickets;
};

export default TicketsSectionSeats;

