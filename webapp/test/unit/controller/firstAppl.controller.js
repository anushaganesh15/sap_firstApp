/*global QUnit*/

sap.ui.define([
	"firstapplctn/controller/firstAppl.controller"
], function (Controller) {
	"use strict";

	QUnit.module("firstAppl Controller");

	QUnit.test("I should test the firstAppl controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
