"use strict"

const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const St = imports.gi.St;


// Button Container
class Button extends St.Bin {
    constructor() {
        super();
        this.style_class = "panel-button";
        this.reactive = true;
        this.can_focus = true;
        this.x_fill = true;
        this.y_fill = false;
        this.track_hover = true;

	// Add icon inside the button
	this.set_child(new ButtonIcon());
	
	// Execute _showHello function
        this.connect('button-press-event', _showHello);
    }

};


// Button Icon (widget placed into Button Container)
class ButtonIcon extends St.Icon {
    constructor() {
        super();
        this.style_class = "system-run-symbolic";
        this.icon_name = "system-run-symbolic";
        this.icon_size = 25;
    }

};



// We need to create Label to display a text
// Which later we position on the center of the Monitor
class LabelWidget extends St.Label {
    constructor() {
        super();
        this.style_class = "helloworld-label";
        this.text = "Hello, world!";
    }
};



let LabelWithText;

function _showHello() {
    if (!LabelWithText) {
        LabelWithText = new LabelWidget();
        Main.uiGroup.add_actor(LabelWithText);
    }

    LabelWithText.opacity = 255;

    let monitor = Main.layoutManager.primaryMonitor;

    LabelWithText.set_position(monitor.x + Math.floor(monitor.width / 2 - LabelWithText.width / 2),
                      monitor.y + Math.floor(monitor.height / 2 - LabelWithText.height / 2));

    Tweener.addTween(LabelWithText,
                     { opacity: 0,
                       time: 10,
                       transition: 'easeOutQuad',
                       onComplete: _hideHello });
}

function _hideHello() {
    Main.uiGroup.remove_actor(LabelWithText);
    LabelWithText = null;
}
