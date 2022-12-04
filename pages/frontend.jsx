import path from 'path'
import {promises as fs} from 'fs'

import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";

function FrontEndPage({frontend}) {
    return ( 
        <>
            {frontend.map(dev=> 
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
    const filePath = path.join(process.cwd(), './mock/developers.json')
    const dev = JSON.parse(await fs.readFile(filePath, 'utf-8'))

    const frontendDevs = dev.filter(dev => dev.type === 'front-end')


    // console.log("Server Code")
    return {
        props: {
            frontend:frontendDevs
        }
    }
}