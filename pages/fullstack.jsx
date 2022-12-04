import path from 'path'
import {promises as fs} from 'fs'

import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";

function FullStackPage({fullstack}) {
    return ( 
        <>
            {fullstack.map(dev=> 
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
    const filePath = path.join(process.cwd(), './mock/developers.json')
    const dev = JSON.parse(await fs.readFile(filePath, 'utf-8'))

    const fullstackDevs = dev.filter(dev => dev.type === 'full stack')


    // console.log("Server Code")
    return {
        props: {
            fullstack:fullstackDevs
        }
    }
}