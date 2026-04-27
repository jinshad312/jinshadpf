import Link from 'next/link';

export const metadata = {
    title: '404 - Page Not Found | Muhammed Jinshad K',
};

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '4rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="btn btn-primary" style={{ display: 'inline-block' }}>
                Return Home
            </Link>
        </div>
    );
}
