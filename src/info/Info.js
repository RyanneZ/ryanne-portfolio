import self from "../img/self1.png"
import project2 from "../img/project2.png"
import project3 from "../img/project3.png"
import project4 from "../img/project4.png"
import project1 from '../img/project1.png'
import PDF from '../documents/resume.pdf'


export let colors = ["#fc1973", "#0663d0"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ryanne",
    lastName: "Zhuo",
    initials: "RZ", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(150deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
   
        {
            emoji: '🌎',
            text: 'based in the Toronto, Canada'
        },
        {
            emoji: "💼",
            text: "full stack developer"
        },
        {
            emoji: "📧",
            text: "ryannezhuo@gmail.com"
        },
        {
            emoji: '🎾',
            text: 'love playing tennis'
        },

    ],
    socials: [

        {
            link: "https://github.com/RyanneZ/",
            icon: "ion:logo-github",
            label: 'Github'
        },
        {
            link: "https://www.linkedin.com/in/ryannezhuo/",
            icon: "akar-icons:linkedin-box-fill",
            label: 'Linkedin'
        },
        {
            link: PDF,
            icon: "bxs:file-pdf",
            label: 'Resume'
        },
        {
            link: "mailto:ryannezhuo@gmail.com",
            icon: "ic:baseline-email",
            label: 'Email Me'
        },
      
      
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Ryanne. I am a Full Stack Developer with a background in Finance. I am pursuing my passion for using technical tools to design and develop applications. I achieve goals by applying logic and analytical thinking to understand the vital business needs and find innovative solutions.",
    skills:
        {
            proficientWith: ['JavaScript', 'Node.js','Express','Python','Django', 'MongoDB','PostgreSQL', 'React', 'Github', 'RESTful APIs','Bootstrap', 'HTML5', 'CSS3', 'Figma','AWS S3'],
            exposedTo: ['Ruby', 'Azure']
        }
    ,
    skills1: [
        {
            label: 'React',
            logo: 'logos:react'
        },
        {
            label: 'JavaScript',
            logo: 'logos:javascript'
        },
        {
            label: 'Node.js',
            logo: 'logos:nodejs-icon'
        },
        {
            label: 'Python',
            logo: 'logos:python'
        },
        {
            label: 'Django',
            logo: 'logos:django-icon'
        },
        {
            label: 'MongoDB',
            logo: 'logos:mongodb-icon'
        },
        {
            label: 'PostgreSQL',
            logo: 'logos:postgresql'
        },
        {
            label: 'AWS',
            logo: 'logos:aws'
        },
        {
            label: 'HTML5',
            logo: 'vscode-icons:file-type-html'
        },
        {
            label: 'CSS3',
            logo: 'vscode-icons:file-type-css'
        },


    ],

    hobbies: [
        {
            label: 'tennis',
            emoji: '🎾'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "CryptoBox",
            live: "https://cryptobox123.herokuapp.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/RyanneZ/CryptoBox", // this should be a link to the **repository** of the project, where the code is hosted.
            image: project1,
            description: 'CryptoBox is a crypto currency exchange platform. It is a Full-stack web application. Users can use CryptoBox to check prices, daily changes, market cap of different cryptocurrencies. Users can also deposit money into wallet or withdrawl USD dollars from the wallet. Users can therefore buy or sell crypto assets with or into USD dollars.',
            technolegies_used:['React', 'Redux', 'Rapid API', 'Node.js', 'Express.js', 'MongoDB'] ,
        },
        {
            title: "Tinterest",
            live: "https://tinterest.herokuapp.com/welcome/",
            source: "https://github.com/RyanneZ/Tinterest",
            image: project2,
            description:'Tinterest is an image sharing and social media service designed to enable saving and discovery of information (specifically "ideas") on the internet using images. As a user, you can make posts on the community board and share your posts with other users. You can also save the posts that you like.',
            technolegies_used: ['Python', 'Django', 'PostgreSQL', 'AWS']
        },
        {
            title: "LET'S PLAY",
            live: "https://letsplayproject2.herokuapp.com/",
            source: "https://github.com/RyanneZ/Let-s-Play",
            image: project3,
            description:'LET’S PLAY is a platform to help people find other people play sports with. User can create a post on the community board to set up a match or look for people to join a tournament together. Users who are interested can comment under each post.' ,
            technolegies_used: ['JavaScript','Node.js', 'Express.js','MongoDB','Mongoose', 'Google OAuth']
        },
        {
            title: "FIVE LETTERS",
            live: "https://ryannez.github.io/Five-Letters/",
            source: "https://github.com/RyanneZ/Five-Letters",
            image: project4,
            description: 'This game is called "Five Letters". As a user, you can uess the word in six tries. Each guess must be a valid five-letter word. After enter you answer, hit the enter button to submit. After each guess, the color of the boxs will change to show how close your guess was to the word.',
            technolegies_used: ['JavaScript', 'CSS3', 'HTML5']
        },

    ]
}