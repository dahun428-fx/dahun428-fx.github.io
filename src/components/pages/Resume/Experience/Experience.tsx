import { Badge } from "@/components/ui/Badge";
import { Contents } from "@/components/ui/Contents";
import { Title } from "@/components/ui/Title";
import { Col, Row } from "react-bootstrap";
import styles from "./Experience.module.scss";
import { date } from "@/utils/date";

export const Experience: React.FC = () => {
  const startDate = date("2012.02");

  return (
    <section>
      <div className="mt-5">
        <Row>
          <Col>
            <Row className="pb-3">
              <Col>
                <Title title="EXPERIENCE" />
                <Badge content="총 4년 3개월" size="h3" theme="secondary" />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={3}>
                <Row>
                  <Col md={12} className="col-7">
                    <h4 className={styles.date}>{startDate} ~</h4>
                  </Col>
                  <Col md={12} className="col-5">
                    <Badge content="재직중" size="h6" theme="primary" />
                    <Badge content="3년 2개월" size="h6" theme="info" />
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={9}>
                <h4>네이버</h4>
                <i className={styles.act}>개발자</i>
                <ul className="pt-3">
                  <li>예시</li>
                  <li>예시</li>
                  <li>예시</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};
