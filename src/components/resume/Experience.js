import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">EXPERIENCE's</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern at Shiash Info Tech Solutions"
            subTitle="as Data Analytics "
            result="July 2024"
            des="During this internship, I has discover, interpret, and communicate meaningful patterns in data. By transforming raw data into valuable insights, data analytics helps organizations make data-driven decisions, optimize operations, and gain a competitive advantage.'"
          />

          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
