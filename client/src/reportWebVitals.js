const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa o módulo web-vitals de forma dinâmica
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama as funções de desempenho e passa o onPerfEntry como parâmetro
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(error => {
      // Lida com o erro caso o módulo não seja carregado corretamente
      console.error('Erro ao importar web-vitals:', error);
    });
  }
};

export default reportWebVitals;

// Chama a função reportWebVitals para começar a coleta dos dados de desempenho
reportWebVitals();
