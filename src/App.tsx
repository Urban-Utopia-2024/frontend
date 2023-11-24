import { Outlet } from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
