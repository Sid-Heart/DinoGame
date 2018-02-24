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
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Int = require("../Data.Int");
var Data_Maybe = require("../Data.Maybe");
var Data_Number_Format = require("../Data.Number.Format");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Set = require("../Data.Set");
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

//update scores
var updateScore = function (keys) {
    return function (score) {
        return score;
    };
};

//produce baloon
var getCharItem = function (a) {
    return function __do() {
        var n = Control_Monad_Eff_Random.randomRange(0.0)(3.0)();
        var m = Control_Monad_Eff_Random.randomInt(0)(3)();
        return {
            x: a * 500 | 0,
            y: Game_Values.groundPos - (m * 50 | 0) | 0,
            key: a,
            id: "Prop",
            aid: n
        };
    };
};
var collisionOne = function (player) {
    return function (prop) {
        var $4 = $$Math.abs(200.0 - 150.0 * $$Math.sin(player.y) - Data_Int.toNumber(prop.y)) < 40.0 && $$Math.abs(100.0 - Data_Int.toNumber(prop.x)) < 40.0;
        if ($4) {
            return true;
        };
        return false;
    };
};
var collisionAll = function (state) {
    return Data_Array.filter(collisionOne(state.player))(state.props);
};
var main = (function () {
    var validate = function (key) {
        return function (oldState) {
            if (oldState.gameOver === true || oldState.gameStart === true && key === false) {
                return oldState;
            };
            if (oldState.gameStart === true && key === true) {
                return {
                    props: Data_Functor.map(Data_Functor.functorArray)(function (n) {
                        var $7 = n.x < 0;
                        if ($7) {
                            return {
                                x: 500 * Game_Values.charCount | 0,
                                y: Game_Values.groundPos - (50 * ((n.y + n.key | 0) % 3) | 0) | 0,
                                id: n.id,
                                key: n.key,
                                aid: n.aid + 0.1
                            };
                        };
                        return {
                            x: (n.x - 8 | 0) - (oldState.score / 500 | 0) | 0,
                            y: n.y,
                            id: n.id,
                            key: n.key,
                            aid: (function () {
                                var $8 = n.aid > 1.9;
                                if ($8) {
                                    return n.aid - 1.9;
                                };
                                return n.aid + 0.1;
                            })()
                        };
                    })(oldState.props),
                    player: {
                        y: Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(3.141)(oldState.player.y) + 9.0e-2,
                        aid: (function () {
                            var $9 = oldState.player.aid > 2.9;
                            if ($9) {
                                return oldState.player.aid - 2.8;
                            };
                            return oldState.player.aid + 0.1;
                        })()
                    },
                    score: oldState.score + 1 | 0,
                    scorePos: {
                        x: "30",
                        y: "30"
                    },
                    gameStart: false,
                    gameOver: false,
                    groundSpeed: (oldState.groundSpeed - 8 | 0) - (oldState.score / 500 | 0) | 0
                };
            };
            if (key === true && oldState.player.y > 3.14) {
                return {
                    props: Data_Functor.map(Data_Functor.functorArray)(function (n) {
                        var $10 = n.x < 0;
                        if ($10) {
                            return {
                                x: 500 * Game_Values.charCount | 0,
                                y: Game_Values.groundPos - (50 * ((n.y + n.key | 0) % 3) | 0) | 0,
                                id: n.id,
                                key: n.key,
                                aid: (function () {
                                    var $11 = n.aid > 1.9;
                                    if ($11) {
                                        return n.aid - 1.9;
                                    };
                                    return n.aid + 0.1;
                                })()
                            };
                        };
                        return {
                            x: (n.x - 8 | 0) - (oldState.score / 500 | 0) | 0,
                            y: n.y,
                            id: n.id,
                            key: n.key,
                            aid: (function () {
                                var $12 = n.aid > 1.9;
                                if ($12) {
                                    return n.aid - 1.9;
                                };
                                return n.aid + 0.1;
                            })()
                        };
                    })(oldState.props),
                    player: {
                        y: 0.0,
                        aid: 0.0
                    },
                    score: oldState.score + 1 | 0,
                    scorePos: {
                        x: "30",
                        y: "30"
                    },
                    gameStart: false,
                    gameOver: false,
                    groundSpeed: (oldState.groundSpeed - 8 | 0) - (oldState.score / 500 | 0) | 0
                };
            };
            if (Data_Array["null"](collisionAll(oldState)) === false) {
                return {
                    props: Data_Functor.map(Data_Functor.functorArray)(function (n) {
                        var $13 = n.x < 0;
                        if ($13) {
                            return {
                                x: 500 * Game_Values.charCount | 0,
                                y: Game_Values.groundPos - (50 * ((n.y + n.key | 0) % 3) | 0) | 0,
                                id: n.id,
                                key: n.key,
                                aid: (function () {
                                    var $14 = n.aid > 1.9;
                                    if ($14) {
                                        return n.aid - 1.9;
                                    };
                                    return n.aid + 0.1;
                                })()
                            };
                        };
                        return {
                            x: (n.x - 8 | 0) - (oldState.score / 500 | 0) | 0,
                            y: n.y,
                            id: n.id,
                            key: n.key,
                            aid: (function () {
                                var $15 = n.aid > 1.9;
                                if ($15) {
                                    return n.aid - 1.9;
                                };
                                return n.aid + 0.1;
                            })()
                        };
                    })(oldState.props),
                    player: {
                        y: Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(3.141)(oldState.player.y) + 9.0e-2,
                        aid: 3.0
                    },
                    score: oldState.score + 1 | 0,
                    scorePos: {
                        x: "30",
                        y: "30"
                    },
                    gameStart: false,
                    gameOver: true,
                    groundSpeed: (oldState.groundSpeed - 8 | 0) - (oldState.score / 500 | 0) | 0
                };
            };
            return {
                props: Data_Functor.map(Data_Functor.functorArray)(function (n) {
                    var $16 = n.x < 0;
                    if ($16) {
                        return {
                            x: 500 * Game_Values.charCount | 0,
                            y: Game_Values.groundPos - (50 * ((n.y + n.key | 0) % 3) | 0) | 0,
                            id: n.id,
                            key: n.key,
                            aid: n.aid + 0.1
                        };
                    };
                    return {
                        x: (n.x - 8 | 0) - (oldState.score / 500 | 0) | 0,
                        y: n.y,
                        id: n.id,
                        key: n.key,
                        aid: (function () {
                            var $17 = n.aid > 1.9;
                            if ($17) {
                                return n.aid - 1.9;
                            };
                            return n.aid + 0.1;
                        })()
                    };
                })(oldState.props),
                player: {
                    y: Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(3.141)(oldState.player.y) + 9.0e-2,
                    aid: (function () {
                        var $18 = oldState.player.aid > 2.9;
                        if ($18) {
                            return oldState.player.aid - 2.8;
                        };
                        return oldState.player.aid + 0.1;
                    })()
                },
                score: oldState.score + 1 | 0,
                scorePos: {
                    x: "30",
                    y: "30"
                },
                gameStart: false,
                gameOver: false,
                groundSpeed: (oldState.groundSpeed - 8 | 0) - (oldState.score / 500 | 0) | 0
            };
        };
    };
    return function __do() {
        var v = Control_Monad_Eff_Console.log("Running")();
        var v1 = Data_Traversable.traverse(Data_Traversable.traversableArray)(Control_Monad_Eff.applicativeEff)(getCharItem)(Data_Array.range(1)(Game_Values.charCount))();
        var initialState = {
            props: v1,
            player: {
                y: 0.0,
                aid: 0.0
            },
            score: 0,
            scorePos: {
                x: "30",
                y: "30"
            },
            gameStart: true,
            gameOver: false,
            groundSpeed: 0
        };
        var v2 = PrestoDOM_Util.render(view)(initialState)();
        var v3 = v2.updateState(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))(validate)(FRP_Behavior_Keyboard.key(32)))(v2.stateBeh))(FRP_Event_Time.animationFrame)();
        return Data_Unit.unit;
    };
})();
module.exports = {
    updateScore: updateScore,
    getCharItem: getCharItem,
    collisionOne: collisionOne,
    collisionAll: collisionAll,
    main: main,
    view: view
};
