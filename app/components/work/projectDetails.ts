import {
    SiAndroid,
    SiBootstrap,
    SiCsharp,
    SiCss3,
    SiFacebook,
    SiGooglecolab,
    SiHtml5,
    SiJavascript,
    SiKeras,
    SiMicrosoftsqlserver,
    SiMlflow,
    SiNumpy,
    SiPandas,
    SiPython,
    SiPytorch,
    SiReact,
    SiTailwindcss,
    SiTensorflow,
    SiVite,
    SiYolo
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "IRQS",
        description:
            "Intelligent Road Quantification System - a SOTA work - Mobile Application link is in the article.",
        technologies: [SiPytorch, SiYolo, SiFacebook, SiTensorflow, SiAndroid],
        techNames: ["PyTorch", "YOLO", "Facebook's Detectron2", "TFlite", "Android"],
        techLinks: [],
        github: "https://medium.com/@I_am_the_Haider/intelligent-road-quantification-system-a-computer-vision-pothole-detection-system-5c6cac433d59",
        demo: "https://huggingface.co/spaces/IAmTheHaider/POT-YOLO",
        image: "/projects/P6_rounded.png",
        available: true,
    },
    {
        id: 1,
        name: "WonderBikes",
        description:
            "A successful MERN project of mine made for a client, still in use but you can see the demo.",
        technologies: [SiReact, SiVite, SiBootstrap, SiTailwindcss , SiMlflow],
        techNames: ["React", "Vite", "Bootstrap 5", "Tailwind CSS", "Flowbite-REACT"],
        techLinks: [],
        github: "https://i.imgur.com/3krum2W.png",
        demo: "https://wonderbikes.netlify.app/",
        image: "/projects/P5_rounded.png",
        available: true,
    },
    {
        id: 2,
        name: "Sign Detector",
        description:
            "Hand Signs detection using ResNet50 with great accuracy.",
        technologies: [SiPython, SiGooglecolab, SiTensorflow, SiKeras ,SiPandas, SiNumpy],
        techNames: ["Python", "Google Colaboratory", "TensorFlow", "Keras", "Pandas", "Numpy"],
        techLinks: [],
        github: "https://github.com/SyedHabib14/Sign-Detection-using-ResNet50/tree/main/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/P4_rounded.png",
        available: true,
    },
    {
        id: 3,
        name: "CSPP-ANN",
        description:
            "An Artificial Neural Network that predicted Car Prices accurately.",
        technologies: [SiPython, SiGooglecolab],
        techNames: ["Python", "Google Colaboratory"],
        techLinks: [],
        github: "https://github.com/SyedHabib14/ANN-CSPP/blob/main/ANN_CSPP_by_Syed_Habeeb_Haider.ipynb/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/P3_rounded.png",
        available: true,
    },
    {
        id: 4,
        name: "AHTC-Online",
        description:
            "Discount calculations, Seamless CRUD operations.",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techNames: ["HTML5", "CSS", "JavaScript"],
        techLinks: [],
        github: "https://github.com/SyedHabib14/AHTC-Project-Web",
        demo: "https://syedhabib14.github.io/AHTC-Project-Web/",
        image: "/projects/P2_rounded.png",
        available: true,
    },
    {
        id: 5,
        name: "AHTC",
        description:
            "A go-to software for database management that I made for a client at Hafeez Center, Lahore. With its captivating design, AHTC simplifies CRUD operations and offers seamless balance calculation, complete with elegant receipts.",
        technologies: [SiCsharp, SiMicrosoftsqlserver],
        techNames: ["C-Sharp", "MicroSoft SQL"],
        techLinks: [],
        github: "https://github.com/SyedHabib14/AHTC",
        demo: "https://github.com/SyedHabib14/PortHaider/raw/main/assets/Lookbook.pptx",
        image: "/projects/P1_rounded.png",
        available: true,
    },
];