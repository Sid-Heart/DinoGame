module Main where

import Prelude

import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)
import Control.Monad.Eff.Random (RANDOM, randomInt)
import DOM (DOM)
import Data.Array ((..),filter,null)
import Data.Int (toNumber)
import Data.Number.Format (toString)
import Data.Ord (clamp)
import Data.Set (Set)
import Data.Traversable (traverse)
import FRP (FRP)
import FRP.Behavior (Behavior)
import FRP.Behavior.Keyboard (key, keys)
import FRP.Event.Time (animationFrame)
import Game.DrawTools (charDraw)
import Game.Types (CharItem, StateType, Player)
import Game.Values (charCount)
import Math (sin,abs)
import PrestoDOM.Core (PrestoDOM)
import PrestoDOM.Elements (linearLayout, textView, relativeLayout)
import PrestoDOM.Properties (background, color, gravity, margin, height, name, orientation, text, textSize, width)
import PrestoDOM.Types (Length(..))
import PrestoDOM.Util (render)

--update scores
updateScore::forall t74 t75. t74 -> t75 -> t75
updateScore keys score=

  score

--produce baloon
getCharItem ::forall a. Int -> Eff(random :: RANDOM | a) CharItem
getCharItem a =
  randomInt 0 3 >>= \n ->
    randomInt 0 3 >>= \m ->
      pure{x:a*500,y:200 - (m*50),key :a,id:"Prop"}

collisionOne::Player -> CharItem -> Boolean
collisionOne player prop = if abs((200.0 - 150.0*sin(player.y))-toNumber(prop.y))<20.0 && abs(100.0 - toNumber(prop.x))<20.0
                              then true 
                              else false

collisionAll::StateType -> Array CharItem
collisionAll state =  filter (collisionOne state.player) state.props

main :: forall eff. Eff ( random::RANDOM, console :: CONSOLE, frp :: FRP, dom :: DOM | eff ) Unit
main = do
    _ <- log "Running"
    setOfChars <- (traverse getCharItem (1 .. charCount))
    let initialState = {props:setOfChars,player:{y:0.0}, score:0, scorePos: {x: "30", y:"30"},gameStart:false, gameOver:false}
    { stateBeh, updateState } <- render view initialState
    _<- updateState
      (validate <$> (key 32) <*> stateBeh)
      (animationFrame)
    pure unit
  where validate key oldState | key == true && oldState.player.y>3.14 = { props: (map (\n->if n.x<0 then {x:500*charCount,y:200-50*((n.y+n.key) `mod` 3),id:n.id,key:n.key} else {x:n.x-4,y:n.y,id:n.id,key:n.key}) oldState.props)    ,player:{y:0.0}, score:oldState.score+1, scorePos: {x: "30", y:"30"},gameStart:false, gameOver:false}
        validate key oldState | oldState.gameOver==true = oldState
        validate key oldState | null (collisionAll oldState) == false = { props: (map (\n->if n.x<0 then {x:500*charCount,y:200-50*((n.y+n.key) `mod` 3),id:n.id,key:n.key} else {x:n.x-4,y:n.y,id:n.id,key:n.key}) oldState.props)    ,player:{y:clamp 0.0 3.141 oldState.player.y+0.09}, score:oldState.score+1, scorePos: {x: "30", y:"30"},gameStart:false, gameOver:true}
        validate key oldState  = { props: (map (\n->if n.x<0 then {x:500*charCount,y:200-50*((n.y+n.key) `mod` 3),id:n.id,key:n.key} else {x:n.x-4,y:n.y,id:n.id,key:n.key}) oldState.props)    ,player:{y:clamp 0.0 3.141 oldState.player.y+0.09}, score:oldState.score+1, scorePos: {x: "30", y:"30"},gameStart:false, gameOver:false}

view :: forall w i. StateType -> PrestoDOM i w
view state =
  --main layout
  linearLayout
    [ height $ V 200
    , width Match_Parent
    , background "#ffffff"
    , name "rootNode"
    , orientation "Horizontal"
    ]
    [
      linearLayout
      [ height Match_Parent
      , width $ V 975
      , background "#ffffff"
      , orientation "vertical"
      , gravity "center"
      ]
      [
        --game container
        relativeLayout
        [ height Match_Parent
        , width $ V 975
        , background "#ffffff"
        , orientation "vertical"
        ]
        [
          --player
          relativeLayout
          [ height Match_Parent
          , width Match_Parent
          , name "Play Screen"
          , background "#ffffff"
          , orientation "vertical"
          ]
          (charDraw state <$> state.props),
          relativeLayout
          [ height Match_Parent
          , width Match_Parent
          , orientation "vertical"
          ]
          [
            linearLayout
            [
              height $ V 10
            , width $ V 10
            , margin $ "100,"<>show (200.0 - 150.0*sin(state.player.y))<>",0,0"
            , background "#888888"
            ]
            []
          ]
        ]
      ],
      --score board
      linearLayout
      [ height Match_Parent
      , width Match_Parent
      , background "#000000"
      , orientation "vertical"
      , gravity "centerHorizontal"
      ]
      [ 
         --title
        linearLayout
        [ width Match_Parent
        , height $ V 40
        , background "#ff0000"
        , gravity "center"
        ]
        [
          textView
          [ width Match_Parent
          , height $ V 40
          , text "Hit Me Up!"
          , gravity "center"
          , textSize "28"
          ]
        ],
        textView
        [ width Match_Parent
        , height $ V 40
        , color "#000000"
        , text $ "Score:"<>show state.score
        , textSize "28"
        ]
      ]
    ]
