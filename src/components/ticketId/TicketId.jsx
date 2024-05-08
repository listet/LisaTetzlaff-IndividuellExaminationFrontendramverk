import useEventStore from "../../store/event-store";

function TicketId() {

    const tickets = useEventStore(state => state.tickets);
    // const generateId = () => {
    //     return Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric string
    // };
    // const ticketsWithId = tickets.map(ticket => ({
    //     ...ticket,
    //     id: generateId() // Generate a unique ID for each ticket
    // }));
    // set({ tickets: ticketsWithId });

    // console.log(tickets)


    const getRandomSection = () => {
        // Implement your logic to get a random section
        const sections = ['A', 'B', 'C', 'D']; // Example sections
        const randomIndex = Math.floor(Math.random() * sections.length);
        return sections[randomIndex];
    };

    const getRandomSeats = (eventId, qty) => {
        // Implement your logic to get random seats
        // For simplicity, this example returns an array of consecutive seat numbers
        const seats = [];
        for (let i = 1; i <= qty; i++) {
            seats.push(i);
        }
        return seats;
    };


    return (
        <div>

        </div>
    )
}

export default TicketId
