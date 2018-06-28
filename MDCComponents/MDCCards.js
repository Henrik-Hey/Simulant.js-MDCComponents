import { Simulant } from '../SimulantDOM';

export function MDCFullBleedCard(props) {  
    return (
        <div class="mdc-card">
            <h2 style="padding: 8px;">{props.title}</h2>
            <div style="padding: 8px;">
                {props.children}
            </div>
            <div class="mdc-card__actions mdc-card__actions--full-bleed">
                <a class="mdc-button mdc-card__action mdc-card__action--button" onClick={() => props.onClick()}>
                    {props.action}
                    <i class="material-icons" aria-hidden="true">arrow_forward</i>
                </a>
            </div>
        </div>
    );
};

export function MDCCard(props) {
    return (
        <div class="mdc-card">
            <h2 style="padding: 8px;">{props.title}</h2>
            <div style="padding: 8px;">
                {props.children}
            </div>
            <div class="mdc-card__actions">
                
            </div>
        </div>
    );
};