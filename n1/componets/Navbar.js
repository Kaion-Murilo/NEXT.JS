import Link from "next/link"

export default function Navbar(){
    return(
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/products">
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