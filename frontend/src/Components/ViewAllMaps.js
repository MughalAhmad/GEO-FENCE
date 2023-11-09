import { GoogleMap, LoadScript, OverlayView, Polygon } from '@react-google-maps/api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function ViewAllMaps() {

    const navigate = useNavigate()


    const [geoState,setGeoState] = useState()

    const ViewAllMaps = ()=>{
            axios.get('http://localhost:2000/api/viewAllMaps')
            .then(response=> {
               //console.log(response.data)
                let allGeoMaps = []

                response.data.map(maps=>
                    //console.log(maps.coordinates)
                    allGeoMaps.push({coordinates:JSON.parse(maps.coordinates )})
                )
                setGeoState(allGeoMaps)
                console.log("geoState",geoState)
            })
    }


    useEffect(() => {
        let unmounted = false
        setTimeout(() => {
          if (!unmounted) return ViewAllMaps()
        }, 50);
        return () => { unmounted = true }
      }, [])
    



  return (
    <div className="App">

    <h2>Total Maps : {geoState && geoState.length}</h2>

    <LoadScript
      id="script-loader"
      googleMapsApiKey='AIzaSyCxAmawrGigt-FggSYOLxq5woA02U-T4lA'
      language="en"
      region="us"
    >
          <GoogleMap
            mapContainerClassName='appmap'
            center={{lat:12.983379, lng:76.0660051}}
            zoom={12}
          >
            {
                geoState !== undefined
                ?
                geoState.map((cords,index)=>{
                    return(
                    <React.Fragment key={index}>
                    <Polygon
                        // key={index}
                        path={cords.coordinates}
                        options={{
                        fillColor:"grey",
                        strokeColor: "grey",
                        fillOpacity: 0.5,
                        strokeWeight: 2
                        }}
                    />
                    <OverlayView
                    position={cords.coordinates[0]}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div 
                        style={{
                            background:'#203254',
                            padding:'4px 4px',
                            fontSize:'8px',
                            color:'white',
                            borderradius:'10px'
                        }}>
                        {index+1}   
                        </div>
                    
                    </OverlayView>

                    </React.Fragment>

                    )
                }
                    
                )
               
              :
              null
            }
           

          </GoogleMap>

    </LoadScript>
<br/>
    <button onClick={()=>navigate("/")}>Go Back</button>
  </div>
  )
}
