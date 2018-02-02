/* blaurancin - septembre 2017 */
window.onload = function() {
  
    var classeAnim = "zoomInLeft";
  
    function anim(ca) {
     var count = 0;
     var paths = document.querySelectorAll("path");
        paths.forEach(function(path) {
          path.style.visibility = "hidden";//
          path.classList = "";
          setTimeout(function() {
                path.classList.add("animated");
                path.classList.add(ca);
                path.style.visibility = "visible";
          }, count);
           count+=20;
        })
    }
  
    setTimeout(function() {        
      anim(classeAnim);
   }, 1000);
     
   document.querySelector("select").onchange = function() {
     classeAnim = this.options[this.selectedIndex].value;
   };

  document.querySelector(".butt").onclick = function(e)   {
    e.preventDefault();
    anim(classeAnim);
  };
}
