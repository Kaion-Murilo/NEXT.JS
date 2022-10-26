import Navbar from "./Navbar";
import footer from "./footer";
export default function MainConteiner({children}){
    return(
        <>
            <Navbar />
            <div>{children}</div>
            <footer/>
        </>
    )
}