import { CommonSection } from "@/components/ui/Common/Sections";
import { education } from "@/models/education";
import { EducationItem } from "./EducationItem";
import { EmptyRowCol } from "@/components/ui/Common/EmptyRowCol";

type Props = {
  educations: education[];
};

export const Education: React.FC<Props> = ({ educations }) => {
  return (
    <CommonSection title="EDUCATION">
      <EmptyRowCol>
        {educations &&
          educations.length > 0 &&
          educations.map((item, index) => {
            return <EducationItem key={index} item={item} />;
          })}
      </EmptyRowCol>
    </CommonSection>
  );
};

Education.displayName = "Education";
