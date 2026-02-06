export default function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div>
            <h2>Something went Wrong</h2>
            <p>{error?.message}</p>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}