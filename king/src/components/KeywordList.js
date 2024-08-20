import React, { useState } from "react";
import Modal from "./Modal";

function KeywordList() {
  const [keywords] = useState([
    { id: 1, name: "Keyword 1", description: "Description for Keyword 1" },
    { id: 2, name: "Keyword 2", description: "Description for Keyword 2" },
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
