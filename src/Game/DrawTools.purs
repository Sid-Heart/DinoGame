module Game.DrawTools where

import PrestoDOM.Types
import Prelude
import Data.Function (($))
import Data.Int (toNumber)
import Data.Number.Format (toString)
import Data.Semigroup ((<>))
import Game.Utils (toChar)
import PrestoDOM.Core (Prop)
import PrestoDOM.Elements (linearLayout, imageView)
import PrestoDOM.Properties (background, gravity, height, id_, imageUrl, margin, orientation, text, textSize, width)


charDraw::forall t1 t23 t3 t4. t1 -> { id :: String , x :: Int, y :: Int| t23} -> VDom (Array (Prop t4)) t3
charDraw state idpos =
        if idpos.y==200
            then
              linearLayout
              [ 
               width $ V 50
              , height $ V 80
              , orientation "horizontal"
              , gravity "center"
              , margin ((toString (toNumber (idpos.x)))<>","<>(toString ((toNumber (idpos.y-30))))<>",0,0")
              ]
              [
                imageView
                 [ width $  Match_Parent
                 , height $  Match_Parent
                 , margin "0,0,0,0"
                 , imageUrl "assets/Cactus0"
                 ]
               ]
            else
                linearLayout
                [ 
                width $ V 70
                , height $ V 50
                , orientation "horizontal"
                , gravity "center"
                , margin ((toString (toNumber (idpos.x)))<>","<>(toString ((toNumber (idpos.y))))<>",0,0")
                ]
                [
                    imageView
                    [ width $  Match_Parent
                    , height $  Match_Parent
                    , margin "0,0,0,0"
                    , imageUrl "assets/Bird0"
                    ]
                ]   
