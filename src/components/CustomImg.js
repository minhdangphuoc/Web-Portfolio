import {useState} from 'react'
import LazyLoad from "react-lazy-load";
import LoadingSpinner from './loadingSpinner'
const CustomImg = (props) => {
    const [loaded, setLoaded] = useState(false);
    function onLoad () {
        setLoaded(true);
    }

    return(
        <>
            <div>
            <LazyLoad>
                <img style={loaded ? {} : {display: 'none'}} className="rounded-xl my-2 h-fit sm:max-w-[50vw] object-contain" src={props.src} onLoad={onLoad} alt={props.alt}/>
            </LazyLoad>
            {loaded===false&&<LoadingSpinner />}
            
                <p className="text-center mb-8">{props.description}</p>
            </div>
        </>
    );
}

export default CustomImg;

