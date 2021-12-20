import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import { memo, useEffect, useState } from 'react'

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const icon = '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="56"><path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>'

// here's the trick, base64 encode the URL
const svgURL = "data:image/svg+xml;base64," + btoa(icon);

const markerIcon = new L.Icon({
  iconUrl: svgURL,
  iconSize: [40, 50],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});


function Map({ location, defaultPosition }) {
  const [map, setMap] = useState(null);

  function handleSetView() {
    if (map && location) {
      map.flyTo(location, 12, {
        duration: 4
      })
    }
  }

  useEffect(() => handleSetView, [location])

  return (
    <MapContainer 
    center={defaultPosition} 
    zoom={12} 
    zoomControl={false} 
    scrollWheelZoom={false} 
    style={{ height:'100%'}} 
    whenCreated={map => setMap(map)}>
      <CustomTileLayer
      />
      <Marker icon={markerIcon} position={location} />
    </MapContainer>
  )
}

export default memo(Map)
