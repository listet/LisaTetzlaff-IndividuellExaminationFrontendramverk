import { create } from "zustand";

const useEventStore = create((set) => ({
    events: [],
    price: 0,
    quantity: 0,
    orders: [],
    setEvents: (newEvents) => set({ events: newEvents }),
    setPrice: (price) => set({ price }),
    setQuantity: (quantity) => set({ quantity }),
    clearEvents: () => set({ events: [] }), // Function to clear events
    addOrder: (event, quantity) => set(state => ({
        orders: [...state.orders, { event, quantity }]
    })),
    clearOrders: () => set({ orders: [] })     // Function to clear orders from the store
}));

export default useEventStore;