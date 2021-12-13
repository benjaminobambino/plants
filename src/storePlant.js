const PlantModel = require("../models/Plant");
const fs = require("fs");
const os = require('os');

// returns an "add" method for adding a plant to mongo
const getMongooseDatasource = () => {
  
  const add = (plantName) => {
    const newPlant = new PlantModel({ name: plantName });
    newPlant.save();
  };

  return {
    add
  };
};

// returns "add" method for adding a plant to a text document within the repo (plants.txt)
const getTextDocumentDatasource = () => {

  const add = (plantName) => {
    if (plantName) {
      fs.appendFileSync('plants.txt', `${plantName}\n`);
    }
  };

  return {
    add,
  };
};

// returns "add" method for adding a plant to a text document OUTSIDE the repo
const getDesktopTextDocumentDatasource = () => {

  const add = (plantName) => {
    if (plantName) {
      const homeDir = os.homedir();
      const newFileLocation = `${homeDir}/Desktop/plants.txt`;
      fs.appendFileSync(newFileLocation, `${plantName}\n`, {
        flags: 'a+'
      });
    }
  };

  return {
    add,
  };
};

// returns a datasource with an "add" method
const getDatasource = (datasource) => {
  switch (datasource) {

    case 'text': {
      const textDatasource = getTextDocumentDatasource();
      return textDatasource;
    }
    case 'desktop-text': {
      const desktopTextDatasource = getDesktopTextDocumentDatasource();
      return desktopTextDatasource;
    }
    default: {
      const mongooseDatasource = getMongooseDatasource();
    
      return mongooseDatasource;
    }
  }
};

const storePlant = (plantName, desiredDatasource) => {
  // retrieve a "datasource" object that will let us add a plant
  const datasource = getDatasource(desiredDatasource);

  // add the plantName to the datasource
  datasource.add(plantName);
};

module.exports = storePlant;
