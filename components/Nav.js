import Link from 'next/link';

const Nav = () => {
    return (
        <nav>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/teachers'}><a>Dashboard</a></Link>
        </nav>
    );
};

export default Nav;