# Project Run Dev
This project aims to help a company hire the best developer.
It will be completed using Next.js and Tailwind CSS
## Next.js and Tailwind CSS Starter Kit
Starter files were provided by the instructor in class. 
### Part 1: Setting up the enviroment
*   Copy the starter files
*   Add the node_modules (`npm install` in powershell) 
*   Set up `.git-ignore`
*   Push the starter files to GitHub
### Part 2A: Project setup 
*   Modify the landing page for the project
    * new title and tagline
    * new favicon
    * check SEO
*   Create `_document.js` file inside the  `pages` folder to inject meta tags to the head of html and add: 
    ```jsx
    import Document, {Head, Html, Main, NextScript} from "next/document";

    class MyDocument extends Document {
        static async getInitialProps(context){
            const initialProps = await Document.getInitialProps(context);
            return { ...initialProps};
        }

        render(){
            return (
                <Html lang={this.props.locale}>
                    <Head>
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            );
        }
    }

    export default MyDocument;
    ```
*   Add to `next.config.js`:
    ```javascript
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    }
    ```
*   ```
    npm install  // node_modules
    npm run dev // not optimized
    npm run build // for production, page optimized
    npm run start // the production build (test for SEO)
*   Add a `<meta name="description" content="..."  />` to optimize more
*   Style index.js
### Part 2B: Assessment 1 submission: Header Component
*   Build the header component that accepts `props` to add dynamic title and dynamic tagline
    *  Create new folder `components` and add `page-heading`
        *   This will be the LandingPageHeader component
        *   `LandingPageHeader.jsx` to be exported to the main index page (`pages/index.js`) using `index.js` of LandingPageHeader.
        *   Style each markup through Tailwind CSS 
        *   Add custom image
        ```jsx
        import Image from "next/image"
        import bannerImage from './../../public/banner.svg'

        function LandingPageHeader({tagline, title, ...props}){
            return (
                <header className='text-center py-[5rem] px-5 bg-rose-100'>
                    <figure className="flex flex-col md:flex-row md:justify-center
                                        md:items-center xl:px-6">
                        <figcaption>
                            <h1 className='text-4xl text-red-500 lg:text-5xl xl:text-6xl'>{title}</h1>
                            <p className='text-lg xl:text-xl mt-2'>{tagline}</p>
                        </figcaption>
                        <Image
                            className="my-4 md:w-3/5"
                            src={bannerImage}
                            alt='project run dev'
                        />
                    </figure>
                    
                </header>
            )
        }

        export default LandingPageHeader'
        ```
### Part 2C: Adding Navigation (NavBar Component)
*   Build the navigation bar component that contains the logo, heading, and links for menu.
    *  Create new folder `navigation` 
        *   This will be the NavBar component
        *   `NavBar.jsx` to be exported to the main index page (`pages/index.js`) using `index.js` of NavBar.
        *   Styling each markup through Tailwind CSS 
        *   Add the custom logo svg (the favicon) as a React component
            *   Create `icons` folder under components
            *   `LogoSvg.jsx` to be exported to the NavBar component using `index.js` of LogoSvg.
                ```
                const LogoSvg = (props) => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 602 602"
                    {...props}
                >
                .
                .
                .
                ```
        * Add mobile menu button as component `MobileMenuButton.jsx` (inline svg) add export to NavBar
        * Move the `<figure>` and make it into a new component as `NavBarBranding` so it can be used across different pages
            ```jsx
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
            ```
        *   Navigation links will be in a component called `NavBarLinks.jsx` under `/navigation` folder
            *   Since this is single page app, instead of going to another page, it calls a function inside the `/pages` folder that has the same anchor and displays it. Say, this link from the `NavBarLinks.jsx`:

                ```jsx
                <li>
                    <Link href="/uiux">ui/ux</Link> 
                </li>
                ```
                can be accessed through `http://localhost:3000/uiux` and displays `uiux.jsx` from the `/pages` folder.
        *   Once the `NavBranding`, `NavBarLinks`, `MobileMenuButton` are added to the NavBar component, style according to viewport.
            *   On small viewport, links are hidden and the button is displayed. On medium viewports, the menu button is hidden and the the links are displayed horizontally.

                ```jsx
                function NavBarLinks() {
                    return ( 
                        <ul className=" hidden  md:flex gap-4 text-slate-600 font-bold ">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                ```

                ```jsx
                function NavBar() {
                    return ( 
                        <nav className="p-2 shadow relative flex justify-between items-center">
                            <NavBarBranding />
                            <NavBarLinks />
                            <MobileMenuButton className="md:hidden"/>
                        </nav>
                    );
                }
                ```
        *   Add a login button to the navigation as a new component, `LoginButton.jsx`
*   Add the NavBar as a default layout for all pages (`DefaultLayout.jsx` under a new folder in `/components/layouts` )
    *   Make sure to import `DefaultLayout` into the `pages/_app.js`
    *   Modify the DefaultLayout so it can accept children as components into the MyApp function.
        
        ```jsx
        import { NavBar } from "../navigation";

        function DefaultLayout({children, ...props}) {
            return ( 
                <>
                    <NavBar />
                    {children}
                </>
            );
        }

        export default DefaultLayout;
        ```
        there should be two navigations, so we can go ahead and remove the one that's on the main index file, as we already have one in the Default Layout.

        This is how the main `pages/index.js` should look like:
        ```jsx
            export default function Home() {
                return (
                        
                        <>
                        <Head>
                            
                            <title>Project Run Dev</title>
                            {/* link to favicon now moved to _document.js */}
                        </Head>
                        <LandingPageHeader title="project run dev"
                            tagline="The search for your next greatest developer" />
                        </>

                        
                )
                }

        ```
### Part 3: Adding Site Navigation (routing links)
#### ContentPageHeader will be reused across all the pages.
```jsx
function ContentPageHeader({title, tagline, type}) {
    return (
    <>
        <header className="text-center mt-20">
            <h1 className="text-lg font-semibold text-red-500">
                {type}
            </h1>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {title}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                {tagline}
            </p>
        </header>
    </>
    );
}

export default ContentPageHeader;
```
#### This will be added to each page, with dynamic type, title, and tagline values. Sample for UI/UX:
```jsx
function ContentPageHeader({title, tagline, type}) {
    return (
    <>
        <header className="text-center mt-20">
            <h1 className="text-lg font-semibold text-red-500">
                {type}
            </h1>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {title}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                {tagline}
            </p>
        </header>
    </>
    );
}

export default ContentPageHeader;
```
#### Pages:
*    `uiux.jsx`: route: path /uiux
*    `frontend.jsx`: route: path /frontend
*    `backend.jsx`: route: path /backend
*    `fullstack.jsx`: route: path /fullstack
*    `index.js`: (landing or home page) route path /
*    Link to github repo

### Part 3A: Adding Login Page and 404 page
*    `login.jsx`: route: path /login
*    `404.jsx`: route: path /404