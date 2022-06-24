import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-10 tracking-widest text-teal-700 uppercase">
            About
          </h2>
          <h4 className="p-2 animate-pulse">Education</h4>
          <p className="py-1">
            I completed my Bachelor degree in Computer Science in May 2021 at
            Alabama State University, Montgomery Alabama.
          </p>
          <h4 className="pt-4 animate-pulse">Experience</h4>
          <p className="py-1">
            I am fascinated by Blockchain Technology and I continue to learn
            about it everyday.
            <br />I would love to collaborate with other developers on any ideas
            related to Blockchain/Web3
          </p>
          {/* <p className="py-4 text-center text-teal-500 ">
              Paying attention to details is the key for my passion in frontend development.
            </p> */}
          <Link href="/#projects">
            <p className="py-10 underline cursor-pointer">
              Check out some of my projects..
            </p>
          </Link>
        </div>
        <div>
          <Image
            className="duration-200 ease-in rounded-full"
            src="https://i.postimg.cc/vZ67zg6x/ram-bg.png"
            alt="me"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
