"use strict";
var Data_Eq = require("../Data.Eq");
var Data_Function = require("../Data.Function");
var Data_Int = require("../Data.Int");
var Data_Number_Format = require("../Data.Number.Format");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Game_Utils = require("../Game.Utils");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Elements = require("../PrestoDOM.Elements");
var PrestoDOM_Properties = require("../PrestoDOM.Properties");
var PrestoDOM_Types = require("../PrestoDOM.Types");
var PrestoDOM_Types_DomAttributes = require("../PrestoDOM.Types.DomAttributes");
var charDraw = function (state) {
    return function (idpos) {
        var $0 = idpos.y === 200;
        if ($0) {
            return PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(80)), PrestoDOM_Properties.orientation("horizontal"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.margin(Data_Number_Format.toString(Data_Int.toNumber(idpos.x)) + ("," + (Data_Number_Format.toString(Data_Int.toNumber(idpos.y - 30 | 0)) + ",0,0"))) ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.margin("0,0,0,0"), PrestoDOM_Properties.imageUrl("assets/Cactus0") ]) ]);
        };
        return PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(70)), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.orientation("horizontal"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.margin(Data_Number_Format.toString(Data_Int.toNumber(idpos.x)) + ("," + (Data_Number_Format.toString(Data_Int.toNumber(idpos.y)) + ",0,0"))) ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.margin("0,0,0,0"), PrestoDOM_Properties.imageUrl("assets/Bird0") ]) ]);
    };
};
module.exports = {
    charDraw: charDraw
};
