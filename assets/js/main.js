const nav = document.getElementById('nav');
const btn = document.getElementById('menu-btn');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') nav.classList.remove('open');
});

// 聯絡表單:以 mailto 寄出,不需後端。日後可改接 Formspree 等服務。
const EMAIL = 'loretta@apexglobaltax.com';
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `[網站諮詢] ${f.get('topic')} - ${f.get('name')}`;
  const body = `姓名:${f.get('name')}\nEmail:${f.get('email')}\n諮詢主題:${f.get('topic')}\n\n${f.get('message')}`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
