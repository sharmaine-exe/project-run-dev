import Link from "next/link";

function LoginButton({className, ...props}) {
    return ( 
        <Link href="/login" className={`hidden ${className} w-[130px] hover:text-red-500`}>
            Log In
        </Link>

    );
}

export default LoginButton;