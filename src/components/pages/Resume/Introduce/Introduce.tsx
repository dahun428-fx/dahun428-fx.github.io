import { Col, Row } from "react-bootstrap";
import styles from "./Introduce.module.scss";
import { Contents } from "@/components/ui/Contents";

export const Introduce: React.FC = () => {
  return (
    <Contents title="INTRODUCE">
      <>
        <p>웹 서비스 풀스택 개발 전문가를 목표로 다양한 프로젝트와 경험을 쌓아나가고 있습니다. Javascript, jQuery, React.js, Next.js 등을 사용하여 실무에서 프론트 엔드의 전문성을 키웠고, Php, Java, MySQL, AWS, Docker, Linux 등 실무와 사이드 프로젝트 수행으로 기술 향상을 위해 지속적으로 노력하고 있습니다.</p>
        <p> 저의 가장 큰 장점은 기존 소스코드 분석과 파악력입니다. 이는 프로그램의 오류 및 버그 감소를 의미하고 클라이언트의 추가 요구사항 처리에도 능숙하게 대처할 수 있다는 것입니다. 프로그램의 코드 품질 향상에 기여하고 유지보수 용이성을 위해 면밀히 업무하는 태도를 갖고 있습니다.</p>
        <p> 서비스 개발 시에 능동적으로 개발하려고 노력합니다. 효율적이고 수준 높은 프로그램 개발을 위해, 팀원 및 비즈니스 관계자들과 커뮤니케이션을 지속하며 새로운 대안을 찾기 위해 능동적인 업무 태도를 함양하고 있습니다. 완성도 높은 프로그램 창출로 좋은 성과를 창출하는 것이 제가 개발자로서 추구하는 것입니다. 가치 높은 프로그램 창출을 위해 지속적인 노력으로 성장해 나아가고 있습니다.</p>
      </>
    </Contents>
  );
};

Introduce.displayName = "Introduce";
