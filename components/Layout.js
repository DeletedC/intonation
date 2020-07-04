import Nav from './Nav';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <>
            <Head>
            {/* Materialize */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
                <title>Intonation</title>
            </Head>
            <div>
                <Nav/>
                {props.children}
            </div>
        </>
    );
};

export default Layout;