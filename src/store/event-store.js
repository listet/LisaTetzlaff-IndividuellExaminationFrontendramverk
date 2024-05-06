import { create } from "zustand";

const useEventStore = create((set) => ({
    events: [],
    price: 0,
    quantity: 0,
    orders: [],
    setEvents: (events) => set({ events }),
    setPrice: (price) => set({ price }),
    setQuantity: (quantity) => set({ quantity }),
    clearEvents: () => set({ events: [] }), // Function to clear events
    // Function to add an order to the store
    addOrder: (event, quantity) => set(state => ({
        orders: [...state.orders, { event, quantity }]
    })),
    clearOrders: () => set({ orders: [] })     // Function to clear orders from the store

}));

export default useEventStore;