module Game.Utils where

import Prelude
import Game.Types
import Game.Values

isGameOver :: StateType -> Boolean
isGameOver gameState = gameState.gameOver

isGameStart :: StateType -> Boolean
isGameStart gameState = gameState.gameStart

isPlayerGrounded :: StateType -> Boolean
isPlayerGrounded gameState = gameState.player.y>3.14

getNewStateWith :: Array Prop -> Int -> Player -> Int -> { x::String,y::String } -> Boolean -> Boolean -> StateType
getNewStateWith props groundSpeed player score scorePos gameStart gameOver = {props, groundSpeed, player, score, scorePos, gameStart, gameOver }

getNewPropLocation :: Array Prop -> Int -> Array Prop
getNewPropLocation propState score = (map (\n->if n.x<0 then {x:500*charCount,y:groundPos-50*((n.y+n.key) `mod` 3),id:n.id,key:n.key,aid:if n.aid>1.9 then n.aid-1.9 else n.aid+0.1} else {x:n.x-8-score / 500,y:n.y,id:n.id,key:n.key,aid:if n.aid>1.9 then n.aid-1.9 else n.aid+0.1}) propState)

getPlayer :: StateType -> Player
getPlayer oldState = {y:clamp 0.0 3.141 oldState.player.y+0.09,aid: if oldState.player.aid>2.9 then oldState.player.aid-2.8 else oldState.player.aid+0.1}

getGroundSpeed :: Int -> Int -> Int
getGroundSpeed groundSpeed score = groundSpeed-8-score / 500

scorePosition :: { x :: String, y :: String}
scorePosition = {x: "30", y:"30"}

newScore :: Int -> Int
newScore curScore = curScore + 1