import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";
import { getDevelopers } from "../libs/getDevelopers.js";

function BackEndPage({backend}) {

    console.log({backend})

    return ( 
        <>
            {backend.map(dev=> 
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

export default BackEndPage;

BackEndPage.getLayout = function getLayout(page){
    return (
        <ContentPageLayout 
            type="back-end-developers"
            title="Back-End Developers"
            tagline="our server-side group" >
            {page}
        </ContentPageLayout>

    )
}

export async function getStaticProps(content){
    const devs = await getDevelopers();
    const backendDevs = devs.filter(dev => dev.type === 'back-end developer')


    // console.log("Server Code")
    return {
        props: {
            backend:backendDevs
        }
    }
}