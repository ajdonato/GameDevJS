class TelaInicial {
    constructor() {}

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelainicial, 0, 0, width, height)
    }

    _texto() {
        textAlign(CENTER)
        textFont(fonteTelaInicial);
        textSize(100);
        text('As Aventuras de', width / 2, height / 3);
        textSize(180);
        text('Hipsta', width / 2, height / 5 * 2.5);
    }

    _botao() {
        botaoInicial.y = height / 7 * 4;
        botaoInicial.draw();
    }
}