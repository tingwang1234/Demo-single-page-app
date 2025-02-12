import '@testing-library/jest-dom'
import { vi } from 'vitest';

// Mock HTMLCanvasElement.prototype.getContext
vi.stubGlobal('HTMLCanvasElement', class {
    getContext = vi.fn();
});
