import { create } from "zustand";


//sparar i sessionStorage
const saveOrders = (orders) => {
    sessionStorage.setItem('orders', JSON.stringify(orders));
};

// Hämtar och returnerar data från sessionStorage
const loadOrders = () => {
    const savedOrders = sessionStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
};

//definierar ett antal properties och metoder för att uppdatera dessa properties
const useEventStore = create((set) => ({
    events: [],
    price: 0,
    quantity: 0,
    orders: loadOrders(),
    setEvents: (newEvents) => set({ events: newEvents }),
    setPrice: (price) => set({ price }),
    setQuantity: (quantity) => set({ quantity }),
    clearEvents: () => set({ events: [] }),
    //Lägger till en ny order i listan av orders, sparar den uppdaterade listan i sessionStorage med hjälp av saveOrders, och uppdaterar storen med den nya listan.
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