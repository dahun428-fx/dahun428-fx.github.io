import { Col, Row } from "react-bootstrap";
import styles from "./CommonRow.module.scss";
import { commonRow } from "@/models/common/common";
import { CommonDescription } from "../Descriptions/CommonDescription";
import { v4 } from "uuid";

type Props = {
  row: commonRow;
};

export const CommonRow: React.FC<Props> = ({ row }) => {
  const { index, leftTitle, leftSubTitle, rightDescriptions, rightSubTitle, rightTitle } = row;
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
          {rightDescriptions && <CommonDescription descriptions={rightDescriptions} option={option} key={`${index}_${id}`} index={index} />}
        </Col>
      </Row>
    </div>
  );
};

CommonRow.displayName = "CommonRow";
