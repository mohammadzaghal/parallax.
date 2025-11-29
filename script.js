// Whenever the window scrolls, update all parallax elements
$(window).on('scroll', function () {
  const scrolled = $(this).scrollTop();

  $('[data-speed]').each(function () {
    const speed = parseFloat($(this).attr('data-speed')) || 0;

    // Move based on speed. Negative so it moves opposite to scroll direction.
    const translateY = scrolled * -speed;

    // Using transform is smoother than updating "top" directly
    $(this).css('transform', 'translateY(' + translateY + 'px)');
  });
});
