"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Random = require("../Control.Monad.Eff.Random");
var DOM = require("../DOM");
var Data_Array = require("../Data.Array");
var Data_Boolean = require("../Data.Boolean");
var Data_Eq = require("../Data.Eq");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Int = require("../Data.Int");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_String_Utils = require("../Data.String.Utils");
var Data_Traversable = require("../Data.Traversable");
var Data_Unit = require("../Data.Unit");
var FRP = require("../FRP");
var FRP_Behavior = require("../FRP.Behavior");
var FRP_Behavior_Keyboard = require("../FRP.Behavior.Keyboard");
var FRP_Event = require("../FRP.Event");
var FRP_Event_Time = require("../FRP.Event.Time");
var Game_DrawTools = require("../Game.DrawTools");
var Game_Types = require("../Game.Types");
var Game_Utils = require("../Game.Utils");
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
    return PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(200)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.name("rootNode"), PrestoDOM_Properties.orientation("vertical") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(200)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.name("rootNodeNExt"), PrestoDOM_Properties.orientation("Horizontal") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(975)), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.gravity("center") ])([ PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.orientation("vertical") ])([ PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.name("Play Screen"), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.orientation("vertical") ])(Data_Functor.map(Data_Functor.functorArray)(Game_DrawTools.charDraw(state))(state.props)), PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.orientation("vertical") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.margin("100," + (Data_Show.show(Data_Show.showNumber)(200.0 - 150.0 * $$Math.sin(state.player.y)) + ",0,0")) ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.margin("0,0,0,0"), PrestoDOM_Properties.imageUrl("assets/TRex" + Data_Maybe.fromMaybe("")(Data_String_Utils.charAt(0)(Data_Show.show(Data_Show.showNumber)(state.player.aid)))) ]) ]) ]) ]) ]), PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(300)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.background("#000000"), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.gravity("centerHorizontal") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.background("#ff0000"), PrestoDOM_Properties.gravity("center") ])([ PrestoDOM_Elements.textView([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.text("Chrome T-Rex Game!"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.textSize("28") ]) ]), PrestoDOM_Elements.textView([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.color("#000000"), PrestoDOM_Properties.text("Score:" + Data_Show.show(Data_Show.showInt)(state.score)), PrestoDOM_Properties.textSize("28") ]) ]) ]), PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(30)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(975)), PrestoDOM_Properties.margin("0,40") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(30)), PrestoDOM_Properties.id_("ground0"), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(975)), PrestoDOM_Properties.margin(Data_Show.show(Data_Show.showInt)(state.groundSpeed % 975) + ",5,0,0") ])([  ]), PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(30)), PrestoDOM_Properties.id_("ground1"), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(975)), PrestoDOM_Properties.margin(Data_Show.show(Data_Show.showInt)(state.groundSpeed % 975 + 975 | 0) + ",5,0,0") ])([  ]), PrestoDOM_Elements.textView([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.margin("0,30,0,0"), PrestoDOM_Properties.text("Space To Jump"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.textSize("40") ]) ]) ]);
};
var getPropItem = function (a) {
    return function __do() {
        var n = Control_Monad_Eff_Random.randomRange(0.0)(3.0)();
        var m = Control_Monad_Eff_Random.randomInt(0)(3)();
        return {
            x: a * Game_Values.obstacleDist | 0,
            y: Game_Values.groundPos - (m * 50 | 0) | 0,
            key: a,
            id: "Prop",
            aid: n
        };
    };
};
var collisionOne = function (player) {
    return function (prop) {
        return $$Math.abs(200.0 - 150.0 * $$Math.sin(player.y) - Data_Int.toNumber(prop.y)) < 40.0 && $$Math.abs(100.0 - Data_Int.toNumber(prop.x)) < 40.0;
    };
};
var collisionAll = function (state) {
    return Data_Array.filter(collisionOne(state.player))(state.props);
};
var main = (function () {
    var validate = function (key) {
        return function (oldState) {
            if (Game_Utils.isGameOver(oldState) || Game_Utils.isGameStart(oldState) && key === false) {
                return oldState;
            };
            if (Game_Utils.isGameStart(oldState) && key === true) {
                return {
                    props: Game_Utils.getNewPropLocation(oldState.props)(oldState.score),
                    player: Game_Utils.getPlayer(oldState),
                    score: Game_Utils.newScore(oldState.score),
                    scorePos: Game_Utils.scorePosition,
                    gameStart: false,
                    gameOver: false,
                    groundSpeed: Game_Utils.getGroundSpeed(oldState.groundSpeed)(oldState.score)
                };
            };
            if (Game_Utils.isGameStart(oldState) && key === true) {
                return {
                    props: Game_Utils.getNewPropLocation(oldState.props)(oldState.score),
                    player: Game_Utils.getPlayer(oldState),
                    score: Game_Utils.newScore(oldState.score),
                    scorePos: Game_Utils.scorePosition,
                    gameStart: false,
                    gameOver: false,
                    groundSpeed: Game_Utils.getGroundSpeed(oldState.groundSpeed)(oldState.score)
                };
            };
            if (key === true && Game_Utils.isPlayerGrounded(oldState)) {
                return {
                    props: Game_Utils.getNewPropLocation(oldState.props)(oldState.score),
                    player: {
                        y: 0.0,
                        aid: 0.0
                    },
                    score: Game_Utils.newScore(oldState.score),
                    scorePos: Game_Utils.scorePosition,
                    gameStart: false,
                    gameOver: false,
                    groundSpeed: Game_Utils.getGroundSpeed(oldState.groundSpeed)(oldState.score)
                };
            };
            if (Data_Array["null"](collisionAll(oldState)) === false) {
                return {
                    props: Game_Utils.getNewPropLocation(oldState.props)(oldState.score),
                    player: {
                        y: oldState.player.y,
                        aid: 3.0
                    },
                    score: Game_Utils.newScore(oldState.score),
                    scorePos: Game_Utils.scorePosition,
                    gameStart: false,
                    gameOver: true,
                    groundSpeed: Game_Utils.getGroundSpeed(oldState.groundSpeed)(oldState.score)
                };
            };
            if (Data_Boolean.otherwise) {
                return {
                    props: Game_Utils.getNewPropLocation(oldState.props)(oldState.score),
                    player: Game_Utils.getPlayer(oldState),
                    score: Game_Utils.newScore(oldState.score),
                    scorePos: Game_Utils.scorePosition,
                    gameStart: false,
                    gameOver: false,
                    groundSpeed: Game_Utils.getGroundSpeed(oldState.groundSpeed)(oldState.score)
                };
            };
            throw new Error("Failed pattern match at Main line 49, column 9 - line 49, column 107: " + [ key.constructor.name, oldState.constructor.name ]);
        };
    };
    return function __do() {
        var v = Data_Traversable.traverse(Data_Traversable.traversableArray)(Control_Monad_Eff.applicativeEff)(getPropItem)(Data_Array.range(1)(Game_Values.charCount))();
        var initialState = {
            props: v,
            player: {
                y: 0.0,
                aid: 0.0
            },
            score: 0,
            scorePos: Game_Utils.scorePosition,
            gameStart: true,
            gameOver: false,
            groundSpeed: 0
        };
        var v1 = PrestoDOM_Util.render(view)(initialState)();
        var v2 = v1.updateState(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))(validate)(FRP_Behavior_Keyboard.key(32)))(v1.stateBeh))(FRP_Event_Time.animationFrame)();
        return Data_Unit.unit;
    };
})();
module.exports = {
    getPropItem: getPropItem,
    collisionOne: collisionOne,
    collisionAll: collisionAll,
    main: main,
    view: view
};
