
import React from "react";
import {
  ClipboardList,
  Hand,
  WandSparkles,
  CircleCheck
} from "lucide-react";

import "./HowItWorksSection.css";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Choose Your Service",
    description: "Select the service you need.",
  },
  {
    number: "02",
    icon: Hand,
    title: "Hand Over Your Clothes",
    description:
      "Give us your garments for professional care.",
  },
  {
    number: "03",
    icon: WandSparkles,
    title: "Expert Care & Finishing",
    description:
      "Our team carefully handles and finishes them.",
  },
  {
    number: "04",
    icon: CircleCheck,
    title: "Ready to Wear",
    description:
      "Receive your fresh, neat and beautifully finished clothes.",
  },
];

function HowItWorksSection() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        <div className="how-heading">
          <p className="how-eyebrow">HOW IT WORKS</p>

          <h2>Simple, Careful, Complete</h2>

          <div className="how-decoration">
            <span></span>
            <i></i>
            <span></span>
          </div>
        </div>

        <div className="how-steps">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="how-step" key={step.number}>
                <div className="how-icon-circle">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <span className="how-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;
