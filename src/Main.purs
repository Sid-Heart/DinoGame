module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)
import Control.Monad.Eff.Random (RANDOM, randomInt, randomRange)
import DOM (DOM)
import Data.Array ((..), filter, null)
import Data.Int (toNumber)
import Data.Maybe (fromMaybe)
import Data.String.Utils (charAt)
import Data.Traversable (traverse)
import FRP (FRP)
import FRP.Behavior.Keyboard (key)
import FRP.Event.Time (animationFrame)
import Game.DrawTools (charDraw)
import Game.Types (Prop, StateType, Player)
import Game.Values (charCount, groundPos,obstacleDist)
import Math (sin, abs)
import PrestoDOM.Core (PrestoDOM)
import PrestoDOM.Elements (linearLayout, textView, relativeLayout, imageView)
import PrestoDOM.Properties (background, id_, color, gravity, margin, height, name, orientation, text, textSize, width, imageUrl)
import PrestoDOM.Types (Length(..))
import PrestoDOM.Util (render)

--update scores
updateScore::forall t74 t75. t74 -> t75 -> t75
updateScore keys score=

  score

--produce baloon
getCharItem ::forall a. Int -> Eff(random :: RANDOM | a) Prop
getCharItem a =
  randomRange 0.0 3.0 >>= \n ->
    randomInt 0 3 >>= \m ->
      pure{x:a*obstacleDist,y:groundPos - (m*50),key :a,id:"Prop",aid:n}

collisionOne::Player -> Prop -> Boolean
collisionOne player prop = if abs((200.0 - 150.0*sin(player.y))-toNumber(prop.y))<40.0 && abs(100.0 - toNumber(prop.x))<40.0
                              then true
                              else false

collisionAll::StateType -> Array Prop
collisionAll state =  filter (collisionOne state.player) state.props

main :: forall eff. Eff ( random::RANDOM, console :: CONSOLE, frp :: FRP, dom :: DOM | eff ) Unit
main = do
    _ <- log "Running"
    setOfChars <- (traverse getCharItem (1 .. charCount))
    let initialState = {props:setOfChars,player:{y:0.0,aid:0.0}, score:0, scorePos: {x: "30", y:"30"},gameStart:true, gameOver:false, groundSpeed:0}
    { stateBeh, updateState } <- render view initialState
    _<- updateState
      (validate <$> (key 32) <*> stateBeh)
      (animationFrame)
    pure unit
  where validate key oldState | oldState.gameOver==true || (oldState.gameStart==true && key==false) = oldState
        validate key oldState | oldState.gameStart == true && key == true = { props: (map (\n->if n.x<0 then {x:500*charCount,y:groundPos-50*((n.y+n.key) `mod` 3),id:n.id,key:n.key,aid:n.aid+0.1} else {x:n.x-8-oldState.score / 500,y:n.y,id:n.id,key:n.key,aid:if n.aid>1.9 then n.aid-1.9 else n.aid+0.1}) oldState.props)    ,player:{y:clamp 0.0 3.141 oldState.player.y+0.09,aid: if oldState.player.aid>2.9 then oldState.player.aid-2.8 else oldState.player.aid+0.1}, score:oldState.score+1, scorePos: {x: "30", y:"30"},gameStart:false, gameOver:false,groundSpeed:oldState.groundSpeed-8-oldState.score / 500}
        validate key oldState | key == true && oldState.player.y>3.14 = { props: (map (\n->if n.x<0 then {x:500*charCount,y:groundPos-50*((n.y+n.key) `mod` 3),id:n.id,key:n.key,aid:if n.aid>1.9 then n.aid-1.9 else n.aid+0.1} else {x:n.x-8-oldState.score / 500,y:n.y,id:n.id,key:n.key,aid:if n.aid>1.9 then n.aid-1.9 else n.aid+0.1}) oldState.props)    ,player:{y:0.0,aid:0.0}, score:oldState.score+1, scorePos: {x: "30", y:"30"},gameStart:false, gameOver:false,groundSpeed:oldState.groundSpeed-8-oldState.score / 500}
        validate key oldState | null (collisionAll oldState) == false = { props: (map (\n->if n.x<0 then {x:500*charCount,y:groundPos-50*((n.y+n.key) `mod` 3),id:n.id,key:n.key,aid:if n.aid>1.9 then n.aid-1.9 else n.aid+0.1} else {x:n.x-8-oldState.score / 500,y:n.y,id:n.id,key:n.key,aid:if n.aid>1.9 then n.aid-1.9 else n.aid+0.1}) oldState.props)    ,player:{y:clamp 0.0 3.141 oldState.player.y+0.09 , aid:3.0}, score:oldState.score+1, scorePos: {x: "30", y:"30"},gameStart:false, gameOver:true,groundSpeed:oldState.groundSpeed-8-oldState.score / 500}
        validate key oldState  = { props: (map (\n->if n.x<0 then {x:500*charCount,y:groundPos-50*((n.y+n.key) `mod` 3),id:n.id,key:n.key,aid:n.aid+0.1} else {x:n.x-8-oldState.score / 500,y:n.y,id:n.id,key:n.key,aid:if n.aid>1.9 then n.aid-1.9 else n.aid+0.1}) oldState.props)    ,player:{y:clamp 0.0 3.141 oldState.player.y+0.09,aid: if oldState.player.aid>2.9 then oldState.player.aid-2.8 else oldState.player.aid+0.1}, score:oldState.score+1, scorePos: {x: "30", y:"30"},gameStart:false, gameOver:false,groundSpeed:oldState.groundSpeed-8-oldState.score / 500}

view :: forall w i. StateType -> PrestoDOM i w
view state =
  --main layout
  linearLayout
  [ height $ V 200
  , width Match_Parent
  , background "#ffffff"
  , name "rootNode"
  , orientation "vertical"
  ]
  [
    linearLayout
    [ height $ V 200
    , width Match_Parent
    , background "#ffffff"
    , name "rootNodeNExt"
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
        , width Match_Parent
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
              height $ V 50
            , width $ V 50
            , margin $ "100,"<>show (200.0 - 150.0*sin(state.player.y))<>",0,0"
            ]
            [
              imageView
              [
              height Match_Parent
              , width Match_Parent
              , margin "0,0,0,0"
              , imageUrl $ "assets/TRex"<>fromMaybe "" (charAt 0 $ show state.player.aid)
              ]
            ]
          ]--,relativeLayout
          -- [ height Match_Parent
          -- , width Match_Parent
          -- , orientation "vertical"
          -- ]
          -- [
          --   linearLayout
          --   [
          --     height $ V 50
          --     wid
          --   , name "Ground"
          --   , width $ V 50
          --   , background "#888888"
          --   , margin $ "100,260,0,0"
          --   ]
          --   []
          -- ]
        ]
      ],
      --score board
      linearLayout
      [ height $ V 300
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
          , text "Chrome T-Rex Game!"
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
    ],
    relativeLayout
    [
      height $ V 30
      , width $ V 975
      , margin "0,40"
    ]
    [
    linearLayout
    [
      height $ V 30
      , id_ "ground0"
      , width $ V 975
      , margin $ show (mod state.groundSpeed 975)<>",5,0,0"
    ]
    [
    ],
    linearLayout
    [
      height $ V 30
      , id_ "ground1"
      , width $ V 975
      , margin $ show ((mod (state.groundSpeed) 975)+975)<>",5,0,0"
    ]
    [
    ],
    textView[
      width Match_Parent
    , margin "0,30,0,0"
    , text "Space To Jump"
    , gravity "center"
    , textSize "40"
    ]
    ]
  ]