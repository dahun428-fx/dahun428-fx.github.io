import { skill } from "@/models/skill";
import { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./Skills.module.scss";

type Props = {
  item: skill;
  index: number;
};

export const SkillItem: React.FC<Props> = ({ item, index = 0 }) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    setIsMobileScreen(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { items } = item;
  const seperateItems = useMemo(() => {
    let result = [];
    let size = 3;
    for (let i = 0; i < item.items.length; i += size) {
      const array = item.items.slice(i, i + 3);
      result.push(array);
    }
    return result;
  }, [item]);

  return (
    <div>
      {index > 0 && <hr />}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 className={styles.gray}>{item.category}</h4>
        </Col>
        <Col sm={12} md={9}>
          {isMobileScreen ? (
            <Row className="mt-3 mt-md-0">
              <Col xs={12}>
                <ul>
                  {items &&
                    items.length > 0 &&
                    items.map((s, index) => {
                      return <li key={`skill_${s.title}_${index}`}>{s.title}</li>;
                    })}
                </ul>
              </Col>
            </Row>
          ) : (
            <Row className="mt-3 mt-md-0">
              {seperateItems.length > 0 &&
                seperateItems.map((skills, skillsIndex) => {
                  return (
                    <Col md={4} xs={12} key={`skillIndex_${skillsIndex}`}>
                      <ul>
                        {skills &&
                          skills.length > 0 &&
                          skills.map((s, index) => {
                            return <li key={`skill_${s.title}_${index}`}>{s.title}</li>;
                          })}
                      </ul>
                    </Col>
                  );
                })}
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};

SkillItem.displayName = "SkillItem";
