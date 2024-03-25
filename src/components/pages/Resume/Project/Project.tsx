import { EmptyRowCol } from "@/components/ui/Common/EmptyRowCol";
import { CommonRow } from "@/components/ui/Common/Rows";
import { CommonSection } from "@/components/ui/Common/Sections";
import { commonRow } from "@/models/common/common";
import { project } from "@/models/project";
import { config } from "../../../../../config/config";
import dayjs from "dayjs";

type Props = {
  projects: project[];
};

const serialize = (payload: project): commonRow => {
  const { index, descriptions, startedAt, title, where, endedAt } = payload;
  const DATE_FORMAT = config.format.date;
  const start = dayjs(startedAt).format(DATE_FORMAT);
  const _title = (() => {
    if (payload.endedAt) {
      const end = dayjs(endedAt).format(DATE_FORMAT);
      return `${start} ~ ${end}`;
    }
    return `${startedAt} ~`;
  })();

  return {
    index: index,
    leftTitle: _title,
    rightTitle: title,
    rightSubTitle: where,
    rightDescriptions: descriptions,
  };
};

export const Project: React.FC<Props> = ({ projects }) => {
  return (
    <CommonSection title="PROJECT">
      <EmptyRowCol>
        {projects &&
          projects.length > 0 &&
          projects.map((item, index) => {
            return <CommonRow row={serialize(item)} />;
          })}
      </EmptyRowCol>
    </CommonSection>
  );
};

Project.displayName = "Project";
