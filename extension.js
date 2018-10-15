//Importing Native Modules 
const ExtensionUtils = imports.misc.extensionUtils;
const ME = ExtensionUtils.getCurrentExtension();
const panel = ME.imports.panel;
const Main = imports.ui.main;


class Extension {
constructor() {}


 enable() {

        this.button = new panel.Button();
        this.icon = new panel.ButtonIcon();
        // Add icon inside the button
this.button.set_child(this.icon);
  panel._showHello();
Main.panel._rightBox.insert_child_at_index(this.button, 0);
 }


 disable() {
 Main.panel._rightBox.remove_child(this.button);
 }

}

function init() {
    return new Extension();
}



