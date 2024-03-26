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
            <SkillKeywords skillKeywords={item.skillKeywords} />
          </ul>
        </Col>
      </Row>
    </div>
  );
};

ExperienceItem.displayName = "ExperienceItem";

type SkillProps = {
  skillKeywords?: string[];
};

export const SkillKeywords: React.FC<SkillProps> = ({ skillKeywords }) => {
  if (!skillKeywords) return null;

  return (
    <li>
      <strong>스킬키워드</strong>
      <div>
        {skillKeywords &&
          skillKeywords.length > 0 &&
          skillKeywords.map((item, index) => {
            return <Badge key={index} content={item} size="h6" theme="secondary" className="mr-1" />;
          })}
      </div>
    </li>
  );
};

type WorkProps = {
  startedAtString: string;
  endedAtString?: string;
};

export const WorkingPeriod: React.FC<WorkProps> = ({ startedAtString, endedAtString }) => {
  const startedAt = dayjs(startedAtString).format(config.format.date);
  const { endedAt, isWorking, periodTitle } = useMemo(() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt} ~`,
        isWorking: true,
        endedAt: "",
      };
    }

    const _endedAt = dayjs(endedAtString).format(config.format.date);
    return {
      periodTitle: `${startedAt} ~ ${_endedAt}`,
      isWorking: false,
      endedAt: _endedAt,
    };
  }, [endedAtString, startedAt]);

  const durationP = (start: string, end?: string) => {
    dayjs.extend(duration);
    const startDate = dayjs(start);
    const endDate = end ? dayjs(end) : dayjs(new Date());
    const _d = dayjs.duration(endDate.diff(startDate));
    const y = _d.years();
    const m = _d.months();
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
        <Badge className="mr-1" content={durationP(startedAtString, endedAt)} theme="info" size="h6" />
      </Col>
    </Row>
  );
};
