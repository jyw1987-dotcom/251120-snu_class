


// 과학 질문 챗봇 기능
const chatbotForm = document.getElementById('chatbot-form');
const chatbotName = document.getElementById('chatbot-name');
const chatbotQuestion = document.getElementById('chatbot-question');
const chatbotAnswerBox = document.getElementById('chatbot-answer-box');

// 예시 답변 생성 함수 (실제 AI 연동 전용, 임시 랜덤/고정 답변)
function getScienceAnswer(question) {
  // 간단한 키워드 매칭 예시
  const q = question.toLowerCase();
  if (q.includes('빛')) return '빛은 파동과 입자의 이중성을 가지고 있습니다.';
  if (q.includes('중력')) return '중력은 질량을 가진 물체 사이에 작용하는 힘입니다.';
  if (q.includes('물')) return '물(H₂O)은 두 개의 수소 원자와 한 개의 산소 원자로 이루어져 있습니다.';
  if (q.includes('지구')) return '지구는 태양계의 세 번째 행성으로, 생명체가 존재하는 유일한 행성입니다.';
  if (q.includes('dna')) return 'DNA는 유전 정보를 저장하는 이중 나선 구조의 분자입니다.';
  // 기본 답변
  return '좋은 질문이에요! 아직 답변 데이터가 없지만, 곧 더 똑똑해질 거예요.';
}

chatbotForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = chatbotName.value.trim();
  const question = chatbotQuestion.value.trim();
  if (!name || !question) return;
  chatbotAnswerBox.style.display = 'block';
  chatbotAnswerBox.innerHTML = `<b>${name}</b>님의 질문:<br>“${question}”<br><br><span style="color:#4f8cff;">답변:</span> ${getScienceAnswer(question)}`;
  chatbotQuestion.value = '';
});
