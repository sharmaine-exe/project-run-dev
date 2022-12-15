
import {DeveloperBioLayout} from '../../components/layouts'
import {BioHeader, BioTopic, BioNavigation} from '../../components/developer-bio'
import {getDevelopers} from '../../libs/getDevelopers.js'
import {generateRandomTitle} from '../../libs/generateRandomTitle.js'

function SingleDeveloperPage({ avatar, fullName, city, heading, ...bio}) {
    //console.log(avatar, fullName, city, heading)
        return (
        <div className="max-w-2xl mx-auto py-20">
            <BioNavigation avatar={avatar} fullName={fullName} />
            <BioHeader city={city} fullName={fullName} heading={heading} />
            <BioTopic topic="About Me" />
        </div>
        );
    }
    
    export default SingleDeveloperPage;
    
    export async function getStaticPaths() {
        const devs = await getDevelopers();
        const paths = devs.map((dev) => ({ params: { uid: dev.uid } }));
        // console.log(devs)
        return {
            paths,
            fallback: false,
        };
    }
    
    export async function getStaticProps({ params }) {
        const devs = await getDevelopers();
        const dev = devs.find((dev) => dev.uid === params.uid);
        const bio = { ...dev, heading: generateRandomTitle() };
        
        return {
            props: bio,
        };
    }

    SingleDeveloperPage.getLayout = function getLayout(page) {
        return (
        <DeveloperBioLayout>
            {page} 
        </DeveloperBioLayout>
        )
    }

/*
    const testData =[
        {
            uid: "123",
            name: "Lily"

        },
        {
            uid: "456",
            name: "Hattie"

        },
        {
            uid: "789",
            name: "Poppy"

        }
    ]

function DeveloperBio({pageData}) {
    return (
        <header>
            <h1>Developer Bio Page {pageData.name}</h1>
        </header>
    );
}

export default DeveloperBio;

export async function getStaticPaths(){
    // dynamic paths = object w/ a single prop that are params
    const paths = testData.map(items => ({params:{uid:items.uid}}))
    // uid must match the file name
    // should be wrapped in (): {params:{uid:items.uid}
    return {
        paths,
        fallback:false
        // id it doesnt have data that matches, it will generate 404
    }
}

// sends info to the component
// returns props obj
// context: 

    {
        params: { uid: '123' },
        locales: [ 'en' ],
        locale: 'en',
        defaultLocale: 'en'
    }

export async function getStaticProps({params}){
    const pageData = testData.find(item => item.uid === params.uid)
    //console.log(pageData)
    return {
        props: {
            pageData
        }
    }
}
*/