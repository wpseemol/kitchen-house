import { Outlet } from 'react-router-dom';
import TopBarContactInfo from '../components/topBarContactInfo/TopBarContactInfo';
import NavBar from '../components/navBar/NavBar';

const Root = () => {
    return (
        <>
            <header className="font-myPoppinsFont">
                <TopBarContactInfo />
                <NavBar />
            </header>
            <main className="font-myPoppinsFont">
                <Outlet />
            </main>
            <footer className="font-myPoppinsFont">footer</footer>
        </>
    );
};

export default Root;
