import React from "react";
import { BlockSection } from "../components/Block";
import MultiStep from "react-multistep";
import { ResumeStep1 } from "../components/ResumeStep1";
import { ResumeStep2 } from "../components/ResumeStep2";
import { ResumeStep3 } from "../components/ResumeStep3";

export const Resume = () => {
  return (
    <div className="text-light">
      <MultiStep activeStep={0}>
        <ResumeStep1 title="Personal Details" />
        <ResumeStep2 title="Academic Details" />
        <ResumeStep3 title="Experience" />
      </MultiStep>
    </div>
  );
};
