import LogoSvg from "../icons/LogoSvg";
import Link from "next/link";

function NavBarBranding({className, ...props}) {
    return ( 
        <figure>
            <Link href="/" className="flex items-center gap-2">
                <LogoSvg className="stroke-red-500 w-6" />
                <figcaption className="hover:text-red-500">
                    <h1>project run dev</h1>
                </figcaption>
            </Link>
        </figure>
    );
}

export default NavBarBranding;