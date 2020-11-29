import Nav from './Nav';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <>
            <Head>
                {/* Google Icon Font */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                {/* Materialize CSS */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
                {/* Materialize JS */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" defer/>
                <title>Intonation</title>
            </Head>
            <div className="container">
                <Nav/>
                {props.children}
            </div>
        </>
    );
};

export default Layout;