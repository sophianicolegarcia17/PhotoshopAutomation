var doc = app.activeDocument;
var layers = doc.artLayers;

for (var i = 1; i <= 70; i += 2) {
    var filename1 = (i < 10 ? "0" : "") + i + ".png";
    var filename2 = ((i + 1) < 10 ? "0" : "") + (i + 1) + ".png";

    // Loop through all layers to find the text layers by name
    var textLayer1, textLayer2;

    for (var j = 0; j < layers.length; j++) {
        if (layers[j].name === "1st") {
            textLayer1 = layers[j];
        } else if (layers[j].name === "2nd") {
            textLayer2 = layers[j];
        }
    }

    if (!textLayer1 || !textLayer2) {
        alert("Text layers not found. Make sure the layer names are correct.");
        break;
    }

    textLayer1.textItem.contents = filename1.replace(".png", "");
    textLayer2.textItem.contents = filename2.replace(".png", "");

    var saveFile1 = new File(doc.path + "/" + filename1);
    var saveFile2 = new File(doc.path + "/" + filename2);

    var pngSaveOptions = new PNGSaveOptions();
    pngSaveOptions.compression = 9;

    doc.saveAs(saveFile1, pngSaveOptions, true);
    doc.saveAs(saveFile2, pngSaveOptions, true);
}