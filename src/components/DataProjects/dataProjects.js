import blogapp from "../../pVid/blogapp.mov"
import chatapp from "../../pVid/chatapp.mov"
import ecomapp from "../../pVid/ecomapp.mov"

export const Project = [
    {
        id: 1,
        pName: "ChatApp",
        pStack: "PHP, CSS, JavaScript, MySQL",
        pDescription: "ChatApp is a real-time messaging platform where users can create an account, chat with others, and engage in private or group conversations. Built using PHP for backend handling, JavaScript powers the interactive elements like message notifications and real-time updates. The app uses MySQL to securely store user data and conversations, ensuring smooth communication between users.",
        pImg: chatapp,
        sort: 2,
        gitLink: "https://github.com/olehkaliniuk/PHPchatApp"
    },
    {
        id: 2,
        pName: "BlogApp",
        pStack: "Node.js, React, JavaScript, Axios, Express, CSS, MySQL",
        pDescription: "BlogApp is a social platform where users can create accounts, publish posts, and interact with other users through comments and likes. Built on Node.js and Express, the backend ensures a fast and scalable environment for managing user data and posts. React handles the dynamic UI for a responsive and smooth user experience, while Axios facilitates efficient communication between the frontend and backend. Users can browse posts, like them, comment, and view posts from others in real-time. MySQL is used for storing user profiles, posts, and interactions, ensuring the app scales well as it grows in user base.",
        pImg: blogapp,
        sort: 1,
        gitLink: "https://github.com/olehkaliniuk/BlogReactExpress"
    },
    {
        id: 3,
        pName: "Ecommerce",
        pStack: "React.js, JavaScript, CSS",
        pDescription: "Ecommerce is a fully interactive e-commerce website that allows users to browse products, view details, and make purchasing decisions. Built with React.js, the site features a dynamic, responsive layout that adapts to any screen size. The app allows users to filter products, add items to the cart, and view detailed product information, such as descriptions, prices, and images. While the focus of the app is on the frontend, the logic behind it provides a full, engaging shopping experience. Users can explore products, view categories, and shop effortlessly, with a sleek design powered by CSS.",
        pImg: ecomapp,
        sort: 3,
        gitLink: "https://github.com/olehkaliniuk/e-commerce",

    }
]

