import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import my_profile_pic from './my_profile_pic.jpeg';
import my_profile_logo from './profile_logo.png';
import my_photo from './my_photo.jpg';
import reactjs from './reactjs.png';
import redux from './redux.png';
import tailwind from './tailwind.png';
import nextjs from './Next.js.png';
import docker from './docker.png';
import laravel from './laravel.png'

export const assets = {
    my_photo,
    my_profile_logo,
    my_profile_pic,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    reactjs,
    redux,
    tailwind,
    nextjs,
    docker,
    laravel,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Design Patterns Demo',
        description: 'Demo Design Patterns Implementation.',
        technologies: 'Laravel/JavaScript/TailWindCSS.',
        bgImage: 'design_patterns.svg',
        status: 'Initial version completed',
        url: 'https://demo-design-patterns-master-0rqesp.laravel.cloud/',
        src: 'https://github.com/tbattur22/demo-design-patterns'
    },
    {
        title: 'Product List Demo',
        description: 'Features: Infinite Scroll/Container Query.',
        technologies: 'React/JavaScript/CSS',
        bgImage: 'product_list.svg',
        status: 'Initial version completed',
        url: 'https://tbattur22.github.io/demo-product-list/',
        src: 'https://github.com/tbattur22/demo-product-list'
    },
    {
        title: 'Live Chat App',
        description: 'Live Chat using websockets.',
        technologies: 'Laravel/Reverb/React/Typescript/InertiaJS',
        bgImage: 'live_chat_4.svg',
        status: 'Initial version completed',
        url: '',
        src: 'https://github.com/tbattur22/chat-demo'
    },
    {
        title: 'To Do App',
        description: 'Collaborative Real Time ToDo App',
        technologies: 'Laravel/Reverb/VueJS/TailWindCSS',
        bgImage: 'work-3.png',
        status: 'Pending',
        url: '',
        src: ''
    },
    {
        title: 'WebSite Builder',
        description: 'Demo WebSite Builder App',
        technologies: 'Elixir/Phoenix, React/Javascript/CSS',
        bgImage: 'work-4.png',
        status: 'In Progress',
        url: '',
        src: ''
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Build Frontend UIs and SPA', description: 'A React single-page application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with it, without requiring full page reloads. It provides a more fluid and responsive user experience, similar to a desktop application.', link: '' },
    // { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'Build Backend Services', description: 'Design, Implement and Test backend services using PHP/Laravel and Elixir/Phoenix frameworks.', link: '' },
    { icon: assets.graphics_icon, title: 'Design & Build Database Layer', description: 'Design and implement data storage layer using MySQL/PostGreSQL or MongoDB', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS3, React, JavaScript, TypeScript, ReduxJS, PHP/Laravel, Elixir/Phoenix, Java, MySQL, PostgreSQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'MSc Degree in Computer Science, University of Birmingham, UK' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Worked on more than 10 projects of various sizes in different companies.' }
];

export const toolsData = [
    {
        icon: assets.reactjs,
        tooltip: "React JS"
    },
    {
        icon: assets.redux,
        tooltip: "Redux"
    },
    {
        icon: assets.tailwind,
        tooltip: "Tailwind CSS"
    },
    {
        icon: assets.laravel,
        tooltip: "Laravel"
    },
    {
        icon: assets.nextjs,
        tooltip: "Next JS"
    },
    {
        icon: assets.docker,
        tooltip: "Docker"
    },
    {
        icon: assets.vscode,
        tooltip: "VS Code"
    },
    {
        icon: assets.git,
        tooltip: "Git version control"
    }
    // assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];