import { create } from "zustand";

const useEventStore = create((set) => ({
    events: [],
    price: 0,
    setEvents: (events) => set({ events }),
    setPrice: (price) => set({ price }),
    clearEvents: () => set({ events: [] }), // Function to clear events
}));

export default useEventStore;