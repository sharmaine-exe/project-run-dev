import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-4 text-slate-600 font-medium">
            <li className="hover:text-red-500">
                <Link href="/">Home</Link>
            </li>
            <li className="hover:text-red-500">
                <Link href="/frontend">Front End</Link>
            </li>
            <li className="hover:text-red-500">
                <Link href="/uiux">UI/UX</Link> 
            </li>
            <li className="hover:text-red-500">
                <Link href="/fullstack">Full Stack</Link> 
            </li>
            <li className="hover:text-red-500">
                <Link href="/backend">Back End</Link> 
            </li>
        </ul>
        );
}

export default NavBarLinks;