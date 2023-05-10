sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.exam.youtubeproject.controller.Main", {
            

            countdown:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Countdown");
            },
            covid:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Covid");
            },
            vacc:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Vacc");
            },
            portfolio:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Portfolio");
            },
            salesorder:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("SalesOrder");
            },
            barcode:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Barcode");
            },
            cardtile:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Cardtile");
            },
            captchatile:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Captchatile");
            }
        });
    });
