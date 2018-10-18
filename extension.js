"use strict"
//Importing Native Modules 
const ExtensionUtils = imports.misc.extensionUtils;
const ME = ExtensionUtils.getCurrentExtension();

//Importing from current extension's folder.
const PanelButton = ME.imports.PanelButton;

//Importing Gnome UI
const Main = imports.ui.main;

class Extension {
    constructor() {
	
	// Create new Button from . /PanelButton.js
        this.button = new PanelButton.Button;
    }


    enable() {

	// Assign the Button to the rightBox of Gnome-Top-Panel
        Main.panel._rightBox.insert_child_at_index(this.button, 0);

	// Show Hello Automatically when Extension is enabled 
        PanelButton._showHello();
    }


    disable() {
        Main.panel._rightBox.remove_child(this.button);
    }

}

function init() {
    return new Extension();
}

