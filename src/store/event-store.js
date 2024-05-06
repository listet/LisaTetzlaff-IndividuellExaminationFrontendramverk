import { create } from "zustand";

const saveOrders = (orders) => {
    sessionStorage.setItem('orders', JSON.stringify(orders));
};

const loadOrders = () => {
    const savedOrders = sessionStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
};

const useEventStore = create((set) => ({
    events: [],
    price: 0,
    quantity: 0,
    orders: loadOrders(),
    setEvents: (newEvents) => set({ events: newEvents }),
    setPrice: (price) => set({ price }),
    setQuantity: (quantity) => set({ quantity }),
    clearEvents: () => set({ events: [] }),
    addOrder: (event, quantity) => set(state => {
        const newOrders = [...state.orders, { event, quantity }];
        saveOrders(newOrders);
        return { orders: newOrders };
    }),
    clearOrders: () => {
        saveOrders([]);
        return set({ orders: [] });
    }
}));

export default useEventStore;