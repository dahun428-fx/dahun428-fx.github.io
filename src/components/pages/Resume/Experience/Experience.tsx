import { Badge } from "@/components/ui/Badge";
import { Col, Row } from "react-bootstrap";
import styles from "./Experience.module.scss";
import { EmptyRowCol } from "@/components/ui/Common/EmptyRowCol";
import { useCallback, useMemo } from "react";
import { experience } from "@/models/experience";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { ExperienceItem } from "./ExperienceItem";

type Props = {
  experiences: experience[];
};

export const Experience: React.FC<Props> = ({ experiences }) => {
  const getFormattingExperienceTotalDuration = useCallback(() => {
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
  }, [experiences]);

  const totalPeriod = useMemo(() => {
    return <Badge content={getFormattingExperienceTotalDuration()} size="h6" theme="secondary" />;
  }, [getFormattingExperienceTotalDuration, experiences]);

  return (
    <section className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 className={styles.blue}>경력사항 {totalPeriod}</h2>
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
