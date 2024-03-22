import { Col, Image, Row } from "react-bootstrap";
import styles from "./BriefTop.module.scss";
import myImage from "./assets/images/my-image.jpg";
import classNames from "classnames";

export const BriefTop: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="mt-5">
        <Row>
          <Col sm={12} md={3}>
            <div className={classNames("pb-3 text-center")}>
              <Image src={myImage.src} rounded fluid alt={`profile`} />
            </div>
          </Col>
          <Col sm={12} md={9}>
            <Row>
              <Col className={classNames(styles.nameWrap)}>
                <h1 className={styles.name}>정다훈</h1>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <Row className="pb-2">
                  <div className="col-1 text-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mailbox-flag" viewBox="0 0 16 16">
                      <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8zM5 7c0 .334-.164.264-.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0" />
                      <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3" />
                    </svg>
                  </div>
                  <div className="col-auto">
                    <a href="mailto:rubcustomer@gmail.com">rubcustomer@gmail.com</a>
                  </div>
                </Row>
                <Row className="pb-2">
                  <div className="col-1 text-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </div>
                  <div className="col-auto">
                    <a href="https://github.com/dahun428-fx">https://github.com/dahun428-fx</a>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

BriefTop.displayName = "BriefTop";
