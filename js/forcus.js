/* contact input forcus */
$("input,textarea").focus(function () {
  $(this)
    .parents(".text")
    .addClass("forcused");
});
$("input,textarea").blur(function () {
  var $this = $(this);
  if ($this.val()) {
    $this.parents(".text").addClass("forcused");
  } else {
    $this.parents(".text").removeClass("forcused");
  }
});
