/* global QUnit */
QUnit.config.autostart = false;
/* comment*/
sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/businesspartners/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
