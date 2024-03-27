import { Col, Row } from "react-bootstrap";
import { EmptyRowCol } from "@/components/ui/Common/EmptyRowCol";
import styles from "./Skills.module.scss";
import { skill } from "@/models/skill";
import { SkillItem } from "./SkillItem";

type Props = {
  skills: skill[];
};

export const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2>
              <span className={styles.blue}>SKILL</span>
            </h2>
          </Col>
        </Row>
        {skills &&
          skills.length > 0 &&
          skills.map((item, index) => {
            return <SkillItem item={item} index={index} key={index} />;
          })}
      </EmptyRowCol>
    </div>
  );
};

Skills.displayName = "Skills";
