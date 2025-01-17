console.log("Formatter.js cargado correctamente")
sap.ui.define([], () => {
	"use strict";

	return {
		statusText(sStatus) {
			console.log("Status recibido:", sStatus)
			const oResourceBundle = this.getOwnerComponent()
			.getModel("i18n")
			.getResourceBundle();
			//console.log("ResourceBundle:", oResourceBundle);
			switch (sStatus) {
				case "A":
					return oResourceBundle.getText("invoiceStatusA");
				case "B":
					return oResourceBundle.getText("invoiceStatusB");
				case "C":
					return oResourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		}
	};
});