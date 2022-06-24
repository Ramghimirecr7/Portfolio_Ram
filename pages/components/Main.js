import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <h1>Hi, I'm Ram .</h1>
          <div>
            <h2 className="py-2 text-gray-500 uppercase">Software Developer</h2>
            <p className="py-4 m-auto tracking-widest text-gray-400 uppercase">
              Learn More About Me!{" "}
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto p-2">
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                <a href="https://www.linkedin.com/in/ram-ghimire-4543a3174/">
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                <a href="https://github.com/ramghimirecr7">
                  <FaGithub />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                <a href="mailto:ramghimire3902@icloud.com">
                  <AiOutlineMail />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                <a href="https://hashnode.com/@RamGh">
                  <BsFillPersonLinesFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
