import Link from 'next/link';

const Index = () => (
    <div>
        <Link href="/about" >
            <a title="About page">About page</a>
        </Link>
        <p>Hello World!</p>
    </div>
);

export default Index;