import { Col, Row } from "react-bootstrap";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import { EmptyRowCol } from "@/components/ui/Common/EmptyRowCol";

type Props = {
  latestUpdatedAt: string;
};

export const Footer: React.FC<Props> = ({ latestUpdatedAt }) => {
  return (
    <Row>
      <Col className={styles.footerCover}>
        <div className={classNames(styles.footer, "text-center mt-2")}>
          <EmptyRowCol>
            <small>
              Created by JungDahun
              <br />
              Final update Date : {latestUpdatedAt}
            </small>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
};

Footer.displayName = "Footer";
