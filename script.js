

document.getElementById('toggle__burger').addEventListener('click', function(){
    document.getElementById('menu__burger').classList.toggle('collapsed')
    document.getElementById('menu__burger_list').classList.toggle('hidden')
    document.getElementById('toggle__burger').classList.toggle('clicked')
  });
