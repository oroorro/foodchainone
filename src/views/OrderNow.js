import GoogleMapReact from 'google-map-react';

export default function OrderNow(){
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 27.01502627
      },
      zoom: 11
    };


    const tempsty = {

        position: 'absolute',
        width: 40,
        height: 40,
        left: -40 / 2,
        top: -40 / 2,

        border: '5px solid #f44336',
        borderRadius: '5px',
        backgroundColor: 'white',
        textAlign: 'center',
        color: '#3f51b5',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 4
    }
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB74UFHQFp_BRWdAuLvfo13IfmyqKusYyM" }}
          yesIWantToUseGoogleMapApiInternals
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
           <div lat={10.99835602} lng={27.01502627} text={'A'} style={tempsty}/>
        </GoogleMapReact>
      </div>
    );

}