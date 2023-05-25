let index = 0;
const totalWorkItems = $(".work-item").length;

$(document).ready(function () {
  // set lightbox-img max-height
  const wHeight = $(window).height();
  $(".lightbox-img").css("max-height", wHeight + "px");

  $("work-item-inner").click(function () {
    index = $(this).parent(".work-item").index();
    $(".lightbox").addClass("open");
    lightboxSlideShow();
  });
});

function lightboxSlideShow() {
  const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
  const categories = $(".work-item").eq(index).find("h4").html();
  $(".lightbox-img").attr("src", imgSrc);
  $(".lightbox-categories").html(categories);
}
