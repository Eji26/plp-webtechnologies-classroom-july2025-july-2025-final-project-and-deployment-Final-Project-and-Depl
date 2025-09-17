document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',function(){
      nav.classList.toggle('show');
    });
  }

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){
        status.textContent = 'Please complete all fields.';
        status.style.color = 'red';
        return;
      }
      status.textContent = 'Message sent (demo). Thank you!';
      status.style.color = 'green';
      form.reset();
    });
  }
});
