import { create } from "zustand";

//definierar ett antal properties och metoder för att uppdatera dessa properties
const useEventStore = create((set) => ({
    events: [],
    event: {},
    price: 0,
    orders: [],
    setEvents: (newEvents) => {
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
    clearEvents: () => set({ events: [] }),
    clearOrders: () => set({ orders: [] }),
}));

export default useEventStore;
