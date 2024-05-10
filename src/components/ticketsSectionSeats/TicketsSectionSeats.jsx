
function TicketsSectionSeats(orders) {

    const newTickets = [];

    // Function to get a random section
    const getRandomSection = () => {
        const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; // Example sections
        const randomIndex = Math.floor(Math.random() * sections.length);
        return sections[randomIndex];
    };

    // Function to get random seats
    const getRandomSeats = (qty) => {
        const seats = [];
        const seatsPerSection = 30; // Example number of seats per section
        const startSeat = Math.floor(Math.random() * (seatsPerSection - qty)) + 1; // Generate a random starting seat
        for (let i = 0; i < qty; i++) {
            seats.push(startSeat + i); // Push consecutive seats
        }
        return seats;
    };

    // Generate unique IDs for each ticket and create tickets based on quantity
    orders.forEach(order => {
        const sections = {}; // Track sections and available seats for each event
        for (let i = 0; i < order.qty; i++) {
            const eventId = order.eventId;
            if (!sections[eventId]) {
                // If no sections are generated for this event, generate one
                sections[eventId] = {
                    section: getRandomSection(),
                    seats: getRandomSeats(order.qty)
                };
            }
            const { section, seats } = sections[eventId];
            const ticketId = Math.random().toString(36).substr(2, 5).toUpperCase();
            const seat = seats.shift(); // Get the first available seat
            newTickets.push({
                ...order,
                id: ticketId,
                section,
                seat
            });
        }
    });

    return newTickets; // Return the generated tickets
};

export default TicketsSectionSeats;

