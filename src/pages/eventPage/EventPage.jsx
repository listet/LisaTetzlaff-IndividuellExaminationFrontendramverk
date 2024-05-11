import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store';
import Counter from '../../components/counter/Counter';
import './eventPage.css'

function EventPage() {

    //Hämtar det aktuella eventet från store (som bestäms av komponenten Event)
    const { event } = useEventStore((state) => ({
        event: state.event,
    }));

    return (
        <MainSection
            mainTitle={"Event"} >
            <article>
                {/* conditional rendering. (Om event finns...) Skickar även event som prop till counter*/}
                {event ? (
                    <article className='eventPage-container' >
                        <p className='eventPage-info'>You are about to score some tickets to</p>
                        <h2 className='eventPage-title'>{event.name}</h2>
                        <p className='eventPage-date'>{event.when.date} {event.when.from} - {event.when.to}</p>
                        <p className='eventPage-place'>@ {event.where}</p>
                        <Counter event={event} />
                    </article>
                ) : (
                    <p>Event not found</p>
                )}
            </article>
        </MainSection >
    )
}

export default EventPage
