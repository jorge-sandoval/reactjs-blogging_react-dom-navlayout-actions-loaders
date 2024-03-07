import { ReactNode } from 'react';

export default function FormGroup({
  error,
  children,
}: {
  error: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className={`form-group ${error && 'error'}`}>
        {children}
        {error && <div className="error-message">{error}</div>}
      </div>
    </>
  );
}
