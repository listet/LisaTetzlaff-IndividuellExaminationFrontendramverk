import "./mainSection.css"

function MainSection({ mainTitle, children }) {

    //Formar en enhetlig design 
    return (
        <section className="container">
            <h1 className="title">{mainTitle}</h1>
            {/* renderar barnkomponenter i MainSection */}
            {children}
        </section>
    )
}

export default MainSection
