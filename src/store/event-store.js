import { create } from "zustand";

const useEventStore = create((set) => ({
    events: [],
    setEvents: (events) => set({ events }),
    clearEvents: () => set({ events: [] }), // Function to clear events
    addEvent: (event) => set((state) => ({ events: [...state.events, event] })), // Function to add a single event
}));

export default useEventStore;