import {useState, useEffect} from 'react'
import Map from './Components/map'
import Loader from './Components/loader'
import Header from './Components/header'

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      // in the API we only care about the data within "events" section so using destructuring 
      // we can pull just the events into res.json() 
      const { events } = await res.json()

      //set event data to that destructured event data 
      setEventData(events)
      setLoading(false)

    }
    fetchEvents() 
  }, [])


  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
