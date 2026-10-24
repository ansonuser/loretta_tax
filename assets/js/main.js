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
const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `[Website Inquiry] ${f.get('status')} - ${f.get('name')}`;
  const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nState: ${f.get('state')}\nVisa/Tax Status: ${f.get('status')}\n\n${f.get('message')}`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
