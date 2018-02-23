module Game.Types where

type CharItem = {
  x     :: Int
, y     :: Int
, id    :: String
}

type Player = {
  y :: Number
}

type StateType = {
   props   :: Array CharItem
,  player  :: Player
,  score     :: Int
,  scorePos  :: {x :: String, y :: String}
,  gameStart :: Boolean
,  gameOver  :: Boolean
}
