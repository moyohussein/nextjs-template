'use client';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <h2>Global Error: {error.message}</h2>
        <button onClick={reset}>Try Again</button>
      </body>
    </html>
  );
}
