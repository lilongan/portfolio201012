import React from "react";
import image from "../ducks_over_sweetwater.jpg";

export default function Home() {
    return (
        <main>
            <img 
                src={image} 
                alt="Ducks Over Sweetwater"
                className="absolute object-cover w-full h-full"
                />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                    I'm Art Lees.</h1>
                {/* <div>
                    <h3 className="text-2lg text-green-100 font-bold leading-none lg:leading-snug home-name">
                        Full Stack Software Developer at Longan International Holdings, LLC and Advocates Asia.</h3>
                </div>
                <div>
                    <h3 className="text-2lg text-green-100 font-bold leading-none lg:leading-snug home-name">
                        I split my time between Chengdu, Sichuan Province, China -- Atlanta, Georgia, USA -- and lots of international travel.</h3>
                </div> */}
            </section>
        </main>
    );
}