// Quiz.js
const quizData = {
  question: "モンスターハンターワイルズに登場したモンスターはどれ",
  choices: ["ゼノジーバ", "イヤンクック", "ショウグンキザミ", "ジンオウガ"],
  correctIndex: 2
};

const questionElement = document.getElementById("question");
const choiceButtons = document.querySelectorAll(".choice");
const resultElement = document.getElementById("result");

// クイズ表示
questionElement.textContent = quizData.question;
choiceButtons.forEach((btn, index) => {
  btn.textContent = quizData.choices[index];
  btn.addEventListener("click", () => {
    if (index === quizData.correctIndex) {
      resultElement.textContent = "正解です！";
    } else {
      resultElement.textContent = "不正解です。";
    }
  });
});
