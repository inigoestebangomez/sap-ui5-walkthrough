sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"ui5/walkthrough/model/formatter"
], (Controller, JSONModel, formatter) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
		formatter: formatter,
		onInit() {
			//console.log("Componente:", this.getOwnerComponent());
			const oViewModel = new JSONModel({
				currency: "LERINES"
			});
			this.getView().setModel(oViewModel, "view");
		}
	});
});