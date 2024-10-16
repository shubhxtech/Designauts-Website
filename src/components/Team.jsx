import React from "react";
import Card from "./Card";
import ParticlesContainer from "./ParticlesContainer";

const mcolor = "bg-[#40A2E3]";
const ccolor = "bg-[#F3B95F]";
const pccolor = "bg-[#E05656]";

function Team({ textLeave, textEnter }) {
  const members = [
    {
      COORDINATOR: [
        {
          name: "Vivek Aggarwal",
          post: "COORDINATOR",
          tag: "DAMN",
          bg: "bg-[#EF9C50]",
          img: "/pfps/Vivek Aggarwal.png",
          linkedin: "",
          instagram: "",
        },
      ],
    },
    {
      "CO-COORDINATORS": [
        {
          name: "Aryan Singh",
          post: "CO-COORDINATOR",
          tag: "DAMN",
          bg: ccolor,
          img: "/pfps/Aryan Singh.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Harshit Vyas",
          post: "CO-COORDINATOR",
          tag: "DAMN",
          bg: ccolor,
          img: "/pfps/Harshit_Vyas.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Sanket",
          post: "CO-COORDINATOR",
          tag: "DAMN",
          bg: ccolor,
          img: "/pfps/sanket.png",
          linkedin: "",
          instagram: "",
        },
      ],
    },
    {
      "CORE MEMBERS": [
        {
          name: "Sam",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Sam.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Aditya K. Singh",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Aditya Kumar Singh.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Anusha Tiwari",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Anusha Tiwari.png",
          linkedin: "",
          instagram: "",
        },

        {
          name: "Akshat Singh",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Akshat Singh.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Bhavesh Goyal",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Bhavesh Goyal.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Luv Sharma",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Luv Sharma.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Sarthak Goel",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Sarthak Goel.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Siddhi U.",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Siddhi Upadhyaya.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Utkarsh Yadav",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Utkarsh Yadav.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Divyanshu",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/divyanshu.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Abhinandan",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Abhinandan.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Arsh Bansal",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Arsh.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Satyam Kumar",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Satyam.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Arish Qureshi",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Arish.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Mehul B.",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Mehul.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Aryan Kashyap",
          post: "Core Member",
          tag: "COOL",
          bg: mcolor,
          img: "/pfps/Aryank.png",
          linkedin: "",
          instagram: "",
        },
      ],
    },
    {
      "PAST COORDINATORS": [
        {
          name: "Shivangi",
          post: "COORDINATOR 22-23'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/shivangi.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Punit Daga",
          post: "COORDINATOR 21-22'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/Punit.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Kalyani A.",
          post: "COORDINATOR 19-20'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/Kalyani.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Amit Chauhan",
          post: "COORDINATOR 18-19'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/Amit.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Pratyush G.",
          post: "COORDINATOR 17-18'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/Pratyush.png",
          linkedin: "",
          instagram: "",
        },
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Particles container extending to the entire page */}
      <ParticlesContainer />

      {/* Main content */}
      <div className="py-[10rem] flex justify-center z-10" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <div className="flex flex-col gap-[0.5rem]">
          {members.map((post) => {
            return (
              <>
                <div className="flex flex-col gap-[5rem]">
                  <div className="text-5xl text-center" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    {Object.keys(post)}
                  </div>
                  <div className="flex flex-wrap max-w-[1200px] mt-[1rem] justify-around">
                    {post[Object.keys(post)].map((member) => {
                      return (
                        <Card
                          name={member.name}
                          post={member.post}
                          tag={member.tag}
                          img={member.img}
                          linkedin={member.linkedin}
                          instagram={member.instagram}
                          bg={member.bg}
                          customCss={Object.keys(post)[0] === "PAST COORDINATORS" ? " text-wrap" : " text-nowrap"}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;