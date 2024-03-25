import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

type Props = {
  children?: ReactNode;
};

export const EmptyRowCol: React.FC<Props> = ({ children }) => {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
};

EmptyRowCol.displayName = "EmptyRowCol";
