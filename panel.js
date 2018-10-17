const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const St = imports.gi.St;

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
    }

};

class ButtonIcon extends St.Icon {
    constructor() {
        super();
        this.style_class = "system-run-symbolic";
        this.icon_name = "system-run-symbolic";
        this.icon_size = 25;
    }

};



let text, button;

function _hideHello() {
    Main.uiGroup.remove_actor(text);
    text = null;
}

function _showHello() {
    if (!text) {
        text = new St.Label({ style_class: 'helloworld-label', text: "Hello, world!" });
        Main.uiGroup.add_actor(text);
    }

    text.opacity = 255;

    let monitor = Main.layoutManager.primaryMonitor;

    text.set_position(monitor.x + Math.floor(monitor.width / 2 - text.width / 2),
                      monitor.y + Math.floor(monitor.height / 2 - text.height / 2));

    Tweener.addTween(text,
                     { opacity: 0,
                       time: 10,
                       transition: 'easeOutQuad',
                       onComplete: _hideHello });
}
