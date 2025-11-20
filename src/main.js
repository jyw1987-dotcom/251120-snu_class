
// 소개 저장 기능
const introText = document.getElementById('intro-text');
const introInput = document.getElementById('intro-input');
const saveIntroBtn = document.getElementById('save-intro');

// 저장된 소개 불러오기
const savedIntro = localStorage.getItem('my_intro');
if (savedIntro) {
  introText.textContent = savedIntro;
  introInput.value = savedIntro;
}

saveIntroBtn.addEventListener('click', () => {
  const value = introInput.value.trim();
  introText.textContent = value || '여기에 자기소개를 입력하세요.';
  localStorage.setItem('my_intro', value);
});

// 경력 추가 기능
const careerList = document.getElementById('career-list');
const careerInput = document.getElementById('career-input');
const addCareerBtn = document.getElementById('add-career');

function renderCareers() {
  const careers = JSON.parse(localStorage.getItem('my_careers') || '[]');
  careerList.innerHTML = '';
  careers.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = item;
    // 삭제 버튼
    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제';
    delBtn.style.marginLeft = '8px';
    delBtn.onclick = () => {
      careers.splice(idx, 1);
      localStorage.setItem('my_careers', JSON.stringify(careers));
      renderCareers();
    };
    li.appendChild(delBtn);
    careerList.appendChild(li);
  });
}

addCareerBtn.addEventListener('click', () => {
  const value = careerInput.value.trim();
  if (!value) return;
  const careers = JSON.parse(localStorage.getItem('my_careers') || '[]');
  careers.push(value);
  localStorage.setItem('my_careers', JSON.stringify(careers));
  careerInput.value = '';
  renderCareers();
});

// 저장된 경력 불러오기
renderCareers();
