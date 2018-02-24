module Game.Types where

type Prop = {
  x     :: Int
, y     :: Int
, key   :: Int
, id    :: String
, aid   :: Number
}

type Player = {
  y :: Number
  ,aid :: Number
}

type StateType = {
   props   :: Array Prop
,  groundSpeed ::Int
,  player  :: Player
,  score     :: Int
,  scorePos  :: {x :: String, y :: String}
,  gameStart :: Boolean
,  gameOver  :: Boolean
}
