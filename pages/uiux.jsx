import path from 'path'
import {promises as fs} from 'fs'

import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";

function UiUxPage({ui}) {

    // console.log({ui})

    return ( 
        <>
            {ui.map(dev=> 
                <DeveloperCard 
                key={dev.id} 
                fullName={dev.full_name}
                avatar={dev.avatar} 
                jobTitle={dev.jobTitle} 
                experience={dev.experience}
                available={dev.available}
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
    const filePath = path.join(process.cwd(), './mock/developers.json')
    const dev = JSON.parse(await fs.readFile(filePath, 'utf-8'))

    const uiDevs = dev.filter(dev => dev.type === 'ui ux')


    // console.log("Server Code")
    return {
        props: {
            ui:uiDevs
        }
    }
}