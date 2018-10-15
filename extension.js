//Importing Native Modules 
const ExtensionUtils = imports.misc.extensionUtils;
const ME = ExtensionUtils.getCurrentExtension();
const panel = ME.imports.panel;


class Extension {
constructor() {}


 enable() {
  panel._showHello();
 }


 disable() {

 }

}

function init() {
    return new Extension();
}



