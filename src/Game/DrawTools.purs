module Game.DrawTools where

import Data.Function(($))
import Data.Semigroup((<>))
import PrestoDOM.Core(Prop)
import PrestoDOM.Elements(linearLayout,textView)
import PrestoDOM.Properties(background, gravity, height, id_, margin, orientation, text, textSize, width)
import PrestoDOM.Types

import Game.Utils(toChar)

import Data.Int (toNumber)
import Data.Number.Format (toString)


charDraw::forall t1 t23 t3 t4. t1 -> { id :: String , x :: Int, y :: Int| t23} -> VDom (Array (Prop t4)) t3
charDraw state idpos =
              linearLayout
              [ 
               width $ V 30
              , height $ V 30
              , orientation "horizontal"
              , background "#000000"
              , gravity "center"
              , margin ((toString (toNumber (idpos.x)))<>","<>(toString ((toNumber (idpos.y))))<>",0,0")
              ]
              []
              -- [
              --   textView
              --   [ width $ V 30
              --   , height $ V 30
              --   , margin "10,0,0,0"
              --   , textSize "20"
              --   ]
              -- ]
