import { EmptyRowCol } from "@/components/ui/Common/EmptyRowCol";
import { CommonRow } from "@/components/ui/Common/Rows";
import { CommonSection } from "@/components/ui/Common/Sections";
import { commonRow } from "@/models/common/common";
import { project } from "@/models/project";
import { config } from "../../../../../config/config";
import dayjs from "dayjs";
import { duration } from "dayjs";

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
      dayjs.extend(duration);
      // const diff = Math.floor(dayjs(endedAt).diff(startedAt) / 1000 / 60 / 60 / 24);
      const diff = dayjs.duration(dayjs(endedAt).diff(startedAt)).years() * 12 + dayjs.duration(dayjs(endedAt).diff(startedAt)).months();
      return `${start} ~ ${end} ( ${diff}개월 )`;
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
    <CommonSection title="프로젝트 사항">
      <EmptyRowCol>
        {projects &&
          projects.length > 0 &&
          projects.map((item, index) => {
            return <CommonRow row={serialize(item)} key={index} />;
          })}
      </EmptyRowCol>
    </CommonSection>
  );
};

Project.displayName = "Project";
