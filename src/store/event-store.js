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
        set({ events: eventsQty }) //cart:eventsQty?)
    },
    setEvent: (newEvent) => {
        set({ event: newEvent })
    },
    setOrders: (newOrder) => set({ orders: newOrder }),
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
            // addOrder: (event, quantity) => set(state => {
            //     console.log(event)
            //     const existingOrder = state.orders.find(order => order.event.name === event.name);
            //     if (existingOrder) {
            //         console.log(state.orders)
            //         // Om eventet redan finns, uppdatera endast quantity
            //         const updatedOrders = state.orders.map(order =>
            //             order.event.name === event.name ? { ...order, quantity: order.quantity + quantity } : order
            //         );
            //         return { orders: updatedOrders };
            //     } else {
            //         // Om eventet inte finns, lägg till det nya eventet
            //         return { orders: [...state.orders, { event, quantity }] };
            //     }
            // }),
        }));
    },
    setPrice: (price) => set({ price }),
    clearEvents: () => set({ events: [] }),
    clearOrders: () => set({ orders: [] }),
}));

export default useEventStore;

// addOrder: (event, quantity) => set(state => ({
//     orders: [...state.orders, { event, quantity }]
// })),