import React ,{useContext,Fragment} from 'react'

import { GalleryContextApi } from './../ContextApi/Gallery';
import ListOfGallery from './ListOfGallery';


const GalleryComponent = () => {
    let GalleryData=useContext(GalleryContextApi)
    return (
        <Fragment>
            {GalleryData.map(e => {
                console.log(e);
                return <ListOfGallery keys={e.id}{...e}/>
            })}
        </Fragment>
    )
}

export default GalleryComponent
