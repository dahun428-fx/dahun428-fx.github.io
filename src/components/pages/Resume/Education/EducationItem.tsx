import { CommonRow } from "@/components/ui/Common/Rows";
import { commonRow } from "@/models/common/common";
import { education } from "@/models/education";
import { config } from "../../../../../config/config";
import dayjs from "dayjs";

type Props = {
  item: education;
};

export const EducationItem: React.FC<Props> = ({ item }) => {
  const serialize = (payload: education): commonRow => {
    const { index, startedAt, subTitle, title, endedAt } = payload;
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
      rightSubTitle: subTitle,
    };
  };

  return <CommonRow row={serialize(item)} />;
};

EducationItem.displayName = "EducationItem";
