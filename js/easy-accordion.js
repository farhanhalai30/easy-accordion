function EasyAccordion(params) {
  this.params = {
    target: null,
    transitionDuration: 0.5,
    blockClass: null,
    triggerClass: null,
    contentClass: null,
    triggerActiveClass: null,
    contentActiveClass: null
  };
  this.updateParams(params);
  this.toggleAccordion = this.toggleAccordion.bind(this);
  this.initPlugin();
}

EasyAccordion.prototype = {
  constructor: EasyAccordion,

  updateParams: function(params) {
    if (params) {
      for (var key in params)
        if (this.params.hasOwnProperty(key)) this.params[key] = params[key];
    }
  },

  initPlugin: function() {
    var params = this.params;
    var target = document.getElementById(this.params.target);

    if (
      !target ||
      !params.blockClass ||
      !params.triggerClass ||
      !params.contentClass
    ) {
      console.error("ERROR: Some mandatory configs are missing");
      return;
    } else {
      this.addClass(target, "accordion-wrapper");
      var accBlock = target.getElementsByClassName(params.blockClass);

      //Adding onclick event listeners to accordion titles
      for (var i = 0; i < accBlock.length; i++) {
        accBlock[i]
          .getElementsByClassName(params.triggerClass)[0]
          .addEventListener("click", this.toggleAccordion);
        var contentElem = accBlock[i].getElementsByClassName(
          params.contentClass
        )[0];
        this.addWrapper(contentElem);

        var contentWrapElem = contentElem.parentNode;

        contentWrapElem.addEventListener("transitionstart", function() {
          if (this.style.height == this.offsetHeight + "px") {
            this.style.height = "0px";
          }
        });
        contentWrapElem.addEventListener("transitionend", function() {
          if (this.style.height != "0px") {
            this.style.height = "auto";
          }
        });

        contentWrapElem.style.height = "0px";

        // Default open check!!!
        if (this.hasClass(accBlock[i], "ea-active-block")) {
          contentWrapElem.style.height = contentWrapElem.scrollHeight + "px";
          if (params.triggerActiveClass)
            this.addClass(
              accBlock[i].getElementsByClassName(params.triggerClass)[0],
              params.triggerActiveClass
            );
          if (params.contentActiveClass)
            this.addClass(
              accBlock[i].getElementsByClassName(params.contentClass)[0],
              params.contentActiveClass
            );
        }

        contentWrapElem.style.transition =
          "height " + params.transitionDuration + "s linear";
        contentWrapElem.style.overflow = "hidden";
      }
    }
  },

  addWrapper: function(targetElem) {
    var parent = targetElem.parentNode;

    var wrapperElem = document.createElement("div");
    this.addClass(wrapperElem, "content-wrapper");
    parent.replaceChild(wrapperElem, targetElem);

    wrapperElem.appendChild(targetElem);
  },

  hasClass: function(el, className) {
    if (el.classList) return el.classList.contains(className);
    return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
  },

  addClass: function(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!this.hasClass(el, className)) el.className += " " + className;
  },

  removeClass: function(el, className) {
    if (el.classList) el.classList.remove(className);
    else if (this.hasClass(el, className)) {
      var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
      el.className = el.className.replace(reg, " ");
    }
  },

  toggleAccordion: function(event) {
    var parent = event.target.parentElement;
    var content = parent.getElementsByClassName("content-wrapper")[0];
    var contentHeight = content.scrollHeight;
    var params = this.params;

    if (this.hasClass(parent, "ea-active-block")) {
      this.removeClass(parent, "ea-active-block");

      if (params.triggerActiveClass)
        this.removeClass(
          parent.getElementsByClassName(params.triggerClass)[0],
          params.triggerActiveClass
        );
      if (params.contentActiveClass)
        this.removeClass(
          parent.getElementsByClassName(params.contentClass)[0],
          params.contentActiveClass
        );
      content.style.height = contentHeight + "px";

      var event = document.createEvent("Event");
      event.initEvent("transitionstart", true, true);
      content.dispatchEvent(event);
    } else {
      this.addClass(parent, "ea-active-block");
      if (params.triggerActiveClass)
        this.addClass(
          parent.getElementsByClassName(params.triggerClass)[0],
          params.triggerActiveClass
        );
      if (params.contentActiveClass)
        this.addClass(
          parent.getElementsByClassName(params.contentClass)[0],
          params.contentActiveClass
        );
      content.style.height = contentHeight + "px";
    }
  }
};
