import "./mainSection.css"

function MainSection({ mainTitle, children }) {
    return (
        <section className="container">
            <h1 className="title">{mainTitle}</h1>
            {children} {/* Lägg till denna rad för att rendera barnkomponenter */}
        </section>
    )
}

export default MainSection
