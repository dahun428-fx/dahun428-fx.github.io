import { experience } from "@/models/experience";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { Col, Row } from "react-bootstrap";
import { config } from "../../../../../config/config";
import { useMemo } from "react";
import styles from "./Experience.module.scss";
import { Badge } from "@/components/ui/Badge";

type Props = {
  item: experience;
  index?: number;
};

export const ExperienceItem: React.FC<Props> = ({ item, index = 0 }) => {
  return (
    <div>
      {index > 0 && <hr />}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <WorkingPeriod startedAtString={item.startedAt} endedAtString={item.endedAt} />
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          <i className={styles.gray}>{item.position}</i>
          <ul className="pt-3">
            {item.descriptions &&
              item.descriptions.length > 0 &&
              item.descriptions.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

ExperienceItem.displayName = "ExperienceItem";

type WorkProps = {
  startedAtString: string;
  endedAtString?: string;
};

export const WorkingPeriod: React.FC<WorkProps> = ({ startedAtString, endedAtString }) => {
  const startedAt = dayjs(startedAtString).format(config.format.date);

  const { endedAt, isWorking, periodTitle } = useMemo(() => {
    return {
      periodTitle: "",
      isWorking: true,
      endedAt: undefined,
    };
  }, []);

  const durationP = (start: string, end?: string) => {
    dayjs.extend(duration);
    const startDate = dayjs(start);
    const endDate = end ? dayjs(end) : dayjs();
    const { years, months } = dayjs.duration(endDate.diff(startDate));
    const y = years();
    const m = months();
    if (!y) {
      return `${m}개월`;
    } else {
      return `${y}년 ${m}개월`;
    }
  };

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 className={styles.gray}>{periodTitle}</h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-right text-center">
        {isWorking && <Badge content="재직중" size="h6" theme="primary" className="mr-1" />}
        <Badge content={durationP(startedAtString, endedAt)} theme="info" size="h6" />
      </Col>
    </Row>
  );
};
