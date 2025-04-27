import { render } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { App } from './App';
import type { CSSProperties, ReactNode, RefObject } from 'react';

const mockGetZoom = vi.fn(() => 16);
const mockSetPosition = vi.fn();
let mapInstance: { getZoom: () => number } | null = null;
let markerInstance: { setPosition: (position: { lat: number, lng: number }) => void } | null = null;

// Mock the @vis.gl/react-google-maps components
vi.mock('@vis.gl/react-google-maps', () => ({
  APIProvider: ({ children }: { children: ReactNode }) => (
    <div data-testid="api-provider">{children}</div>
  ),
  Map: ({
    style,
    defaultCenter,
    defaultZoom,
    children,
  }: {
    style: CSSProperties;
    defaultCenter: { lat: number; lng: number };
    defaultZoom: number;
    children: ReactNode;
  }) => (
    <div data-testid="google-map" data-props={JSON.stringify({ style, defaultCenter, defaultZoom })}>
      {children}
    </div>
  ),
  Marker: ({ ref: _ref }: { ref: RefObject<unknown> }) => <div data-testid="marker" />,
  useMap: () => mapInstance,
  useMarkerRef: () => {
    const marker = markerInstance;
    return [null, marker];
  },
}));

// Mock environment variables
vi.mock('import.meta', () => ({
  env: {
    VITE_GOOGLE_MAP_API_KEY: 'test-api-key',
  },
}));

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mapInstance = { getZoom: mockGetZoom };
    markerInstance = { setPosition: mockSetPosition };
  });

  it('renders Google Maps components with correct props', () => {
    const { getByTestId } = render(<App />);

    // APIProviderが存在することを確認
    const apiProvider = getByTestId('api-provider');
    expect(apiProvider).toBeInTheDocument();

    // GoogleMapが正しいプロパティでレンダリングされていることを確認
    const googleMap = getByTestId('google-map');
    const props = JSON.parse(googleMap.dataset.props || '{}');
    
    expect(props.style).toEqual({ width: '100vw', height: '100vh' });
    expect(props.defaultCenter).toEqual({
      lat: 35.654615441064365,
      lng: 139.72304033863742,
    });
    expect(props.defaultZoom).toBe(16);

    // Markerが存在することを確認
    const marker = getByTestId('marker');
    expect(marker).toBeInTheDocument();
  });

  it('sets marker position when marker is available', () => {
    render(<App />);
    
    expect(mockSetPosition).toHaveBeenCalledWith({
      lat: 35.6546154410643,
      lng: 139.723040338637,
    });
  });

  it('does not set marker position when marker is null', () => {
    markerInstance = null;
    render(<App />);
    
    expect(mockSetPosition).not.toHaveBeenCalled();
  });

  it('calls getZoom when map is available', () => {
    render(<App />);
    
    expect(mockGetZoom).toHaveBeenCalled();
  });

  it('does not call getZoom when map is null', () => {
    mapInstance = null;
    render(<App />);
    
    expect(mockGetZoom).not.toHaveBeenCalled();
  });
});
