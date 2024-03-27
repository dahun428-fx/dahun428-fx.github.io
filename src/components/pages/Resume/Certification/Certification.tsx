import { EmptyRowCol } from "@/components/ui/Common/EmptyRowCol";
import { CommonRow } from "@/components/ui/Common/Rows";
import { CommonSection } from "@/components/ui/Common/Sections";
import { certification } from "@/models/certification";
import { commonRow } from "@/models/common/common";

type Props = {
  certifications: certification[];
};

export const Certification: React.FC<Props> = ({ certifications }) => {
  const serialize = (payload: certification): commonRow => {
    const { index, title, getDate, getArea } = payload;
    return {
      index,
      leftTitle: getDate,
      rightTitle: title,
      rightSubTitle: getArea,
    };
  };

  return (
    <CommonSection title="자격사항">
      <EmptyRowCol>
        {certifications &&
          certifications.length > 0 &&
          certifications.map((item, index) => {
            return <CommonRow key={index} row={serialize(item)} />;
          })}
      </EmptyRowCol>
    </CommonSection>
  );
};
Certification.displayName = "Certification";
