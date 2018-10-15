//Importing Native Modules 
const ExtensionUtils = imports.misc.extensionUtils;
const ME = ExtensionUtils.getCurrentExtension();
const panel = ME.imports.panel;


const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;



function init() {
   panel._showHello();
}

function enable() {

}

function disable() {

}
