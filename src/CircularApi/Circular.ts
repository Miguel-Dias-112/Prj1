class CadeCircular  {
              
    //this need to be created by a http request     
    #pontos = [
        {nome: 'LETRAS', x: 0, y: 0,horariosChegada : [
        '06:34:00','06:59:00','07:22:00','07:22:00','07:48:00','08:24:00','08:51:00','09:22:00','09:50:00',
        '10:30:00','10:55:00','11:00:00','11:15:00','11:30:00','11:45:00','12:00:00','12:15:00','12:30:00',
        '12:45:00','13:00:00','13:15:00','13:30:00','13:45:00','14:01:00','14:27:00','14:56:00','15:20:00',
        '16:08:00','16:38:00','17:09:00','17:32:00','18:04:00','18:27:00','18:46:00','20:19:00','20:45:00',
        '21:11:00','21:27:00',
        ]},
        {nome: 'ICB (subida)', x: 0, y: 0,horariosChegada: 0},
        {nome: 'ENG (ponto final)', x: 0, y: 0,horariosChegada: 0},
        {nome: 'ENG (Saída)', x: 0, y: 0,horariosChegada: 0},
        {nome: 'ICB(descida)', x: 0, y: 0,horariosChegada: 0},
        {nome: 'FAEFID', x: 0, y: 0,horariosChegada: 0},
        {nome: 'HU', x: 0, y: 0,horariosChegada: 0},
        {nome: 'BOMBEIROs', x: 0, y: 0,horariosChegada: 0},
        {nome: 'ODONTO', x: 0, y: 0,horariosChegada: 0},
        {nome: 'ECONOMIA', x: 0, y: 0,horariosChegada: 0},
        {nome: 'ICH', x: 0, y: 0,horariosChegada: 0},
        {nome: 'DIREITO', x: 0, y: 0,horariosChegada: 0},

    ]
    #PontoAtual = this.#pontos[0];
    PontoByName(name:string){
        return this.#pontos.find(ponto => ponto.nome === name);
    }
    calcularTempoChegada(){
        const data = new Date();
        const horaAtual = data.getHours();
        const minutosAtual = data.getMinutes();
        const segundosAtual = data.getSeconds();
        const horarioAtual = new Date();
        horarioAtual.setHours(horaAtual, minutosAtual, segundosAtual, 0);

        const chegadas = this.#PontoAtual.horariosChegada as string[];
        for (let i = 0; i < chegadas.length; i++) {
            const [hora, minuto, segundo] = chegadas[i].split(':').map(Number);
            
            const horarioChegada = new Date();
            horarioChegada.setHours(hora, minuto, segundo, 0);

            if (horarioChegada > horarioAtual) {
                return chegadas[i];
            }
        }
        return 'Não há mais horários para hoje';
    }
    set PontoAtual(ponto:string){
        const pontoEncontrado = this.PontoByName(ponto);
        if (pontoEncontrado) {
            this.#PontoAtual = pontoEncontrado;
        } 
    };
    
}
export default CadeCircular;