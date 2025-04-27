import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const mockRender = vi.fn();
const mockCreateRoot = vi.fn(() => ({
  render: mockRender,
}));

vi.mock('react-dom/client', () => ({
  createRoot: mockCreateRoot,
  default: {
    createRoot: mockCreateRoot,
  },
}));

vi.mock('../App', () => ({
  App: vi.fn(() => null),
}));

describe('main.tsx', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
    vi.resetModules();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
  });

  it('should render App component in root element', async () => {
    await import('./main');

    expect(container).not.toBeNull();
    expect(mockCreateRoot).toHaveBeenCalledWith(container);
    expect(mockRender).toHaveBeenCalled();
  });

  it('should throw error when root element is not found', async () => {
    document.body.innerHTML = '';

    await expect(import('./main')).rejects.toThrow(
      'Failed to find the root element',
    );
  });
});
