import Link from "next/link"
export default function Navbar(){
    return(
        <ul>
            <li>
                <Link href="/prducts">
                    <a>products</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>sobr nos</a>
                </Link>
            </li>
        </ul>
    )
}