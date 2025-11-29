$(window).on('scroll', function () {
  const scrolled = $(this).scrollTop();

  $('[data-speed]').each(function () {
    const speed = parseFloat($(this).attr('data-speed')) || 0;

    const translateY = scrolled * -speed;

    $(this).css('transform', 'translateY(' + translateY + 'px)');
  });
});
