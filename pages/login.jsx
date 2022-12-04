import ContentPageLayout from "../components/layouts/ContentPageLayout";
function LoginPage() {
    return ( 
        <>
            <form className='mx-auto flex flex-col text-zinc-700'>
                <label  className="text-xl mb-2">
                    Username
                </label>
                <input type="text" name="username" className="border-2 border-zinc-200 rounded-md h-10 md:w-[600px] mb-4" />
                
                <label  className="text-xl mb-2">
                    Password
                </label>
                <input type="password" name="pwd" className="border-2 border-zinc-200 rounded-md h-10 md:w-[600px] mb-4"/>
                
                <input type="submit" value="Submit" className="border-2 border-zinc-200 rounded-lg p-2 my-4 md:w-[200px] md:mx-auto hover:bg-zinc-900 hover:text-zinc-100"/>
            </form>
        </>
    );
}

export default LoginPage;

LoginPage.getLayout = function getLayout(page){
    return (
        <ContentPageLayout 
            title="Sign in to your account"
            tagline="let's build the best team ever" >
            {page}
        </ContentPageLayout>

    )
}