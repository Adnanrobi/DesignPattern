interface UserText {
    operate() : string
    styleDesciption() : string
}

class InputText implements UserText {
    text: string
    constructor ( text : string ){
        this.text = text
    }

    public operate() : string {
        return this.text
    }

    public styleDesciption() : string {
        return " "
    }
}

class TextDecorator implements UserText {
    protected  TextStyle : UserText
    constructor ( TextStyle : UserText ) {
        this.TextStyle = TextStyle
    }

    public operate() : string {
        return this.TextStyle.operate()
    }

    public styleDesciption() : string {
        return "Styling unknown"
    }
}
class BoldDecorator extends TextDecorator {
    name : string = "Bold"
    public operate() : string {
        return super.operate().bold()
    }

    public styleDesciption() : string {
        return this.name
    }
}

class ItalicsDecorator extends TextDecorator {
    name : string = "Italics"
    public operate() : string {
        return super.operate().italics()
    }

    public styleDesciption() : string {
        return this.name
    }
}

class StrikeDecorator extends TextDecorator {
    name : string = "Strike Out"
    public operate() : string {
        return super.operate().strike()
    }

    public styleDesciption() : string {
        return this.name
    }
}

function showDecoration ( TextStyle : UserText ) {
    console.log( "Message " + TextStyle.styleDesciption() + " : " + TextStyle.operate() )
}

const input = new InputText ( "Decore Pattern" )
const boldDecorator = new BoldDecorator ( input )
const italicsDecorator = new ItalicsDecorator ( input )
const strikeDecorator = new StrikeDecorator ( input )

showDecoration( boldDecorator )
showDecoration( italicsDecorator )
showDecoration( strikeDecorator )