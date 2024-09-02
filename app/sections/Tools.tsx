import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiAdobeaftereffects, SiAdobefonts,
    SiAdobeillustrator,
    SiAdobephotoshop, SiAnaconda, SiAndroidstudio, SiAstro, SiBun, SiCinema4D, SiCplusplus, SiCsharp, SiExpress, SiFigma, SiFramer, SiGit,
    SiGithub,
    SiGooglechrome, SiGooglecolab, SiGooglefonts,
    SiNetlify,
    SiHtml5,
    SiIntellijidea, SiJavascript, SiKotlin, SiLua,
    SiMongodb,
    SiNeovim, SiNextdotjs, SiPaddlepaddle, SiPytorch, SiReact, SiRobotframework, SiRust, SiTailwindcss, SiTensorflow, SiTypescript, SiUpwork, SiVisualstudiocode, SiVite, SiWebstorm, SiWeightsandbiases, SiZig
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";
import { text } from "stream/consumers";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS IM USING."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="In Artificial Intelligence" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.1} stepSize={0.1} iconSize={50}>
                                <SiPytorch size={50} />
                                <SiTensorflow size={50}/>
                                <SiWeightsandbiases size={50}/>
                                <SiPaddlepaddle size={50}/>
                                <SiVisualstudiocode size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="In Frontend Development" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiTailwindcss size={50}/>
                                <SiJavascript size={50}/>
                                <SiReact size={50}/>
                                <SiVite size={50}/>
                                <SiHtml5 size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="In Backend Development" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiBun size={50}/>
                                <SiNextdotjs size={50}/>
                                <SiCsharp size={50}/>
                                <SiMongodb size={50}/>
                                <SiAndroidstudio size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Others" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiGithub size={50}/>
                                <SiNetlify size={50}/>
                                <SiGooglecolab size={50}/>
                                <SiAnaconda size={50}/>
                                <SiUpwork size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
