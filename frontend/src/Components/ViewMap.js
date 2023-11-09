import React from 'react'
import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api'

function ViewMap({points,setModalView,latitude,longitude}) {
  return (
    <div className="App">
          <LoadScript
            id="script-loader"
            googleMapsApiKey='AIzaSyCxAmawrGigt-FggSYOLxq5woA02U-T4lA'
            language="en"
            region="us"
          >
            {
              points.length > 1

                ?
                <GoogleMap
                  mapContainerClassName='appmap'
                  center={points[0]}
                  zoom={12}
                >
                  <Polygon
                    path={points}
                    options={{
                      fillColor: "grey",
                      strokeColor: '#2196F3',
                      fillOpacity: 0.5,
                      strokeWeight: 2
                    }}
                  />
              <Marker
                position={{ lat: Number(latitude), lng: Number(longitude) }}
              />
              
                </GoogleMap>
                :
                null
            }
             
          </LoadScript>
         

          <button onClick={() => setModalView(false)}>Close</button>
        </div>
  )
}

export default ViewMap