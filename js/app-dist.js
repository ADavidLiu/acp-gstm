<<<<<<< HEAD
"use strict";function _classCallCheck(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}var Header=function t(){var s=this;_classCallCheck(this,t),this.toggleMenu=function(){s.$DOM.btn.toggleClass(s.selectors.btn.split(".")[1]+"--active"),s.$DOM.nav.toggleClass(s.selectors.nav.split(".")[1]+"--active")},this.selectors={btn:".nav-btn",nav:".wrapper__nav"},this.$DOM={btn:$(this.selectors.btn),nav:$(this.selectors.nav)},this.$DOM.btn.click(this.toggleMenu)};$(document).ready(function(){$("body").bootstrapMaterialDesign();new Header});
=======
"use strict";$(document).ready(function(){$("body").bootstrapMaterialDesign()});
>>>>>>> origin/master
//# sourceMappingURL=app-dist.js.map