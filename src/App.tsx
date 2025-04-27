import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps';

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
    </APIProvider>
  );
}
