//Importing Native Modules 
const ExtensionUtils = imports.misc.extensionUtils;
const ME = ExtensionUtils.getCurrentExtension();
const panel = ME.imports.panelButton;
const Main = imports.ui.main;


class Extension {
constructor() {}


 enable() {

        this.panelButton = new panel.Button();
        Main.panel._rightBox.insert_child_at_index(this.panelButton, 0);
        panel._showHello();
 }


 disable() {
 Main.panel._rightBox.remove_child(this.panelButton);
 }

}

function init() {
    return new Extension();
}



