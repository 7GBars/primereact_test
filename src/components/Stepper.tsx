import React from 'react';
import PropTypes from 'prop-types';
import {StepperPanel} from "primereact/stepperpanel";
import {Button} from "primereact/button";
import {useRef} from "react";
import {Stepper} from "primereact/stepper";
import {Editor} from "primereact/editor";

const text = '<div>Heas!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>'
const text2 = '<div>Heasd!</div> <img  src="data:image/jpeg;base64,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"><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>'

const text3 = '<b>Editor</b> Rocks</div><div><br></div><img src="https://silikonmold.ru/image/cache/catalog/2020/Februar/vafelnaya_kartinka_pasport2-1200x1200.jpg" style="width: 10%;" />'
const renderHeader = () => {
  return (
    <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
  );
};

const renderHeader2 = () => {
  return (
    <span className="ql-formats">

            </span>
  );
};
export function MyStepper(props: any) {
  const stepperRef = useRef<any>(null);
  const header = renderHeader();
  const header2 = renderHeader2()
  return (
    //@ts-ignore
      <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}  orientation="vertical">
        <StepperPanel header="Этап 1">
          <Editor headerTemplate={header2} value={text} readOnly style={{height: '320px'}}/>
          <div className="flex py-4 gap-2">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left"
                    onClick={() => stepperRef.current?.prevCallback()}/>
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right"
                    onClick={() => stepperRef.current?.nextCallback()}/>
          </div>
        </StepperPanel>
        <StepperPanel header="Этап 2">
          <div className="flex flex-column h-24rem">
            <Editor headerTemplate={header} value={text2} readOnly style={{height: '320px'}}/>
          </div>
          <div className="flex py-4 gap-2">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
          </div>
        </StepperPanel>
        <StepperPanel header="Этап 3">
          <div className="flex flex-column h-24rem">
            <Editor headerTemplate={header} value={text3} readOnly style={{height: '320px'}}/>
          </div>
          <div className="flex py-4 gap-2">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
          </div>
        </StepperPanel>
        <StepperPanel header="Этап 4">
          <div className="flex flex-column h-24rem">
            <Editor value="Always bet on Prime!" readOnly style={{height: '320px'}}/>
          </div>
          <div className="flex py-4">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left"
                    onClick={() => stepperRef.current?.prevCallback()} />
          </div>
        </StepperPanel>

      </Stepper>

  );
}

