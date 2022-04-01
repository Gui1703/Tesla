import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import ModelSection from "../Model/ModelSection";
import ModelsWrapper from "../Model/ModelsWrapper";
import UniqueOverlay from "../UniqueOverlay";
import { Container, Spacer } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model 3",
            "Model Y",
            "Model S",
            "Model X",
            "Solar Panels",
            "Solar Roof",
            "Accessories",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Touchless Delivery"
                />
              }
            />
          ))}
        </div>

        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
