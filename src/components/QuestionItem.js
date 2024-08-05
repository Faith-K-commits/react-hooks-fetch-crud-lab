import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  const handleDelete = () => {
    // Delete question on the server
    fetch(`http://localhost:3000/questions/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDelete(question))
      .catch((error) => {
        console.error("Error deleting question:", error);
      });
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
