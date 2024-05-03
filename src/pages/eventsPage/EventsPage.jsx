import './eventsPage.css'
import MainSection from '../../components/mainSection/MainSection'
import Searchbar from '../../components/searchbar/Searchbar'
import Event from '../../components/event/Event'
import useEventStore from '../../store/event-store'



function EventsPage() {

    const events = useEventStore((state) => state.events);

    return (
        <>
            <MainSection
                mainTitle={"Events"}
            >
                <Searchbar />
                <section className='events'>
                    {events.map((event, index) => (
                        <Event
                            key={index}
                            data={event} />
                    ))}
                </section>
            </MainSection>
        </>
    )
}

export default EventsPage
