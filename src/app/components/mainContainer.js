import Footer from "./footer";
import Navbar from "./navbar";

export default function MainContainer({children}) {

    return(<>
    
    <Navbar/>
    <div>
        {children}
    </div>

    <Footer/>
    
    
    </>)
}