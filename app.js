var Reader = require("./Reader")
var leitor = new Reader()
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var Writer = require("./Writer")
var escritor = new Writer()
var PDFWriter = require("./PDFWriter")


async function main(){
    var dados = await leitor.Read("./users.csv") 
    var dadosProcessados = Processor.Process(dados) 

    var usuarios = new Table(dadosProcessados)

    var html = await HtmlParser.Parse(usuarios)
    console.log(html)

    escritor.Write(Date.now() + ".html", html)
    PDFWriter.WriterPDF(Date.now() + ".PDF",html)

}

main()