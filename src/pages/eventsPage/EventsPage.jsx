import './eventsPage.css'
import MainSection from '../../components/mainSection/MainSection'
import Searchbar from '../../components/searchbar/Searchbar'
import FetchEvents from '../../components/fetchEvents/FetchEvents'

function EventsPage() {
    return (
        <>
            <MainSection
                mainTitle={"Events"}
            >
                <Searchbar />
                <FetchEvents />
            </MainSection>

            {/*API - events. komponent? */}
        </>
    )
}

export default EventsPage
