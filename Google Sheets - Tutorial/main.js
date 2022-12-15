
//D1 - Expliquei quais são os métodos que podemos usar para pegar uma planilha: 

function spreadsheet_get(){
    // A planilha que vamos abrir
    // let ss = SpreadsheetApp.getActiveSpreadsheet(); // pegar planilha ativa
    // let ss = SpreadsheetApp.openByName('Google Sheets - Tutorial'); // pegar planilha pelo nome
    // let ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1vESlHNqLk0SfA9pIRB52Y7PuywsIMT1Mw496qQd0tOU/edit#gid=0'); // pegar planilha pelo URL
    let ss = SpreadsheetApp.openById('1vESlHNqLk0SfA9pIRB52Y7PuywsIMT1Mw496qQd0tOU'); // pegar planilha pelo ID
    // A folha que vamos interagir
    // let sheet = ss.getSheetByName('Planilha1'); // pegar folha pelo nome
    let sheet = ss.getSheets()[0]; // pegar primeira folha
    // Pegar dados da folha
    let data = sheet.getDataRange().getValues();
    // Pegar dados da linha 1
    let data1 = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
    Logger.log(data1);
}

//Você pode criar um crud para a planilha :
// usando como referencia os conceitos encontrados no link: https://developers.google.com/apps-script/reference/spreadsheet

// get - pegar dados
function spreadsheet_read(spreadsheetId) {
    try {
      // Verifica se o ID da planilha é válido
      if (!spreadsheetId || typeof spreadsheetId !== 'string') {
        throw new Error('O ID da planilha é inválido.');
      }
  
      // Obtém a planilha com o ID especificado
      var sheet = SpreadsheetApp.openById(spreadsheetId).getSheets()[0];
  
      // Obtém os dados da planilha
      var data = sheet.getDataRange().getValues();
  
      return data;
    } catch (error) {
      // Em caso de erro, imprime a mensagem de erro no console e retorna null
      console.error(error);
      return null;
    }
  }

// post - criar dados
function spreadsheet_create(spreadsheetId, data) {
    try {
      // Verifica se o ID da planilha é válido
      if (!spreadsheetId || typeof spreadsheetId !== 'string') {
        throw new Error('O ID da planilha é inválido.');
      }
  
      // Verifica se os dados fornecidos são um array válido
      if (!data || !Array.isArray(data)) {
        throw new Error('Os dados fornecidos são inválidos.');
      }
  
      // Obtém a planilha com o ID especificado
      var sheet = SpreadsheetApp.openById(spreadsheetId).getSheets()[0];
  
      // Adiciona uma nova linha com os dados especificados na planilha
      sheet.appendRow(data);
    } catch (error) {
      // Em caso de erro, imprime a mensagem de erro no console
      console.error(error);
    }
  }

// put/update - atualizar dados recebendo uma variavel que indica a linha que será alterada
function spreadsheet_update(spreadsheetId, row, data) {
    // Verifica se o ID da planilha é válido.
    if (!spreadsheetId || !spreadsheetId.trim()) {
      throw new Error("O ID da planilha é inválido.");
    }
  
    // Obtém a planilha especificada pelo ID.
    var sheet = SpreadsheetApp.openById(spreadsheetId).getSheets()[0];
    if (!sheet) {
      throw new Error("Não foi possível encontrar a planilha com o ID fornecido.");
    }
  
    // Verifica se a linha especificada é válida.
    if (row < 1 || row > sheet.getLastRow()) {
      throw new Error("A linha especificada é inválida.");
    }
  
    // Verifica se há dados suficientes para preencher a linha inteira.
    var lastColumn = sheet.getLastColumn();
    if (data.length < lastColumn) {
      throw new Error("A matriz de dados fornecida é muito curta.");
    }
    
    // Atualiza a linha especificada com os dados fornecidos.
    sheet.getRange(row, 1, 1, lastColumn).setValues([data]);
    }


// delete - apagar dados
function spreadsheet_delete(spreadsheetId, row) {
  try {
    // Verifica se o ID da planilha é válido
    if (!spreadsheetId || typeof spreadsheetId !== 'string') {
      throw new Error('O ID da planilha é inválido.');
    }

    // Verifica se a linha especificada é um número válido
    if (!row || typeof row !== 'number') {
      throw new Error('A linha especificada é inválida.');
    }

    var sheet = SpreadsheetApp.openById(spreadsheetId).getSheets()[0];
    sheet.deleteRow(row);
  } catch (error) {
    console.error(error);
  }
}



