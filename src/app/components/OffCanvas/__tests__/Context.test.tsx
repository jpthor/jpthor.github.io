import { renderHook, act } from '@testing-library/react';
import { OffcanvasProvider, AppContext } from '../Context';
import React from 'react';

function setup() {
  const wrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <OffcanvasProvider>{children}</OffcanvasProvider>
  );
  return renderHook(() => React.useContext(AppContext), { wrapper });
}

test('OffcanvasProvider toggles isOpen when handleOpen and handleClose called', () => {
  const { result } = setup();

  act(() => {
    result.current?.handleOpen?.();
  });
  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current?.handleClose?.();
  });
  expect(result.current.isOpen).toBe(false);
});
