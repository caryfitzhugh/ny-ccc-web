import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class AboutPage extends Component {
  render() {
    return (
      <div className='about-page'>
        <Header />
          <div className='container'>
            <h1>About this Website</h1>
            <p>The New York Climate Change Science Clearinghouse (NYCCSC) is a gateway for policymakers, local planners, and the public to identify and access documents, data, websites, tools, and maps relevant to climate change adaptation and mitigation across New York State. The goal of the NYCCSC is to support scientifically sound and cost-effective decision-making. The vision is a dynamic site where users can find information in multiple ways, including through interactive tools that use data from different sources.</p>

            <h4>What is a Clearinghouse?</h4>
            <p>A clearinghouse collects and offers information on a given topic. The NYCCSC provides access to resources relevant to mitigation of, adaptation to, and building resiliency for climate change in New York State. This includes information about greenhouse gas emissions and atmospheric concentrations, projected temperature and precipitation changes, climate effects such as sea level rise and extreme weather events, and more. It also catalogs specific vulnerabilities, risks, and strategies for and across sectors, including agriculture, water resources, coastal zones, ecosystems, buildings, transportation, telecommunications, energy, and public health.</p>

            <h4>How is the NYCCSC different from other climate sites?</h4>
            <p>The NYCCSC offers a curated clearinghouse with a comprehensive search feature, a customizable data grapher, and an interactive map and GIS viewer.</p>
            <p><span className="startText">Curated clearinghouse.</span> NYCCSC’s curator prioritizes resources to include based on their credibility and relevance to the users. The curator also makes choices about the resources included on the site based on the NYCCSC Business Rules (described below). The curator is assisted by a Content Team and Sector Expert Groups.</p>
            <p><span className="startText">Search feature.</span>The NYCCSC search feature allows users to search by keyword and to filter searches by sector, resource type, climate changes, effects, strategies, and actions. Users may also sort resources by location in New York State by clicking on a map.</p>
            <p><span className="startText">Customizable climate data grapher.</span>The NYCCSC climate data grapher is an interactive tool to generate time-series graphs for climate changes with historical data and future projections. Users can download the charts.</p>
            <p><span className="startText">Interactive map and GIS viewer.</span>The NYCCSC interactive map of climate change and related data allows users to select map layers to display from a menu, find layers by sector, vary parameters within certain layers, and select from a variety of base layers and regional boundaries. For each map layer, links are available to metadata and the original source.</p>

            <h4>Intended Audience</h4>
            <p>The NYCCSC welcomes policymakers, analysts, scientists, planners, businesses, and the general public to the site; however, the primary intended audiences are local planners and decision-makers and those who support their work. The NYCCSC streamlines the decision-making process by helping to identify problems, investigate solutions, and take action. A decision-maker can use the NYCCSC to identify vulnerable infrastructure, residential areas, and ecosystems; evaluate the risks posed by climate change; and develop strategies and implementation plans for their town or city.</p>

            <h4>Populating the NYCCSC</h4>
            <p><span className="startText">What is included on the site.</span>The NYCCSC contains resources, data, and information that support decision-makers and planners in their work on climate change. This content includes information on greenhouse gas emissions and atmospheric concentrations, climate changes, effects, strategies for mitigating, adapting to, and building resiliency for climate change, and tools for implementing these strategies. The NYCCSC is committed to including information with scientific merit from credible sources.</p>
            <p>Where applicable, the NYCCSC chooses data and information that NYS uses for statewide and local climate planning. The NYCCSC currently covers the sectors identified in <a href='/catalog/doc?DocId=vitroIndividual'>NYSERDA’s ClimAID report:</a> agriculture, buildings, coastal zones, ecosystems, energy, public health, telecommunications, transportation, and water resources.</p>
            <p><span className="startText">Business rules for the site.</span>The NYCCSC <a href='/highlights/about#business-rules'>Business Rules</a> define what resources are included on the NYCCSC, with what priority, and in what form. The Business Rules were developed in collaboration with a group of sector experts to understand how the experts evaluate the resources that they use in their own work. The Business Rules address the scope, source, and format of resources considered for inclusion on the site.</p>

            <hr />

            <h2>About Us</h2>
            <h4>Project Background</h4>
            <p>State and local planners that are addressing climate change consistently reported that information was plentiful, but no central space existed for neighboring communities to identify and access it. The task of locating and sorting through information about vulnerabilities, as well as developing, researching, and assessing mitigation and adaptation strategies, was often difficult and time consuming.</p>
            <p>Offering curated documents, data, websites, tools, and maps in an online repository lessens the burden on individual municipalities and businesses, helps people make decisions about what information is credible, and promotes joint planning and information sharing. The customizable data and map products are meant to ease the job of the local planner in analyzing information, making and implementing plans, and educating the public.</p>

            <h4>About the Contributors</h4>
            <p>The development of the NYCCSC was initiated and supported by the <span className='startText'>New York State Energy Research and Development Authority (NYSERDA).</span> The project team includes <span className='startText'>Northeast States for Coordinated Air Use Management (NESCAUM), Cornell University’s Mann Library, the Northeast Regional Climate Center (NRCC), the State University of New York Environmental Sciences and Forestry’s (SUNY ESF) Department of Forest and Natural Resource Management, and the Northeastern Regional Climate Services Director of the National Oceanic and Atmospheric Administration (NOAA).</span></p>
            <p>NESCAUM is an association of the air quality divisions for New York, New Jersey, and the six New England states. It conducts technical analysis to support regional policy planning on air quality issues including climate change.</p>
            <p>Mann Library at Cornell University supports the instruction, research, and extension programs of the College of Agriculture and Life Sciences and College of Human Ecology, and is a land grant library. The NRCC is housed at Cornell. It collects, disseminates, and facilitates the use of climate data and information, as well as monitors and assesses climatic conditions and impacts in the 12-state, northeastern region of the United States.</p>
            <p>The Department of Forest and Natural Resource Management at SUNY ESF provides science-based education to students seeking careers in the viable and sustainable management of forest and natural resources at the local, state, and national levels.</p>
            <p>The Northeastern Regional Climate Services Director at NOAA is part of National Centers for Environmental Information (NCEI). The Northeastern Regional Climate Services Director supports the development and sharing of climate science and information products and services for informed decision-making across NOAA and between other organizations working on climate change.</p>

            <h4>Contact Us</h4>
            <p>Email: <a href='mailto:info@nyclimatescience.org'>info@nyclimatescience.org</a>
            <p>Phone: 607.273.6623 ext 22</p>
            </p>

            <h4>Business Rules</h4>
            <p> The expected audience for the New York Climate Change Science Clearinghouse includes decision makers, policy makers, researchers, and the general public. The Clearinghouse will apply the following business rules for populating the site with resources, including documents, data, maps, and tools.</p>

            <h4>I. Relevancy</h4>
              <span className="startText">Geography</span>
              <ol>
                <li>Preference will be given to resources that provide information about New York State. We aim to include a mix of resources that are relevant at different geographical scales, ranging from the town or city level to statewide.</li>
                <li>Next in relevance are resources having to do with neighboring states, and regions that contain or border New York: the Northeast, the mid-Atlantic, New England, and the Great Lakes.</li>
                <li>We will include resources with other geographic focuses if the content is relevant to New York State. Examples could include resources from more distant states, resources relevant to the entire East Coast or the entire country, or resources from other countries that have relevant parallels (e.g., information about climate change and wine production in Europe that could also apply to New York).</li>
              </ol>
              <span className="startText">Subject Matter</span>
              <ol>
                <li>Preference will be given to resources that provide information about or otherwise help to address mitigation of or adaptation to climate change. Climate data (including projections) and information about climate change impacts and responses are key types of content. A guiding consideration is whether the content addresses one or more of the ClimAID/Clearinghouse sectors: Agriculture, Buildings, Coastal Zones, Ecosystems, Energy, Public Health, Telecommunications, Transportation, and Water Resources.</li>
                <li>Some decisions about subject matter relevancy of resources will be made on a case-by-case basis by the curator and the project team with guidance from sector experts. For example, the Clearinghouse might allow public health officials to find climate data together with health and demographic data, but we cannot claim to be a comprehensive source of all health and demographic data relevant to New York State. We will have to select the most relevant ancillary resources, through research on the curator’s part and with guidance from the project team and especially sector experts.</li>
              </ol>
              <span className="startText">Updates to Information</span>
              <ol>
                <li>If the Clearinghouse contains a resource and a new version or successor is released, we will generally add the new version, retain the old one, and indicate through metadata the relationship between them. For example, The U.S. Global Change Research Program published the 1st, 2nd, and 3rd National Climate Assessments in 2000, 2009, and 2014, and is preparing for the next one.</li>
                <li>An exception to this might be if an older version was found to have substantial errors, in which case we would not want to encourage its distribution.</li>
              </ol>

            <h4>II. Utility</h4>
              <span className="startText">Information type</span>
              <ol>
                <li>The Clearinghouse is intended to help users find applied science that they can put to practical use. Preference will be given to information that can be applied “in the field” by practitioners.</li>
              </ol>
              <span className="startText">Scope</span>
              <ol>
                <li>The Clearinghouse will include a mix of broadly applicable and narrowly focused material.</li>
                <li>Where appropriate, the Clearinghouse will strive to include resources that will be of use across multiple sectors, although resources of more narrow focus will also be included if important to at least one ClimAID sector (defined above).</li>
              </ol>
              <span className="startText">Intent</span>
              <ol>
                <li>The Clearinghouse will include resources with the purpose of sharing knowledge and information, but not those meant to influence for financial profit or political purposes.</li>
                <li>The Clearinghouse may include links to commercial websites, such as companies that provide relevant software tools or analysis. Examples include Warren Pinnacle Consulting, Inc. where users can find information about the Sea Level Affecting Marshes Model (SLAMM) (http://warrenpinnacle.com/prof/SLAMM/index.html ) and AIR Worldwide Corporation, where users can find information about the estimated insured value of coastal properties (http://www.air-worldwide.com/Home/AIR-Worldwide/ ).</li>
              </ol>
              <span className="startText">Multiple Resources Covering Same Information</span>
              <ol>
                <li>Where possible, we will include multiple resources covering the same information, and we will strive to provide enough information to allow the user to decide which source(s) they want to use. For example, we include multiple tools that show sea level rise projections on the East Coast and its impacts. We provide metadata so users know the source of the data and can find out details of the projections and impacts analysis directly from the source. We will indicate in the metadata if datasets are officially sanctioned by New York State or another governing body or organization.</li>
                <li>When choosing between multiple resources covering the same information, we will apply these business rules to make the decision.</li>
              </ol>

            <h4>III. Credibility</h4>
              <span className="startText">Use</span>
              <ol>
                <li>Preference will be given to resources that are widely used by practitioners in New York State or elsewhere, in particular by state and local decision-makers.</li>
              </ol>
              <span className="startText">Source</span>
              <ol>
                <li>The Clearinghouse content review team will accept content that is based on reproducible science reviewed and accepted through traditional scholarly communication channels, including peer-reviewed journal articles from traditional and Open Access publishers. Grey literature or publications released through other channels (including government reports, conference proceedings and theses) are also open for consideration, particularly if they provide substantial references to peer-reviewed sources. Articles or content based on articles printed in pay-to-publish predatory journals, including those listed on the following site —https://scholarlyoa.com/2015/01/02/bealls-list-of-predatory-publishers-2015/ — are not likely to be included in the Clearinghouse.</li>
                <li>Citizen-collected information with demonstrated rigor (and for which no other widely used resource exists) will be measured across other criteria to determine appropriateness for inclusion on the site.</li>
                <li>The clearinghouse will include resources on Traditional Ecological Knowledge that are from or relevant to tribal communities in New York State.</li>
              </ol>
            <h4>IV. Access</h4>
            <span className="startText">Availability</span>
              <ol>
                <li>Preference will be given to resources that are available through government websites or other open access sources.</li>
                <li>We will try to limit the resources we include that are behind a paywall or require registration to access, but we will not exclude these types of resources if they meet our other criteria for relevance, utility, credibility, etc.</li>
              </ol>
            <span className="startText">Format of information</span>
              <ol>
                <li>We will make documents available for download in PDF format.</li>
                <li>GIS layers may be included in different formats. We will provide a link to the original source so users can learn about the format or choose which format to download (if they are interested in downloading, not just viewing, data).</li>
                <li>Data files are typically accessible from the original source rather than held in the Clearinghouse, so they can take on a variety of formats determined by the original source.</li>
              </ol>
          </div>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
