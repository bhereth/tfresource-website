(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{504:function(e,t,o){"use strict";o.r(t);var s=o(7),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("There are important considerations that affect how trips that include multiple transit modes are modeled.  Modst models use the following terms to describe the modes that constitute certain parts of the overall trip:")]),e._v(" "),o("p",[o("strong",[e._v("Main Mode:")]),e._v(" The mode that is considered to be the most important in a multi-mode transit trip. There is disagreement about how to define the main mode for multi-mode trips.")]),e._v(" "),o("p",[e._v("The most common way to determine the main mode is through a "),o("a",{attrs:{href:"Modal_hierarchy"}},[e._v("modal hierarchy")]),e._v(", but there are other possible ways to define the main mode, including the following:")]),e._v(" "),o("ul",[o("li",[e._v("The mode with the highest percentage of time on the trip,")]),e._v(" "),o("li",[e._v("The mode that covers the longest distance on the trip, or")]),e._v(" "),o("li",[e._v("The mode with the highest monetary cost.")])]),e._v(" "),o("p",[o("strong",[e._v("Access Mode:")]),e._v(' A mode used to get from a trip origin to a "main mode"')]),e._v(" "),o("p",[o("strong",[e._v("Egress Mode:")]),e._v(' A mode used to get from the "main mode" to the trip destination.')]),e._v(" "),o("p",[e._v("Traditionally, access and egress modes to and from transit have included walk and drive (auto), sometimes broken out into park-and-ride and kiss-and ride. Recently, there has been more interest in including bike as a transit access or egress mode. If one transit mode is used to access another main mode, it can also be considered an access mode (i.e. using local bus to get to commuter rail).")]),e._v(" "),o("p",[e._v("The rapid increase in the availability of shared mobility modes has generated substantial interest in their uses for transit access and egress.  Transportation network companies (TNCs), bikesharing, and micromobility (such as e-scooters) have expanded transit access and egress possibilities for travelers who may not own autos or bicycles or who may wish to use these modes for transit egress, where their personal vehicles are unavailable.  Some models now include bike access and egress and/or TNC access and egress.")]),e._v(" "),o("h3",{attrs:{id:"modal-aggregation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modal-aggregation"}},[e._v("#")]),e._v(" Modal Aggregation")]),e._v(" "),o("p",[e._v("The number of transit modes to consider as separate choices in "),o("a",{attrs:{href:"Mode_Choice"}},[e._v("Mode Choice")]),e._v(' is an important design consideration for the modeling process. On one end of the spectrum, all route choices that use transit could be considered a singular "transit" mode, often with separte walk and auto access modes (or possibley separate egress modes). On the other end of the spectrum, one could consider every possible '),o("a",{attrs:{href:"transit_sub_mode"}},[e._v("transit sub-mode")]),e._v(" as separate, also possibly diversified by access and egress mode.  Common definitions for the main mode include:")]),e._v(" "),o("ul",[o("li",[e._v("Local Bus")]),e._v(" "),o("li",[e._v("Express/Premium Bus")]),e._v(" "),o("li",[e._v("Commuter Rail")]),e._v(" "),o("li",[e._v("Ferry")]),e._v(" "),o("li",[e._v("Subway")]),e._v(" "),o("li",[e._v("Light Rail")])]),e._v(" "),o("h3",{attrs:{id:"considerations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#considerations"}},[e._v("#")]),e._v(" Considerations")]),e._v(" "),o("p",[e._v("The way mode choice models work, each additional choice will add an additional attractiveness to transit in general, so it is very important that each combination should:")]),e._v(" "),o("ul",[o("li",[e._v("be a feasible and known alternative to the subject the model is applied to (or estimated from) in mode choice")]),e._v(" "),o("li",[e._v("provide an additional level of accessibility to the choice. Being able to take a red bus or bus shouldn't make transit more attractive than taking a blue bus...but it is likely true that being able to take either the ferry, subway, or bus makes transit as a whole more attractive.")])]),e._v(" "),o("hr")])}),[],!1,null,null,null);t.default=a.exports}}]);