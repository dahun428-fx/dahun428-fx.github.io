import { Col, Row } from "react-bootstrap";
import { Contents } from "@/components/ui/Contents";
import { useMemo } from "react";

export const Skills: React.FC = () => {
  const myLanguage: string[] = useMemo(() => {
    return ["Java", "Javascript", "Typescript", "HTML/CSS", "PHP", "Scss", "Stylus"];
  }, []);

  const FameworksAndLibraries: string[] = useMemo(() => {
    return ["Node.js", "Next.js", "React.js", "Redux", "StoryBook", "Spring Boot", "Spring Framework", "RxJs", "jQuery"];
  }, []);

  const InfrastructureAndDatabases: string[] = useMemo(() => {
    return ["AWS", "MySQL", "Oracle", "Azure", "RestfulAPI"];
  }, []);

  const ToolsAndIDEs: string[] = useMemo(() => {
    return ["VS Code", "Jira", "Git", "Github", "Bitbucket", "Jenkins", "IDEA", "Vercel", "Datadog"];
  }, []);

  const ETC: string[] = useMemo(() => {
    return ["Ubuntu ( Linux )", "Docker"];
  }, []);

  return (
    <Contents title="SKILL">
      <Row>
        <Contents title="Language" theme="sub">
          <div className="mt-2 mt-md-0 row">
            <Col className="col-12">
              <ul>
                {myLanguage &&
                  myLanguage.length > 0 &&
                  myLanguage.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
              </ul>
            </Col>
          </div>
        </Contents>
        <Contents title="Fameworks & Libraries" theme="sub">
          <div className="mt-2 mt-md-0 row">
            <Col className="col-12">
              <ul>
                {FameworksAndLibraries &&
                  FameworksAndLibraries.length > 0 &&
                  FameworksAndLibraries.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
              </ul>
            </Col>
          </div>
        </Contents>
        <Contents title="Infrastructure & Databases" theme="sub">
          <div className="mt-2 mt-md-0 row">
            <Col className="col-12">
              <ul>
                {InfrastructureAndDatabases &&
                  InfrastructureAndDatabases.length > 0 &&
                  InfrastructureAndDatabases.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
              </ul>
            </Col>
          </div>
        </Contents>
        <Contents title="Tools & IDEs" theme="sub">
          <div className="mt-2 mt-md-0 row">
            <Col className="col-12">
              <ul>
                {ToolsAndIDEs &&
                  ToolsAndIDEs.length > 0 &&
                  ToolsAndIDEs.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
              </ul>
            </Col>
          </div>
        </Contents>
        <Contents title="ETC" theme="sub">
          <div className="mt-2 mt-md-0 row">
            <Col className="col-12">
              <ul>
                {ETC &&
                  ETC.length > 0 &&
                  ETC.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
              </ul>
            </Col>
          </div>
        </Contents>
      </Row>
    </Contents>
  );
};

Skills.displayName = "Skills";
