
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
function spreadsheet_read(){}

// post - criar dados
function spreadsheet_create(){}

// put/update - atualizar dados
function spreadsheet_update(){}

// delete - deletar dados
function spreadsheet_delete(){}

