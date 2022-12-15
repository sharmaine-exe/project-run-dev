import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";
import { getDevelopers } from "../libs/getDevelopers";

function BackEndPage({backend}) {

    console.log({backend})

    return ( 
        <>
            {backend.map(dev=> 
                <DeveloperCard 
                key={dev.id} 
                fullName={dev.full_name}
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
    const dev = await getDevelopers();
    const backendDevs = dev.filter(dev => dev.type === 'back-end')


    // console.log("Server Code")
    return {
        props: {
            backend:backendDevs
        }
    }
}