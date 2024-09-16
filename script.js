let index = 1;
setInterval(() => {
  index++;
  if (index === 4) {index = 1;}
  switchTo(index);
}, 5000);

function switchTo(index) {
  switch(index) {
    case 1: {
      document.getElementById('one').classList.replace('inactive', 'active');
      document.getElementById('two').classList.replace('active', 'inactive');
      document.getElementById('three').classList.replace('active', 'inactive');
      break;
    }
    case 2: {
      document.getElementById('one').classList.replace('active', 'inactive');
      document.getElementById('two').classList.replace('inactive', 'active');
      document.getElementById('three').classList.replace('active', 'inactive');
      break;
    }
    case 3: {
      document.getElementById('one').classList.replace('active', 'inactive');
      document.getElementById('two').classList.replace('active', 'inactive');
      document.getElementById('three').classList.replace('inactive', 'active');
      break;
    }
  }
}