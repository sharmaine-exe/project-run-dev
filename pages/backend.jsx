import path from 'path'
import {promises as fs} from 'fs'

import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";

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
    const filePath = path.join(process.cwd(), './mock/developers.json')
    const dev = JSON.parse(await fs.readFile(filePath, 'utf-8'))

    const backendDevs = dev.filter(dev => dev.type === 'back-end')


    // console.log("Server Code")
    return {
        props: {
            backend:backendDevs
        }
    }
}