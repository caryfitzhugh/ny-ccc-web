import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MapLink from '../utils/map_link';
import main_photo from '../images/actions/take_action.jpg'

import DefaultLayout from './../layouts/default';
import DatagrapherLink from '../utils/datagrapher_link';
import Subsection from '../layouts/subsection';
import "./index.css";

const ViewMap = (props) =>
  <MapLink className='btn btn-block btn-primary' >
    View Map
  </MapLink>;

const ViewDatagrapher = (props) =>
  <DatagrapherLink className='btn btn-block btn-primary'>
    View Datagrapher
  </DatagrapherLink>;

const SubNav = (props) => <ul>
  {props.subsections.map((subsection, indx) => {
    return <li key={indx}>
      <Link to={"#"+subsection.id}>{subsection.name}</Link>
    </li>
  })}
</ul>

class ActionsPage extends Component {
  render() {
    let page_image = main_photo;

    let subsections = [
      {id: "planning",
        name:"Planning",
        href:"/actions/planning",
        content: <p>
              Listen to them! They're dying, Artoo! Curse my metal body! I wasn't fast enough. It's all my fault! My poor master!
        </p>
       },
      {id: "implementation",
        name:"Implementation",
        href:"/actions/implementation",
        content: <div>
            The screaming and hollering is the sound of joyous relief. The walls have stopped moving. Han, Chewie and Leia embrace in the background.

        </div>
       },
       {id: "outreach",
         name:"Outreach / Education",
         href: "/actions/outreach-education",
         content: <div>
          Ben enters a humming service trench that powers the huge tractor beam. The trench seems to be a hundred miles deep. The clacking sound of huge switching devices can be heard. The old Jedi edges his his way along a narrow ledge leading to a control panel that connects two large cables. He  makes several adjustments in the computer terminal, and several lights on the board go from red to blue.
         </div>
       }
    ];

    return (
      <DefaultLayout
        className='actions-index'
        nav_actions= {[<ViewMap key={0}/> ,
                       <ViewDatagrapher key={1} />]}
        subnav={<SubNav subsections={subsections}/>}>
        <h1>Take Action</h1>
        <div className='lead-image col-12 col-md-5 float-right'>
          <img alt={'sectors example'} src={page_image} />
          <div className='image-credit'> INT. DEATH STAR - UNUSED HALLWAY</div>
        </div>

        <p>
               The group exits the garbage room into a dusty, unused hallway.  
               Han and Luke remove the trooper suits and strap on the blaster 
               belts. HAN If we can just avoid any more female advice, we ought to be able to get 
               out of here Chewie begins growling and points to the hatch to the garbage 
               room, as he runs away and then stops howling.
        </p>

        {subsections.map((subsection, indx) => {
          return <Subsection key={indx} {...subsection}
                  content={ <div>
                        {subsection.content}
                        {subsection.href ? <Link to={subsection.href} className='btn btn-secondary btn-block'>View {subsection.name}</Link> : null}
                      </div>}
                  />})}
      </DefaultLayout>
    );
  }
}

export default ActionsPage;
