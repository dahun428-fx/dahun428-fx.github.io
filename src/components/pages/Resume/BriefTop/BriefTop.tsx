import { Col, Image, Row } from "react-bootstrap";
import styles from "./BriefTop.module.scss";
import myImage from "./assets/images/my-image.jpg";
import classNames from "classnames";
import { profile } from "@/models/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  profile: profile;
};

export const BriefTop: React.FC<Props> = ({ profile }) => {
  if (!profile) {
    return null;
  }

  const { contact, image, name } = profile;

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
                <h1 className={styles.name}>{name.title ?? ""}</h1>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                {contact &&
                  contact.length > 0 &&
                  contact.map((item, index) => {
                    return (
                      <Row className="pb-2" key={index}>
                        <div className="col-1 text-right">
                          <FontAwesomeIcon icon={item.icon} />
                        </div>
                        <div className="col-auto">
                          <a href={item.link}>{item.title}</a>
                        </div>
                      </Row>
                    );
                  })}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

BriefTop.displayName = "BriefTop";
