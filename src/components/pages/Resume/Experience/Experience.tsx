import { Badge } from "@/components/ui/Badge";
import { Contents } from "@/components/ui/Contents";
import { Title } from "@/components/ui/Title";
import { Col, Row } from "react-bootstrap";
import styles from "./Experience.module.scss";
import { date } from "@/utils/date";
import { EmptyRowCol } from "@/components/ui/Common/EmptyRowCol";
import { useMemo } from "react";
import { experience } from "@/models/experience";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { config } from "../../../../../config/config";
import { ExperienceItem } from "./ExperienceItem";

type Props = {
  experiences: experience[];
};

export const Experience: React.FC<Props> = ({ experiences }) => {
  const totalPeriod = useMemo(() => {
    return <Badge content={getFormattingExperienceTotalDuration(experiences)} size="h5" theme="secondary" />;
  }, [getFormattingExperienceTotalDuration]);

  function getFormattingExperienceTotalDuration(experiences: experience[]) {
    dayjs.extend(duration);
    const durations = experiences.map((item) => {
      const end = dayjs(item.endedAt) ?? dayjs();
      const start = dayjs(item.startedAt);
      return dayjs.duration(end.diff(start));
    });

    const diff = durations.reduce((prev, current) => prev + (current.years() * 12 + current.months()), 0);
    const y = Math.floor(diff / 12);
    const m = diff % 12;
    return `총 ${y}년 ${m}개월`;
  }

  return (
    <section className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 className={styles.blue}>EXPERIENCE {totalPeriod}</h2>
          </Col>
        </Row>
        {experiences &&
          experiences.length > 0 &&
          experiences.map((item, index) => {
            return <ExperienceItem key={index} item={item} />;
          })}
      </EmptyRowCol>
    </section>
  );
};
