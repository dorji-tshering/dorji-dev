const Projects = () => {
    return [
        {
            id: 'flash-card',
            title: 'Flash Card',
            repoName: 'flash-card',
            description: 'A personal project with NextJs and Firebase to allow a user to create, store, view, and delete flash cards. Currently hosted on Vercel. Reach me via email if you want to try it out!',
            features:[
                'User Authentication with Firebase(via Email Password method)',
                'Content authorization with session cookies(via Firebase admin SDK)',
                'Create card/note/document and save it to the firestore database',
                'Choose text or code content type',
                'Minimal code editor and highlighter for Javascript, TypeScript, Python, and Css',
                'Assign your card/note to different categories which you can add during card creation',
                'View card/note on a slider',
                'If you are familiar with concept of a particular card/note, you can mark it as known',
                'Update the content of a card/note',
                'Delete a card/note',
                'Delete category if there is no more card/note',
                'Known/Unknown filter on the homepage',
            ],
            category: 'Web Development',
            featured: true,
            github: 'https://github.com/dorji-tshering/flash-card',
            hostedLink: 'https://flash-card-seven.vercel.app/',
            techStacks: ['NextJs', 'Firebase'],
            prioritize: false,
        },
        {
            id: 'chit-chat',
            title: 'Chit Chat',
            repoName: 'chit-chat',
            description: 'A twitter clone built with NextJs and GetStream API. Uses react-acitivity-feed, getstream, and reactjs libraries.',
            features: [
                'Login and create your own tweet',
                'View your profile page',
                'Follow/unfollow users',
                'Like and comment on a tweet',
                "Expand a tweet to view it's details"
            ],
            category: 'Web Development',
            featured: false,
            github: 'https://github.com/dorji-tshering/chit-chat',
            hostedLink: '',
            techStacks: ['NextJs', 'Getstream-io'],
            prioritize: true,
        },
        {
            id: 'video-sharing-app',
            title: 'VideoShare App',
            repoName: 'videosharingapp',
            description: 'A basic video sharing app that I have created with React Native. This project was part of the interview for a frontend developer job that I have applied for. It was my first try at react-native and mobile application development.',
            features: [
                'Record a video of maximum 60 seconds',
                'Store and share your video within the app feed',
                'You can edit/delete the recorded video',
                'You will be able to share the video to the public feed where logged in users can view and play your video'
            ],
            category: 'Mobile Development',
            featured: false,
            github: 'https://github.com/dorji-tshering/VideoSharingApp',
            hostedLink: '',
            techStacks: ['ReactNative', 'React Navigation'],
            prioritize: true,
        },
        {
            id: 'react-calculator',
            title: 'React Calculator',
            repoName: 'react-calculator',
            description: 'A basic scientific calculator developed with ReactJs. No implementation of BEDMAS rule but you can use brackets to get the desired result.',
            features: [
                'You can do addition, division, multiplication, subtraction',
                'Supports modulus and trigonometric operations',
                'Support bracket emphasis',
                'No support for BEDMAS rule',
                'Supports logarithmic, squareroot, and PI operations'
            ],
            category: 'SPA',
            featured: false,
            github: 'https://github.com/dorji-tshering/React-Calculator',
            hostedLink: 'https://dorji-tshering.github.io/React-Calculator/',
            techStacks: ['ReactJs'],
            prioritize: true,
        },
        {
            id: 'simple-ecommerce-backend',
            title: 'Ecommerce Backend',
            repoName: 'e-commerce-api',
            description: 'Simulation of an e-commerce server with Nestjs(Typescript) Framwork and mysql database. This was my first backend project which I have carried out as part of getting into software development.',
            features: [
                'Add, update, delete, and retrieve a user',
                'Add, update, delete, and retrieve a product',
                'Create, cancel, and retrieve orders',
                'Authentication and authorization with JWT and PassportStrategy'
            ],
            category: 'Backend Development',
            featured: false,
            github: 'https://github.com/dorji-tshering/E-Commerce-API',
            hostedLink: '',
            techStacks: ['NestJs', 'TypeORM', 'Passport'],
            prioritize: true,
        },
    ]
}

export default Projects