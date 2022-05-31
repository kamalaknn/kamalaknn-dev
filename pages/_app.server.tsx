import 'tailwindcss/tailwind.css'
import Header from '../components/Header.server'

function MyApp({ Component, pageProps }) {
    return (
        <Header>
            <Component {...pageProps} />
        </Header>
    );
}

export default MyApp
