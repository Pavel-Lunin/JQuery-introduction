$(document).ready(function () {
  $('.list-item:first').hover(function () {
    $(this).toggleClass('active');
  });

  //взять второй элемент через класс .list-item и фильтр:eq(2)
  //навесить событие через метод .on
  //внутри указываем то, что будем делать
  $('.list-item:eq(2)').on('click', function () {
    $('.image:even').fadeToggle('slow');
  });

  $('.list-item:eq(4)').on('click', function () {
    $('.image:odd').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 3000);
  });
});