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
*   create `_document.js` file inside the  `pages` folder to inject meta tags to the head of html and add: 
    ```
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
*   add to `next.config.js`:
    ```
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
*   add a `<meta name="description" content="..."  />` to optimize more
*   style index.js
### Part 2B: Assessment 1 submission
*   Build the header component that accepts `props` to add dynamic title and dynamic tagline

