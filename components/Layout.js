import Nav from '../components/Nav'

const Layout = ({ children }) => {
    return (
        <div className="mx-auto min-h-screen">
            { children }
        </div>
    );
}
 
export default Layout;