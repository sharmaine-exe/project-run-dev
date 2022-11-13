import LogoSvg from "../icons/LogoSvg";

function NavBarBranding({className, ...props}) {
    return ( 
        <figure className="flex items-center gap-2">
            <LogoSvg className="stroke-red-500 w-6" />
            <figcaption>
                <h1>project run dev</h1>
            </figcaption>
        </figure>
    );
}

export default NavBarBranding;