var observer = new IntersectionObserver(
  function(entries) {
      if (entries[0].isIntersecting === true && document.body.clientWidth  > 700) {
      scrollIn(entries[0].target.id);
    }
  },
  { threshold: [0] }
);

var scrollIn = function(id) {
  console.log(id);
  const el = document.querySelector(`a[href='#${id}']`);

  if (el) {
    var elems = document.querySelectorAll("#table-of-contents a");

    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    el.classList.add("active");
    el.scrollIntoViewIfNeeded();
  }
};
window.addEventListener("load", event => {
  document.querySelectorAll("[id^='org']").forEach(el => observer.observe(el));
  console.log("page is fully loaded");
});
