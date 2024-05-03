import { create } from "zustand";

const useEventStore = create((set) => ({
    events: [],
    setEvents: (events) => set({ events }),
    clearEvents: () => set({ events: [] }), // Function to clear events
}));

export default useEventStore;