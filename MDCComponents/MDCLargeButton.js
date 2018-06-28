import { VDOM } from "../VirtualDOM";

class MDCLargeButton extends VDOM.Component {
    constructor(props = { onclick : () => { alert(); } }) {
        super(props);
        this.states = {};
    };

    render() {
        return (
            <div class="avo-create-class-button mdc-elevation--z2 mdc-typography--body1" style="vertical-align: middle;" onclick={this.props.onclick}>
                <i class="material-icons" 
                    aria-hidden="true" 
                    style="margin-right: 5px; vertical-align: middle;"
                >
                    add_circle_outline
                </i>
                Create Class
            </div>
        );
    };
};