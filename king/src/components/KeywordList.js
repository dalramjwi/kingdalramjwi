import React, { useState } from "react";
import Modal from "./Modal";

function KeywordList() {
  const [keywords] = useState([
    {
      id: 1,
      name: "프로크루스테스",
      description:
        "그리스 로마 신화에서의 등장인물이다. 지나가는 여행객을 대접하고, 침대가 있다며 눕게 한 뒤 키가 크다면 남는 부위를 자르고, 키가 작다면 강제로 늘리는 행위를 했다. 심리학 용어로, 프로크루스테스의 침대라는 말이 존재한다. 이는 다른 사람의 생각을 자신의 기준에 억지로 맞추려는 독단적 태도를 나타낸다.",
    },
    {
      id: 2,
      name: "길로틴",
      description:
        "우리 나라 말로 단두대라고도 한다. 프랑스 혁명의 상징인 이것은, 잔인해보이지만 단 칼에 목을 잘라주는 사형도구로 의외로 인도적 사형도구라고 한다.",
    },
    {
      id: 3,
      name: "소크라테스, 플라톤, 아리스토텔레스",
      description:
        "소크라테스는 성선설을 주장하며, 인간이 진정으로 지식을 알게 되면 선해질 것이라고 믿었다. 반면, 플라톤은 이와 달리 인간의 본성은 본래 선하지 않다고 보았으며, 선에 대한 지식을 통해 선해질 수 있다고 주장했다. 아리스토텔레스는 인간의 행동이 '행복'을 목표로 한다고 보았고, 이 '행복'은 '덕'에 의해 이루어진다고 설명했다.",
    },
    {
      id: 4,
      name: "심리적 실명",
      description:
        "심리적 실명은 실제로는 신체적으로 문제가 없지만, 극단적인 심리적 스트레스나 충격으로 인해 시력을 잃은 것처럼 느끼는 상태를 말한다. 이 현상은 심리적 원인으로 인해 시각 기능이 일시적으로 상실되거나 심각하게 제한될 수 있으며, 신경학적 검사에서는 뚜렷한 이상이 발견되지 않는 경우가 많다. 이는 심리적 스트레스가 신체 증상으로 나타나는 예시로, 강한 스트레스가 몸에 다양한 영향을 미칠 수 있다는 것을 보여준다.",
    },
    {
      id: 5,
      name: "강아지의 발 며느리발톱",
      description:
        "강아지의 특정 품종은 앞발과 뒷발 모두에 '며느리발톱'이 존재할 수 있다. 이 발톱은 발의 외부에 위치하여 자주 잘리지 않지만, 관리가 필요하며, 일부 강아지에게는 발톱이 선천적으로 더 많을 수 있다.",
    },
  ]);

  const [selectedKeyword, setSelectedKeyword] = useState(null);

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
  };

  const handleCloseModal = () => {
    setSelectedKeyword(null);
  };

  return (
    <div>
      <ul>
        {keywords.map((keyword) => (
          <li key={keyword.id} onClick={() => handleKeywordClick(keyword)}>
            {keyword.name}
          </li>
        ))}
      </ul>
      {selectedKeyword && (
        <Modal keyword={selectedKeyword} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default KeywordList;
