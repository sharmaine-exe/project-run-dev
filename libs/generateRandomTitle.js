const words =
    "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.".split(
        " "
    );

const joiner = "and with for is was the using of".split(" ");
const numberOfWordsInTitle = randomNumber(3, 5);

let title = ``;

function randomNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function toUpper(makeUpperCase) {
    const word = makeUpperCase;
    const firstLetter = word.substring(0, 1).toUpperCase();
    const rest = word.substring(1, word.length);
    return firstLetter + rest;
    }

    export function generateRandomTitle(){
    title=``
    
        for (let i = 0; i < numberOfWordsInTitle; i++) {
        
        if (i === 1) {
            title += " " + toUpper(joiner[Math.floor(Math.random() * joiner.length)]);
            }

        
        
        
            if (i === 3) {
            title += " " + toUpper(joiner[Math.floor(Math.random() * joiner.length)]);
            }
        
        
            title += " " + toUpper(words[Math.floor(Math.random() * words.length)]);
        }
        
        return title
}