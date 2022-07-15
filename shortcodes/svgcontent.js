const fs = require('fs');
const path = require('path');

svgContent = function(file) {  
  let absFilePath = path.resolve(`assets/${file}.svg`) 

  let svgData = fs.readFileSync(absFilePath, function(err, contents) {    
    if (err) {  
      throw new Error(err)  
    }
    return contents  
  });

  return svgData.toString('utf8')  
}


module.exports = svgContent;
