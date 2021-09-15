class Button {
    constructor(options){
        this.options = options;
    }
}

const optionsBlue = {
    backgroundColor: 'blue',
    text: 'Epa',
    color: 18
}

const blueButton = new Button(optionsBlue)
console.log(blueButton.options.text)