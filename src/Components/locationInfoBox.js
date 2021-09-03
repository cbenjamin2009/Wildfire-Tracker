
const locationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>Fire ID: <strong>{info.id}</strong></li>
                <li>Fire Name: <strong>{info.title}</strong></li>
                <li>Date Recorded: <strong>{info.date}</strong></li>
            </ul>
        </div>
    )
}

export default locationInfoBox
