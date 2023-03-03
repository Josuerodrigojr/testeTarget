function percentual(){
let percentualFaturamento = 0
const faturamentoSP = 67836.43
const faturamentoRJ = 36678.66
const faturamentoMG = 29229.88
const faturamentoES = 27165.48
const faturamentoOutros = 19849.53
const total = faturamentoSP + faturamentoES + faturamentoMG + faturamentoOutros + faturamentoRJ
  const estado = document.getElementById('estado').value
  switch(estado){
    case 'SP':
      percentualFaturamento = `${((faturamentoSP/total)*100).toFixed(2)}%`
      document.getElementById('percentualFaturamento').value = percentualFaturamento
      break
      case 'RJ':
        percentualFaturamento = `${((faturamentoRJ/total)*100).toFixed(2)}%`
        document.getElementById('percentualFaturamento').value = percentualFaturamento
        break
        case 'MG':
      percentualFaturamento = `${((faturamentoMG/total)*100).toFixed(2)}%`
      document.getElementById('percentualFaturamento').value = percentualFaturamento
      break
      case 'ES':
      percentualFaturamento = `${((faturamentoES/total)*100).toFixed(2)}%`
      document.getElementById('percentualFaturamento').value = percentualFaturamento
      break
      case 'OUTROS':
      percentualFaturamento = `${((faturamentoOutros/total)*100).toFixed(2)}%`
      document.getElementById('percentualFaturamento').value = percentualFaturamento
      break
  } 

}