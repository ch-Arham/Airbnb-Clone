import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Maps = ({ searchResults }) => {

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  return (
    <Map
      mapboxAccessToken={process.env.MAPBOX_KEY}
      initialViewState={{
        width: "100%",
        height: "100%",
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      mapStyle="mapbox://styles/arhamkhawar248/cl07kg8mt000714rvcerp2hen"
    >
      {searchResults.map((item, index) => (
        <div key={index} >
       <Marker
          longitude={item.long}
          latitude={item.lat}
          offsetLeft={-20}
          offsetRight={-10}
          anchor="bottom"
        >
        </Marker>

        </div>

      ))}
    </Map>
  );
};

export default Maps;

