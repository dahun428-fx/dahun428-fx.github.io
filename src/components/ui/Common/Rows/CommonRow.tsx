import { Col, Row } from "react-bootstrap";
import styles from "./CommonRow.module.scss";
import { commonRow } from "@/models/common/common";
import { CommonDescription } from "../Descriptions/CommonDescription";
import { v4 } from "uuid";
import { Badge } from "../../Badge";

type Props = {
  row: commonRow;
};

export const CommonRow: React.FC<Props> = ({ row }) => {
  const { index, leftTitle, leftSubTitle, rightDescriptions, rightSubTitle, rightTitle, rightSkillKeywords, link, link2 } = row;
  const option = {
    padding: !!(rightTitle || rightSubTitle),
  };

  const id = v4();

  return (
    <div>
      {index > 0 ? <hr /> : ""}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 className={styles.gray}>{leftTitle}</h4>
            </Col>
            {leftSubTitle ? <Col md={12}>{leftSubTitle}</Col> : ""}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {rightTitle && <h4>{rightTitle}</h4>}
          {rightSubTitle && <i className={styles.gray}>{rightSubTitle}</i>}
          {link && (
            <div>
              <a href={link} target="_blank">
                {link}
              </a>
            </div>
          )}

          {link2 && (
            <div>
              <a href={link2} target="_blank">
                {link2}
              </a>
            </div>
          )}
          {rightDescriptions && <CommonDescription descriptions={rightDescriptions} option={option} key={`${index}_${id}`} index={index} />}
          {rightSkillKeywords && rightSkillKeywords.length > 0 && (
            <ul>
              <li>
                <strong>스킬키워드</strong>
                <div>
                  {rightSkillKeywords &&
                    rightSkillKeywords.length > 0 &&
                    rightSkillKeywords.map((item, index) => {
                      return <Badge key={index} content={item} size="h6" theme="secondary" className="mr-1" />;
                    })}
                </div>
              </li>
            </ul>
          )}
        </Col>
      </Row>
    </div>
  );
};

CommonRow.displayName = "CommonRow";
