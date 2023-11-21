import { createRoot } from 'react-dom/client';
import './index.css';
import { ChipDirective, ChipListComponent, ChipsDirective } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { useEffect } from 'react';


const Default = () => {
    return (<div>
            <div className="control-section">
                <div id="chip-default-wrapper">
                    <div className="chips-headers">Chips</div>

                    <div className="sample-padding">
                        {/* initialize default chip component */}
                        <ChipListComponent id="chip-default">
                            <ChipsDirective>
                                <ChipDirective text="Apple" cssClass="e-primary"></ChipDirective>
                                <ChipDirective text="Microsoft" cssClass="e-info"></ChipDirective>
                                <ChipDirective text="Google" cssClass="e-success"></ChipDirective>
                                <ChipDirective text="Tesla" cssClass="e-warning"></ChipDirective>
                                <ChipDirective text="Intel" cssClass="e-danger"></ChipDirective>
                            </ChipsDirective>
                        </ChipListComponent>
                    </div>

                    <div className="separator"></div>

                    <div className="chips-headers">Input Chips</div>

                    <div className="sample-padding">
                        {/* initialize avatar chip component */}
                        <ChipListComponent id="chip-avatar" enableDelete={true}>
                            <ChipsDirective>
                                <ChipDirective text="Anne" leadingIconCss="anne"></ChipDirective>
                                <ChipDirective text="Janet" leadingIconCss="janet"></ChipDirective>
                                <ChipDirective text="Laura" leadingIconCss="laura"></ChipDirective>
                                <ChipDirective text="Margaret" leadingIconCss="margaret"></ChipDirective>
                            </ChipsDirective>
                        </ChipListComponent>
                    </div>

                    <div className="separator"></div>

                    <div className="chips-headers">Filter Chips</div>

                    <div className="sample-padding">
                        {/* initialize filter chip component */}
                        <ChipListComponent id="chip-filter" selectedChips={[1, 3]} selection="Multiple">
                            <ChipsDirective>
                                <ChipDirective text="Extra small"></ChipDirective>
                                <ChipDirective text="Small"></ChipDirective>
                                <ChipDirective text="Medium"></ChipDirective>
                                <ChipDirective text="Large"></ChipDirective>
                                <ChipDirective text="Extra large"></ChipDirective>
                            </ChipsDirective>
                        </ChipListComponent>
                    </div>

                    <div className="separator"></div>

                    <div className="chips-headers">Choice Chips</div>

                    <div className="sample-padding">
                        {/* initialize choice chip component */}
                        <ChipListComponent id="chip-choice" selection="Single" cssClass="e-outline" selectedChips={[1]}>
                            <ChipsDirective>
                                <ChipDirective text="Send a text" leadingIconCss="text"></ChipDirective>
                                <ChipDirective text="Set a reminder" leadingIconCss="alarm"></ChipDirective>
                                <ChipDirective text="Read my emails" leadingIconCss="mail"></ChipDirective>
                                <ChipDirective text="Play a game" leadingIconCss="game"></ChipDirective>
                            </ChipsDirective>
                        </ChipListComponent>
                    </div>
                </div>
            </div>
        </div>);
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);