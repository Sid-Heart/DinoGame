"use strict";
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Functor = require("../Data.Functor");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semiring = require("../Data.Semiring");
var Game_Types = require("../Game.Types");
var Game_Values = require("../Game.Values");
var Prelude = require("../Prelude");
var scorePosition = {
    x: "30",
    y: "30"
};
var newScore = function (curScore) {
    return curScore + 1 | 0;
};
var isPlayerGrounded = function (gameState) {
    return gameState.player.y > 3.14;
};
var isGameStart = function (gameState) {
    return gameState.gameStart;
};
var isGameOver = function (gameState) {
    return gameState.gameOver;
};
var getPlayer = function (oldState) {
    return {
        y: Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(3.141)(oldState.player.y) + 9.0e-2,
        aid: (function () {
            var $0 = oldState.player.aid > 2.9;
            if ($0) {
                return oldState.player.aid - 2.8;
            };
            return oldState.player.aid + 0.1;
        })()
    };
};
var getNewStateWith = function (props) {
    return function (groundSpeed) {
        return function (player) {
            return function (score) {
                return function (scorePos) {
                    return function (gameStart) {
                        return function (gameOver) {
                            return {
                                props: props,
                                groundSpeed: groundSpeed,
                                player: player,
                                score: score,
                                scorePos: scorePos,
                                gameStart: gameStart,
                                gameOver: gameOver
                            };
                        };
                    };
                };
            };
        };
    };
};
var getNewPropLocation = function (propState) {
    return function (score) {
        return Data_Functor.map(Data_Functor.functorArray)(function (n) {
            var $1 = n.x < 0;
            if ($1) {
                return {
                    x: 500 * Game_Values.charCount | 0,
                    y: Game_Values.groundPos - (50 * ((n.y + n.key | 0) % 3) | 0) | 0,
                    id: n.id,
                    key: n.key,
                    aid: (function () {
                        var $2 = n.aid > 1.9;
                        if ($2) {
                            return n.aid - 1.9;
                        };
                        return n.aid + 0.1;
                    })()
                };
            };
            return {
                x: (n.x - 8 | 0) - (score / 500 | 0) | 0,
                y: n.y,
                id: n.id,
                key: n.key,
                aid: (function () {
                    var $3 = n.aid > 1.9;
                    if ($3) {
                        return n.aid - 1.9;
                    };
                    return n.aid + 0.1;
                })()
            };
        })(propState);
    };
};
var getGroundSpeed = function (groundSpeed) {
    return function (score) {
        return (groundSpeed - 8 | 0) - (score / 500 | 0) | 0;
    };
};
module.exports = {
    isGameOver: isGameOver,
    isGameStart: isGameStart,
    isPlayerGrounded: isPlayerGrounded,
    getNewStateWith: getNewStateWith,
    getNewPropLocation: getNewPropLocation,
    getPlayer: getPlayer,
    getGroundSpeed: getGroundSpeed,
    scorePosition: scorePosition,
    newScore: newScore
};
