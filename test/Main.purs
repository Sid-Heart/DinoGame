module Test.Main where

import Prelude

import DOM (DOM) as DOM
import FRP (FRP) as FRP

import PrestoDOM.Types
import PrestoDOM.Elements
import PrestoDOM.Events
import PrestoDOM.Properties

import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log, logShow)
import Control.Plus ((<|>))
import PrestoDOM.Core
import PrestoDOM.Util as U

main :: forall t. Eff ( dom :: DOM.DOM , console :: CONSOLE , frp :: FRP.FRP | t ) Unit
main = log "Hello"