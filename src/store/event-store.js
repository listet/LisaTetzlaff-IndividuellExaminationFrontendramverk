import { create } from "zustand";

//definierar ett antal properties och metoder för att uppdatera dessa properties
const useEventStore = create((set) => ({
    events: [],
    price: 0,
    orders: [],
    setEvents: (newEvents) => {
        const eventsQty = newEvents.map(event => ({
            ...event, qty: 0
        }));
        set({ events: eventsQty }) //cart:eventsQty?)
    },
    increaseQty: (name) => {
        set(state => ({
            events: state.events.map(event => {
                if (event.name === name) {
                    return { ...event, qty: event.qty + 1 };
                }
                return event;
            })
        }));
    },
    decreaseQty: (name) => {
        set(state => ({
            events: state.events.map(event => {
                if (event.name === name && event.qty > 0) {
                    return { ...event, qty: event.qty - 1 };
                }
                return event;
            })
        }));
    },
    setPrice: (price) => set({ price }),
    clearEvents: () => set({ events: [] }),

    addOrder: (event, quantity) => set(state => ({
        orders: [...state.orders, { event, quantity }]
    })),
    clearOrders: () => set({ orders: [] })
}));

export default useEventStore;

// addOrder: (newEvent, quantity) => set((state) => {
//     const existingOrderIndex = state.orders.findIndex(order => order.event.name === newEvent.name);
//     if (existingOrderIndex !== -1) {
//       // Om eventet redan finns, uppdatera endast quantity
//       const updatedOrders = state.orders.map((order, index) =>
//         index === existingOrderIndex ? { ...order, quantity: order.quantity + quantity } : order
//       );
//       return { orders: updatedOrders };
//     } else {
//       // Om eventet inte finns, lägg till det nya eventet
//       return { orders: [...state.orders, { event: newEvent, quantity }] };
//     }
//   }),
//   // andra states och funktioner
// }));