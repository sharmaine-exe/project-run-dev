import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-4 text-slate-600 font-bold ">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/frontend">Front End</Link>
            </li>
            <li>
                <Link href="/uiux">UI/UX</Link> 
            </li>
            <li>
                <Link href="/fullstack">Full Stack</Link> 
            </li>
            <li>
                <Link href="/backend">Back End</Link> 
            </li>
        </ul>
        );
}

export default NavBarLinks;