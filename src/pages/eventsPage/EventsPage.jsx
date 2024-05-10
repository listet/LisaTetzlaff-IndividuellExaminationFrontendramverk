import MainSection from '../../components/mainSection/MainSection'
import Searchbar from '../../components/searchbar/Searchbar'
import Event from '../../components/event/Event'
import useEventStore from '../../store/event-store'



function EventsPage() {

    //Hämtar Events från store
    const events = useEventStore((state) => state.events);

    return (
        <>
            <MainSection mainTitle={"Events"} >
                <Searchbar />
                <section className='events'>
                    {/* Mappar igenom events - visar upp dem enligt event-komponenten (skickar key och data till eventet) */}
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
