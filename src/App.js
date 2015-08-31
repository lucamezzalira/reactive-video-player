'use strict'

import React from 'react';
import Playback from './Playback';
import Controls from './Controls';
import PlaylistModel from './PlaylistModel';

var a = new PlaylistModel();




  //TODO: define context
  //TODO: define intent for both components or create 2 differents
  //TODO: reactiveX and streams


React.render(<div>
               <Playback/>
               <Controls/>
             </div>, document.body);
