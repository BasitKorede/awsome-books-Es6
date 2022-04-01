
const listLink = document.getElementById('list');
const formLink = document.getElementById('add-new');
const contactLink = document.getElementById('contact');

const list = document.getElementById('list-section');
const formSection = document.getElementById('add-new-section');
const contactSection = document.getElementById('contact-section');

export const exportNav = () => {
formSection.style.display = 'none';
contactSection.style.display = 'none';

listLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
  list.style.display = 'block';
});

formLink.addEventListener('click', () => {
  formSection.style.display = 'block';
  contactSection.style.display = 'none';
  list.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  contactSection.style.display = 'block';
  list.style.display = 'none';
});

  const navigatePage = () => {
    const navLists = document.querySelectorAll('.nav-list-item');
    const handleNavigation = (event) => {
      if (event.target.classList.contains('active')) {
        return false;
      }
  
      document.querySelector('.nav-list-item.active').classList.remove('active');
      event.target.classList.add('active');
      document.querySelector('section.active').classList.remove('active');
      document
        .querySelector(`#${event.target.id}-section`)
        .classList.add('active');
      return true;
    };
  
    navLists.forEach((navlist) => {
      navlist.addEventListener('click', handleNavigation);
    });
  };
  navigatePage();
}