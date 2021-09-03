import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import nasaIcon from '@iconify-icons/simple-icons/nasa';


const header = () => {
    return (
       <header className="header">
           <h1><Icon icon={locationIcon} /> Wildfire Tracker (Powered by <Icon icon={nasaIcon}/>) </h1>

       </header>
    )
}

export default header
