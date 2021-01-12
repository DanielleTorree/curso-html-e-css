function verificar(){
    var nome = window.document.getElementById('nome')
    var respsim = window.document.getElementById('sim')
    var respnao = window.document.getElementById('nao')
    var res1 = window.document.getElementById('res1')
    var res2 = window.document.getElementById('res2')
    if(respsim == 'Sim' ){
        res1.innerHTML = 'mUITO BEM!'
    }    

}
function limparcampo(){
    var limpou = window.document.getElementById('limpararea')
    limpou.innerHTML = ''
}