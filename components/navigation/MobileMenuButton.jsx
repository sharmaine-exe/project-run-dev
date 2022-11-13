function MobileMenuButton({className, ...props}) {
    return (
        <button
            type="button"
            className= {`${className} inline-flex items-center p-2 ml-3 text-sm text-red-500 rounded-lg    hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-red-500 dark:hover:bg-red-50         dark:focus:ring-gray-600`} 
            aria-controls="navbar-default"
            aria-expanded="false"
        >
            <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                ></path>
            </svg>
        </button>
        );
}

export default MobileMenuButton;