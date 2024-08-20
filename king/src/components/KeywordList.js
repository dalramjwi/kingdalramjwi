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
