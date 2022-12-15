import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";
import { getDevelopers } from "../libs/getDevelopers";

function FrontEndPage({frontend}) {
    return ( 
        <>
            {frontend.map(dev=> 
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

export default FrontEndPage;

FrontEndPage.getLayout = function getLayout(page){
    return (
        <ContentPageLayout 
            type="front-end-developers"
            title="Front-End Developers"
            tagline="our client-side group" >
            {page}
        </ContentPageLayout>

    )
}

export async function getStaticProps(content){
    const dev = await getDevelopers();
    const frontendDevs = dev.filter(dev => dev.type === 'front-end developer')


    // console.log("Server Code")
    return {
        props: {
            frontend:frontendDevs
        }
    }
}