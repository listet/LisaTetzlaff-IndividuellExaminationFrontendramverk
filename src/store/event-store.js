import { create } from "zustand";

//Skapar en hook - useEventStore
const useEventStore = create((set) => ({
    // Initialisera tillståndet med standardvärden
    events: [],
    event: {},
    orders: [],
    price: 0,
    tickets: [],
    // Skapar metod för att sätta nya värden i sin store
    setEvents: (newEvents) => {
        //Lägger till egenskapen qty (quantity)
        const eventsQty = newEvents.map(event => ({
            ...event, qty: 0
        }));
        set({ events: eventsQty })
    },
    setEvent: (newEvent) => {
        set({ event: newEvent })
    },
    setOrders: (newOrders) => {
        set({ orders: newOrders })
    },
    setPrice: (price) => set({ price }),
    setTickets: (newTickets) => set({ tickets: newTickets }),
    clearEvents: () => set({ events: [] }),
    clearOrders: () => set({ orders: [] }),
}));

export default useEventStore;
