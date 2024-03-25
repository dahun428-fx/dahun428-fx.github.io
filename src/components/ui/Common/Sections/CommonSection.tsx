import { Col, Row } from "react-bootstrap";
import { EmptyRowCol } from "../EmptyRowCol";
import { ReactNode } from "react";
import styles from "./CommonSection.module.scss";

type Props = {
  title: string;
  children: ReactNode;
};

export const CommonSection: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 className={styles.blue}>{title}</h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
};

CommonSection.displayName = "CommonSection";
