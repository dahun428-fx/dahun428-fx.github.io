import { EmptyRowCol } from "@/components/ui/Common/EmptyRowCol";
import { CommonRow } from "@/components/ui/Common/Rows";
import { CommonSection } from "@/components/ui/Common/Sections";
import { commonRow } from "@/models/common/common";
import { portfolio } from "@/models/portfolio";

type Props = {
  portfolios: portfolio[];
};

export const SideProject: React.FC<Props> = ({ portfolios }) => {
  const serialize = (payload: portfolio): commonRow => {
    const { index, title, descriptions, link, skillKeywords } = payload;
    return {
      index,
      leftTitle: title,
      rightDescriptions: descriptions,
      link: link,
      rightSkillKeywords: skillKeywords,
    };
  };

  return (
    <CommonSection title="포트폴리오">
      <EmptyRowCol>
        {portfolios &&
          portfolios.length > 0 &&
          portfolios.map((item, index) => {
            let portKey = `port_${index}`;
            return (
                <CommonRow key={portKey} row={serialize(item)} />
            );
          })}
      </EmptyRowCol>
    </CommonSection>
  );
};

SideProject.displayName = "SideProject";
