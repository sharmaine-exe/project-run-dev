import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";
import { getDevelopers } from "../libs/getDevelopers";

function UiUxPage({ui}) {

    // console.log({ui})

    return ( 
        <>
            {ui.map(dev=> 
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

export default UiUxPage;

UiUxPage.getLayout = function getLayout(page){
    return (
        <ContentPageLayout 
            type="ui-ux-developers"
            title="UI/UX Developers"
            tagline="the interactive user experience group" >
            {page}
        </ContentPageLayout>

    )
}

// getStaticProps functionality

export async function getStaticProps(content){
    const dev = await getDevelopers();
    const uiDevs = dev.filter(dev => dev.type === 'ux ui developer')


    // console.log("Server Code")
    return {
        props: {
            ui:uiDevs
        }
    }
}