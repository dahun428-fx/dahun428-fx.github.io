import { Col, Row } from "react-bootstrap";
import styles from "./Introduce.module.scss";
import { Contents } from "@/components/ui/Contents";
import { introduce } from "@/models/introduce";
import { Badge } from "@/components/ui/Badge";
import dayjs from "dayjs";
import { config } from "../../../../../config/config";

type Props = {
  introduceData: introduce;
};

export const Introduce: React.FC<Props> = ({ introduceData }) => {
  if (!introduceData) return null;

  const { contents, latestUpdated, sign } = introduceData;

  const latestDate = dayjs(latestUpdated).format(config.format.date);
  // const latestFromNow = Math.floor(dayjs(new Date()).diff(latestUpdated));
  const latestFromNow = Math.floor(dayjs(new Date()).diff(dayjs(latestUpdated)) / 1000 / 60 / 60 / 24);

  return (
    <Contents title="INTRODUCE">
      <>
        {contents &&
          contents.length > 0 &&
          contents.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        {/* <p className="text-right">
          <small>Latest Updated </small>
          <Badge content={`${latestDate} (D+${latestFromNow})`} theme="secondary" size="h6" />
        </p> */}
        {/* {sign && <p className={styles.sign}>{sign}</p>} */}
      </>
    </Contents>
  );
};

Introduce.displayName = "Introduce";
