import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";
import { getDevelopers } from "../libs/getDevelopers";

function FullStackPage({fullstack}) {
    return ( 
        <>
            {fullstack.map(dev=> 
                <DeveloperCard 
                key={dev.id} 
                fullName={dev.fullName}
                avatar={dev.avatar} 
                jobTitle={dev.jobTitle} 
                experience={dev.experience}
                available={dev.available}
                uid={dev.uid}
                /> 
            )}
        </>
    );
}

export default FullStackPage;

FullStackPage.getLayout = function getLayout(page){
    return (
        <ContentPageLayout 
            type="full-stack-developers"
            title="Full-Stack Developers"
            tagline="our client-side and server-side group" >
            {page}
        </ContentPageLayout>

    )
}

export async function getStaticProps(content){
    const dev = await getDevelopers();
    const fullstackDevs = dev.filter(dev => dev.type === 'full stack developer')


    // console.log("Server Code")
    return {
        props: {
            fullstack:fullstackDevs
        }
    }
}