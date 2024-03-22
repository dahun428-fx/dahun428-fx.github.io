import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./Contents.module.scss";
import { Title } from "@/components/ui/Title";
import { Theme } from "@/components/ui/Title";

type Props = {
  title?: string;
  theme?: Theme;
  children: ReactNode;
};

export const Contents: React.FC<Props> = ({ children, title, theme }) => {
  return (
    <section>
      <div className="mt-5">
        <Row>
          <Col sm={12} md={3}>
            <Title title={title} theme={theme} />
          </Col>
          <Col sm={12} md={9} className={styles.context}>
            {children}
          </Col>
        </Row>
      </div>
    </section>
  );
};

Contents.displayName = "Contents";
