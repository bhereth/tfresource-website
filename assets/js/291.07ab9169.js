(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{493:function(e,t,a){"use strict";a.r(t);var i=a(7),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("Traffic simulation models have been used for several decades to conduct detailed analyses of roadway designs and operational plans. Individual vehicles traverse detailed networks in very short time steps (typically 0.5 to 5 second intervals) in these models, and they explicitly model driver behavior such as lane changing and car following. Initially developed about the same time as the first "),a("a",{attrs:{href:"Trip_Based_Models"}},[e._v("Trip-Based Models")]),e._v(", they likewise were initially executed on mainframe computers. However, whereas trip-based models went on to become institutionalized in the urban planning process under strong federal leadership, traffic simulation models progressed at a slower rate. Over the past several decades traffic simulation models have caught up with travel demand models in terms of sophistication, quality of software, experience in practice, and to some extent, suitability for large-scale planning studies. Current platforms excel at visualization. Once in the domain of different specialists (traffic engineers and transportation modelers) that seldom collaborated, the two streams are converging as they are being used more in combination.")]),e._v(" "),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),a("p",[e._v("Most traffic simulation models use the familiar concepts of roadway networks and trip matrices. The former are typically far more detailed in geometric representation and lane configurations than static "),a("a",{attrs:{href:"Network_assignment"}},[e._v("Network assignment")]),e._v(" models. The latter are not only spatially more detailed than traditional trip matrices, but also more detailed in temporal respects as well. Such models also require explicit coding of traffic detectors and control systems to include traffic signal timing plans. Some traffic simulation packages can also optimize signal timings, reducing the amount of input data required to deploy them.")]),e._v(" "),a("p",[e._v("Owing to the amount of data required to develop them and their heavy computational requirements traffic simulation models have traditionally been restricted to small area studies, often encompassing no more than a few dozen traffic signals and the detailed land use patterns and networks accompanying them. Other simulation models were developed specifically for the study of freeway corridors. In recent years the advent of GIS, remote sensing capabilities, online traffic data, and signal timing optimization programs has enabled these models to be used for successively larger study areas. GUIs have significantly eased the coding and checking of input data, and some packages have interfaces to static traffic assignment models.")]),e._v(" "),a("h2",{attrs:{id:"applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applications"}},[e._v("#")]),e._v(" Applications")]),e._v(" "),a("p",[e._v("Aside from "),a("a",{attrs:{href:"TRANSIMS"}},[e._v("TRANSIMS")]),e._v(" there have been few attempts to replace traffic assignment models in urban areas with traffic simulation models. "),a("a",{attrs:{href:"http://www.worldscientific.com/doi/abs/10.1142/S0129183196000156?journalCode=ijmpc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rickert and Wagner (1996)"),a("OutboundLink")],1),e._v(" built a model of the German Autobahn network, and "),a("a",{attrs:{href:"http://dx.doi.org/10.3141/1644-10",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rakha et al. (1998)"),a("OutboundLink")],1),e._v(" described the application of the INTEGRATION model in Salt Lake City. Both were prototypical applications that did not lead to their use by public agencies, although further work was anticipated in both instances that would have resulted in calibrated and useful models. There are no known on-going attempts in North America to microsimulate traffic flows for entire urban networks outside of the "),a("a",{attrs:{href:"TRANSIMS"}},[e._v("TRANSIMS")]),e._v(" program.")]),e._v(" "),a("p",[e._v("At the corridor and subarea level, traffic simulation models are much more widely used in urban areas, with varying degrees of integration with travel demand models. In many instances, traffic count data and origin–destination matrices are used to develop demand estimates for the traffic simulation model. The former are usually directly transferable if in small enough units of time (15, 30, or 60-minute intervals). The latter are generally too coarse for direct use in such models. Intermediate steps to divide the data into the finer temporal intervals needed by the model, often based on observed diurnal patterns, are required. Most "),a("a",{attrs:{href:"Traffic_Analysis_Zone"}},[e._v("TAZs")]),e._v(" in travel demand models are too large to serve as entry and exit points in traffic simulation models, requiring an additional step to divide the origin–destination flows into sinks and sources within zones. Getting traffic dynamics right in traffic simulation models entails coding traffic entering and leaving the network where they do in real life, which is often small feeder streets, parking lots, etc. Several of these sinks and sources, and perhaps dozens of them, might be coded in the same area as a single TAZ. Such allocations are typically based on counts, field observation, or aerial or satellite photography.")]),e._v(" "),a("p",[e._v("Tour and activity-based models can mesh with traffic simulation models in several ways. Most tours and their constituent trips are assigned a discrete starting time, or grouped into finer intervals than possible with trip-based models, obviating the need to slice peak periods into the finer intervals required by traffic simulation models. Because synthetic population generators create individual households it is possible to geocode them as point locations. However, these synthetic households will only rarely match the characteristics of a real household at that location. The aggregate characteristics of the population at the level at which the synthesis was constrained (typically census tract or public use microdata area) will match, but individual observations within them will not necessarily do so at the level of accuracy required by these models.")]),e._v(" "),a("p",[e._v('A "hybrid model" may combine a traffic simulation model with a travel forecasting model.  Further disccussion of '),a("a",{attrs:{href:"https://tfresource.org/topics/Hybrid_models_in_project_level_traffic_forecasting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hybrid models"),a("OutboundLink")],1),e._v(" may be found elsewhere on this site.")])])}),[],!1,null,null,null);t.default=r.exports}}]);