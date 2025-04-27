import { APIProvider, Map as GoogleMap, useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

const MyComponent = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    console.info(map.getZoom());
  }, [map]);

  return <></>;
};

export function App() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 35.654615441064365, lng: 139.72304033863742 }}
        defaultZoom={16}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
      <MyComponent />
    </APIProvider>
  );
}
