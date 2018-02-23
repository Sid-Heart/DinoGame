"use strict";
var Data_Function = require("../Data.Function");
var Data_Int = require("../Data.Int");
var Data_Number_Format = require("../Data.Number.Format");
var Data_Semigroup = require("../Data.Semigroup");
var Game_Utils = require("../Game.Utils");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Elements = require("../PrestoDOM.Elements");
var PrestoDOM_Properties = require("../PrestoDOM.Properties");
var PrestoDOM_Types = require("../PrestoDOM.Types");
var PrestoDOM_Types_DomAttributes = require("../PrestoDOM.Types.DomAttributes");
var charDraw = function (state) {
    return function (idpos) {
        return PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(30)), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(30)), PrestoDOM_Properties.orientation("horizontal"), PrestoDOM_Properties.background("#000000"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.margin(Data_Number_Format.toString(Data_Int.toNumber(idpos.x)) + ("," + (Data_Number_Format.toString(Data_Int.toNumber(idpos.y)) + ",0,0"))) ])([  ]);
    };
};
module.exports = {
    charDraw: charDraw
};
