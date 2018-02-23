"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Random = require("../Control.Monad.Eff.Random");
var DOM = require("../DOM");
var Data_Array = require("../Data.Array");
var Data_Eq = require("../Data.Eq");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Int = require("../Data.Int");
var Data_Number_Format = require("../Data.Number.Format");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Set = require("../Data.Set");
var Data_Show = require("../Data.Show");
var Data_Traversable = require("../Data.Traversable");
var Data_Unit = require("../Data.Unit");
var FRP = require("../FRP");
var FRP_Behavior = require("../FRP.Behavior");
var FRP_Behavior_Keyboard = require("../FRP.Behavior.Keyboard");
var FRP_Event = require("../FRP.Event");
var FRP_Event_Time = require("../FRP.Event.Time");
var Game_DrawTools = require("../Game.DrawTools");
var Game_Types = require("../Game.Types");
var Game_Values = require("../Game.Values");
var $$Math = require("../Math");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Elements = require("../PrestoDOM.Elements");
var PrestoDOM_Properties = require("../PrestoDOM.Properties");
var PrestoDOM_Types = require("../PrestoDOM.Types");
var PrestoDOM_Types_DomAttributes = require("../PrestoDOM.Types.DomAttributes");
var PrestoDOM_Util = require("../PrestoDOM.Util");
var view = function (state) {
    return PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(200)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.name("rootNode"), PrestoDOM_Properties.orientation("Horizontal") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(975)), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.gravity("center") ])([ PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(975)), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.orientation("vertical") ])([ PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.name("Play Screen"), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.orientation("vertical") ])(Data_Functor.map(Data_Functor.functorArray)(Game_DrawTools.charDraw(state))(state.props)), PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.orientation("vertical") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(10)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(10)), PrestoDOM_Properties.margin("100," + (Data_Show.show(Data_Show.showNumber)(200.0 - 80.0 * $$Math.sin(state.player.y)) + ",0,0")), PrestoDOM_Properties.background("#888888") ])([  ]) ]) ]) ]), PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.background("#000000"), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.gravity("centerHorizontal") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.background("#ff0000"), PrestoDOM_Properties.gravity("center") ])([ PrestoDOM_Elements.textView([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.text("Hit Me Up!"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.textSize("28") ]) ]), PrestoDOM_Elements.textView([ PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(100)), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.color("#000000"), PrestoDOM_Properties.text("Score:" + Data_Show.show(Data_Show.showInt)(state.score)), PrestoDOM_Properties.textSize("28") ]) ]) ]);
};

//update scores
var updateScore = function (keys) {
    return function (score) {
        return score;
    };
};

//produce baloon
var getCharItem = function (a) {
    return function __do() {
        var n = Control_Monad_Eff_Random.randomInt(0)(3)();
        var m = Control_Monad_Eff_Random.randomInt(0)(2)();
        return {
            x: a * 500 | 0,
            y: 200 - (m * 50 | 0) | 0,
            id: "Prop"
        };
    };
};
var main = (function () {
    var validate = function (key) {
        return function (oldState) {
            if (key === true && oldState.player.y > 3.14) {
                return {
                    props: Data_Functor.map(Data_Functor.functorArray)(function (n) {
                        return {
                            x: n.x - 4 | 0,
                            y: n.y,
                            id: n.id
                        };
                    })(oldState.props),
                    player: {
                        y: 0.0
                    },
                    score: 0,
                    scorePos: {
                        x: "30",
                        y: "30"
                    },
                    gameStart: false,
                    gameOver: false
                };
            };
            return {
                props: Data_Functor.map(Data_Functor.functorArray)(function (n) {
                    return {
                        x: n.x - 4 | 0,
                        y: n.y,
                        id: n.id
                    };
                })(oldState.props),
                player: {
                    y: Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(3.141)(oldState.player.y) + 9.0e-2
                },
                score: 0,
                scorePos: {
                    x: "30",
                    y: "30"
                },
                gameStart: false,
                gameOver: false
            };
        };
    };
    return function __do() {
        var v = Control_Monad_Eff_Console.log("Running")();
        var v1 = Data_Traversable.traverse(Data_Traversable.traversableArray)(Control_Monad_Eff.applicativeEff)(getCharItem)(Data_Array.range(1)(Game_Values.charCount))();
        var initialState = {
            props: v1,
            player: {
                y: 0.0
            },
            score: 0,
            scorePos: {
                x: "30",
                y: "30"
            },
            gameStart: false,
            gameOver: false
        };
        var v2 = PrestoDOM_Util.render(view)(initialState)();
        var v3 = v2.updateState(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))(validate)(FRP_Behavior_Keyboard.key(32)))(v2.stateBeh))(FRP_Event_Time.animationFrame)();
        return Data_Unit.unit;
    };
})();
module.exports = {
    updateScore: updateScore,
    getCharItem: getCharItem,
    main: main,
    view: view
};
