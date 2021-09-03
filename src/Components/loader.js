import spinner from './loading.gif'
import {Icon} from '@iconify/react'
import nasaIcon from '@iconify-icons/simple-icons/nasa';

const loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading"/>
            <h1>Fetching Data from <Icon icon={nasaIcon}/></h1>
            
        </div>
    )
}

export default loader
