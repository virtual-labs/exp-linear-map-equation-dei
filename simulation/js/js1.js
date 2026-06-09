
    function checkAnswer() {
      const ans1 = document.getElementById("if1").value;
      const ans2 = document.getElementById("if2").value;
      const ans3 = document.getElementById("if3").value;

      const resultEl = document.getElementById("result");

  if (ans1 === "" || ans2 === "" || ans3 === "") {
    resultEl.textContent = "⚠️ Please select all options.";
    resultEl.style.color = "orange";
    return;
  }

  // Collect and sort user answers
  const userAnswers = [ans1, ans2, ans3].sort();
  // Correct answers (order-independent)
  const correctAnswers = ["range", "onto", "zero"].sort();

  // Compare arrays
  const isCorrect = JSON.stringify(userAnswers) === JSON.stringify(correctAnswers);

  if (isCorrect) {
    resultEl.innerHTML = "<span style='color:black'>Answer:</span> ✅ Correct!";
    resultEl.style.color = "green";
  } else {
    resultEl.innerHTML =
      "<span style='color:black'>Answer:</span> ❌ Incorrect. Correct Answer: <i>b</i> &isin; Range(<i>T</i>) or <i>T</i> is onto or <i>b</i> = 0.";
    resultEl.style.color = "red";
  }
}

    function checkAnswer1() {
      
      const ans3 = document.getElementById("iff").value;
      const resultEl = document.getElementById("result1");

      if (ans3 === "") {
        resultEl.textContent = "⚠️ Please select the answer.";
        resultEl.style.color = "orange";
      }
      else if (ans3 === "range") {
        resultEl.innerHTML = "<span style='color:black'>Answer:</span>✅ Correct!";
        resultEl.style.color = "green";
      } 
      else {
        resultEl.innerHTML = "<span style='color:black'>Answer:</span>❌ Incorrect. Correct Answer: <i>b</i> &isin; Range(<i>T</i>).";
        resultEl.style.color = "red";
      }
    }
 


    function checkAnswer2() {
      const ans = document.getElementById("q2").value;
      const result = document.getElementById("result2");

      if (ans === "injective") {
        result.innerHTML = "<span style='color:black'>Answer:</span>✅ Correct!";
        result.style.color = "green";
      } else if (ans === "") {
        result.textContent = "⚠️ Please select an option.";
        result.style.color = "orange";
      } else {
        result.innerHTML = "<span style='color:black'>Answer:</span>❌ Incorrect. Correct Answer: <i>T</i> is one-to-one.";
        result.style.color = "red";
      }
    }

