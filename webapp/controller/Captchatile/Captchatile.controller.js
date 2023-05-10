sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("com.exam.youtubeproject.controller.Captchatile.Captchatile", {
  
      onValid:function(oEvent){
        alert(`Valid Captcha ${oEvent.getParameter("value")}`)
      }
    });
  });