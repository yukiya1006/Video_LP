const menuToggle = document.querySelector('.toggle');
const showCase = document.querySelector('.showcase');
const menuList = document.querySelector('.menu'); 

menuToggle.addEventListener('click', () => {
// toggle関数で対象にactiveを付加する
showCase.classList.toggle('active');
menuToggle.classList.toggle('active');
});

menuList.addEventListener('click', () => {
  // toggle関数で対象にactiveを付加する
  showCase.classList.remove('active');
  });


