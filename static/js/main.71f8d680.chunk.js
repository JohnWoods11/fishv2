(this.webpackJsonpfishv2=this.webpackJsonpfishv2||[]).push([[0],{13:function(e,t,a){e.exports={container:"catch_container__2PM1J",species:"catch_species__1YkKM",weight:"catch_weight__3W8MJ",catchStats:"catch_catchStats__3b_MT",statsPair:"catch_statsPair__P5rQi",recordButton:"catch_recordButton__2lfeK"}},18:function(e,t,a){e.exports={container:"session_container__lCfA5",header:"session_header__2r-16",castInfo:"session_castInfo__1u3MJ",castingOptions:"session_castingOptions__91fQk",verticalButtons:"session_verticalButtons__Lw9As",horizontalButtons:"session_horizontalButtons__yWM0a",catchButton:"session_catchButton__kwDQb",otherButton:"session_otherButton__39D0y",backButton:"session_backButton__3lLW1"}},24:function(e,t,a){e.exports={container:"lakes_container__2X8aK",accordionContainer:"lakes_accordionContainer__J0kBt",lakeHeader:"lakes_lakeHeader__3Hrvc",lakeBody:"lakes_lakeBody__1E5C8",bodyButtons:"lakes_bodyButtons__312n9",backButton:"lakes_backButton__3EpyJ"}},35:function(e,t,a){e.exports={container:"home_container__BAwCE",button:"home_button__hXUXe"}},53:function(e,t,a){e.exports=a(68)},58:function(e,t,a){},59:function(e,t,a){},6:function(e,t,a){e.exports={container:"statistics_container__36Eba",statsOptions:"statistics_statsOptions__1zjji",statSelectorButton:"statistics_statSelectorButton__Xk6JP",filterContainer:"statistics_filterContainer__OE6JI",generalStats:"statistics_generalStats__2NTaS",generalStat:"statistics_generalStat__3TYK1",generalStatHeader:"statistics_generalStatHeader___6c5W",categoryStats:"statistics_categoryStats__1viJP",timeGraphContainer:"statistics_timeGraphContainer__3JM9y",graphContainer:"statistics_graphContainer__3xyp2",year:"statistics_year__3ubV0",day:"statistics_day__1lVow",backButton:"statistics_backButton__1RHNT"}},68:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(21),i=a.n(r),c=(a(58),a(50)),l=a(31),o=a(26),u=a(27),m=a(30),h=a(28),S=(a(59),a(14)),d=a(8),p=(a(60),a(25)),g=a(7),v=a(35),f=a.n(v);var y=function(e){var t=Object(s.useState)(!1),a=Object(p.a)(t,2),r=a[0],i=a[1];return r?n.a.createElement(d.a,{to:"/fishv2/session"}):n.a.createElement("div",{className:f.a.container},n.a.createElement(S.b,{to:"/fishv2/lakes"},n.a.createElement(g.a,{className:f.a.button,size:"lg"},"Lakes")),n.a.createElement(S.b,{to:"/fishv2/stats"},n.a.createElement(g.a,{className:f.a.button,size:"lg"},"Statistics")),n.a.createElement(g.a,{className:f.a.button,size:"lg",variant:e.currentSession?"primary":"secondary",onClick:function(){e.currentSession&&i(!0)}},"Session"))},E=a(36),k=a(32),b=a(24),C=a.n(b);var _=function(e){var t=Object(s.useState)(!1),a=Object(p.a)(t,2),r=a[0],i=a[1];return r?n.a.createElement(d.a,{to:"/fishv2/session"}):n.a.createElement("div",{className:C.a.container},n.a.createElement("div",{className:C.a.accordionContainer},n.a.createElement(E.a,{defaultActiveKey:"0"},e.lakes.map((function(t,a){return n.a.createElement(k.a,{Key:a},n.a.createElement(E.a.Toggle,{as:k.a.Header,eventKey:a},n.a.createElement("div",{className:C.a.lakeHeader},t.name,n.a.createElement("div",null,n.a.createElement(g.a,{variant:"success",sz:"lg",onClick:function(t){!function(t,a){e.currentSession?t.stopPropagation():(e.startSession(a),i(!0))}(t,a)}},"Fish")))),n.a.createElement(E.a.Collapse,{eventKey:a},n.a.createElement(k.a.Body,null,n.a.createElement("div",{className:C.a.lakeBody},"Stats here some time",n.a.createElement("div",{className:C.a.bodyButtons},n.a.createElement(g.a,{variant:"primary",sz:"lg",onClick:function(t){return function(t,a){e.editLake(a),t.stopPropagation()}(t,a)}},"Edit"),n.a.createElement(g.a,{variant:"danger",onClick:function(){return function(t){e.deleteLake(t)}(a)}},"Delete"))))))})),n.a.createElement(k.a,null,n.a.createElement(E.a.Toggle,{as:k.a.Header,eventKey:e.lakes.length},n.a.createElement("div",{className:C.a.lakeHeader},"Add a lake",n.a.createElement("div",null,n.a.createElement(g.a,{variant:"primary",sz:"lg",onClick:function(t){return function(t){e.addLake(),t.stopPropagation()}(t)}},"Add"))))))),n.a.createElement(S.b,{to:"/fishv2/"},n.a.createElement(g.a,{className:C.a.backButton,variant:"primary"},"Back")))},N=a(18),I=a.n(N),T=a(10),O=a(19),B=a(20);var w=function(e){var t=Object(s.useState)(!1),a=Object(p.a)(t,2),r=a[0],i=a[1],c=Object(s.useState)(!1),l=Object(p.a)(c,2),o=l[0],u=l[1];return r?n.a.createElement(d.a,{to:"/fishv2/"}):o?n.a.createElement(d.a,{to:"/fishv2/catch"}):e.currentSession?n.a.createElement("div",{className:I.a.container},n.a.createElement("div",null,n.a.createElement("div",{className:I.a.header},e.lakes[e.currentSession.lakeIndex].name," "),n.a.createElement("div",{className:I.a.castInfo,onClick:!1===e.currentSession.casting?function(){e.cast()}:null},!0===e.currentSession.casting?n.a.createElement("div",null,e.currentSession.casts," ",e.currentSession.currentCast.bites):"CAST")," ",n.a.createElement("div",{className:I.a.castingOptions},n.a.createElement(O.a,{as:B.a,variant:"info",title:e.currentSession.bait?e.currentSession.bait:"NO BAIT"},e.baits.map((function(t,a){return n.a.createElement(T.a.Item,{eventKey:a,onClick:function(){!function(t){e.changeBait(t)}(t)}},t)}))),n.a.createElement(O.a,{as:B.a,variant:"info",title:e.currentSession.style?e.currentSession.style:"NO STYLE"},e.styles.map((function(t,a){return n.a.createElement(T.a.Item,{eventKey:a,onClick:function(){!function(t){e.changeStyle(t)}(t)}},t)})))),n.a.createElement("div",{className:I.a.verticalButtons},n.a.createElement(g.a,{className:I.a.catchButton,variant:"success",size:"lg",onClick:function(){e.currentSession.casting&&(e.recordReelIn(),u(!0))}},"FISH LANDED")," ",n.a.createElement("div",{className:I.a.horizontalButtons},n.a.createElement(g.a,{className:I.a.otherButton,variant:"primary",onClick:function(){e.currentSession.casting&&e.addBite()}},"BITE OR RUN")," ",n.a.createElement(g.a,{className:I.a.otherButton,variant:e.currentSession.casting?"info":"danger",onClick:e.currentSession.casting?function(){e.recordReelIn(),e.recordCatchFail(),e.endCast()}:function(){i(!0),e.endSession()}},e.currentSession.casting?"END CAST":"END SESSION")))),n.a.createElement(S.b,{to:"/fishv2/"},n.a.createElement(g.a,{className:I.a.backButton},"Back"))):n.a.createElement(d.a,{to:"/"})},F=a(13),H=a.n(F),x=a(43),A=a(37),L=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).changeSpecies=function(e){var t=s.state.catch;t.species=e,s.setState({catch:t})},s.changeWeight=function(e){var t=s.state.catch;t.weight=e.target.value,s.setState({catch:t})},s.addCatch=function(){s.props.recordCatchSuccess(s.state.catch.species,s.state.catch.weight),s.props.endCast(),s.setState({toSession:!0})},s.state={catch:{lakeIndex:null,castTime:null,catchTime:null,species:null,weight:null,bait:null,style:null},toSession:!1},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){if(this.props.currentSession){var e=this.state.catch;e.lakeIndex=this.props.currentSession.lakeIndex,e.castTime=this.props.currentSession.currentCast.castTime,e.catchTime=this.props.currentSession.currentCast.reelInTime,e.bait=this.props.currentSession.bait,e.style=this.props.currentSession.style,this.setState({catch:e})}}},{key:"render",value:function(){var e=this;return this.props.currentSession?this.state.toSession?n.a.createElement(d.a,{to:"/fishv2/session"}):n.a.createElement("div",{className:H.a.container},n.a.createElement(O.a,{size:"lg",className:H.a.species,as:B.a,variant:"primary",title:this.state.catch.species?this.state.catch.species:"NO SPECIES"},this.props.species.map((function(t,a){return n.a.createElement(x.a,{eventKey:a,onClick:function(){e.changeSpecies(t)}},t)}))),n.a.createElement(A.a,{className:H.a.weight},n.a.createElement(A.a.Group,{controlId:"weightRange"},n.a.createElement(A.a.Label,null,this.state.catch.weight?this.props.kilosToPoundsReadable(this.state.catch.weight):"NO WEIGHT RECORDED"),n.a.createElement(A.a.Control,{type:"range",min:"0",max:"20",step:"0.028349",onChange:this.changeWeight,value:this.state.catch.weight}))),n.a.createElement("div",{className:H.a.catchStats},n.a.createElement("div",{className:H.a.statsPair},n.a.createElement("div",null,null!==this.state.catch.lakeIndex?this.props.lakes[this.state.catch.lakeIndex].name:"NA"),n.a.createElement("div",null," ",this.props.mSToDate(this.state.catch.catchTime).toLocaleDateString())),n.a.createElement("div",{className:H.a.statsPair},"Cast time:"," ",n.a.createElement("div",null,this.props.mSToDate(this.state.catch.castTime).toLocaleTimeString())),n.a.createElement("div",{className:H.a.statsPair},"Catch Time:"," ",n.a.createElement("div",null,this.props.mSToDate(this.state.catch.catchTime).toLocaleTimeString()," ")),n.a.createElement("div",{className:H.a.statsPair},"Species:"," ",n.a.createElement("div",null,this.state.catch.species?this.state.catch.species:"NA")),n.a.createElement("div",{className:H.a.statsPair},"Weight:"," ",n.a.createElement("div",null,this.state.catch.weight?this.state.catch.weight:"NA")),n.a.createElement("div",{className:H.a.statsPair},"Bait:"," ",n.a.createElement("div",null,this.state.catch.bait?this.state.catch.bait:"NA")),n.a.createElement("div",{className:H.a.statsPair},"Style:"," ",n.a.createElement("div",null,this.state.catch.style?this.state.catch.style:"NA"))),n.a.createElement(g.a,{variant:"success",size:"lg",className:H.a.recordButton,onClick:this.addCatch},"ADD CATCH")):n.a.createElement(d.a,{to:"/fishv2/"})}}]),a}(n.a.Component),J=a(6),D=a.n(J),j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).resetStatsScreen=function(){s.setState({filteredCastList:[],generalStats:{catchRate:null,timeCasted:null,bites:null,catches:null,heaviestCatch:null,filteredCastTotal:null},isCastStats:!1,isFishStats:!1})},s.showCastStats=function(){var e=[];Object(l.a)(s.props.castHistory).map((function(t,a){e.push(a)})),s.mapStats(e),s.setState({isCastStats:!0})},s.mapStats=function(e){for(var t=e,a=[],n=0;n<372;n++)a.push(0);for(var r=[],i=0;i<s.props.baits.length+1;i++)r.push(0);for(var c=[],l=0;l<s.props.styles.length+1;l++)c.push(0);for(var o=[],u=0;u<s.props.species.length+1;u++)o.push(0);var m=0,h=0,S=0,d=0;t.map((function(e){if(!0===s.props.castHistory[e].catchSuccess){m++;var t=s.props.mSToDate(s.props.castHistory[e].reelInTime),n=t.getDate()+31*t.getMonth();a[n]+=1,null===s.props.castHistory[e].species?o[s.props.species.length]+=1:o[s.props.species.indexOf(s.props.castHistory[e].species)]+=1}h+=s.props.castHistory[e].duration,S+=s.props.castHistory[e].bites,s.props.castHistory[e].weight>d&&(d=s.props.castHistory[e].weight),null===s.props.castHistory[e].bait?r[s.props.baits.length]+=1:r[s.props.baits.indexOf(s.props.castHistory[e].bait)]+=1,null===s.props.castHistory[e].style?c[s.props.styles.length]+=1:c[s.props.styles.indexOf(s.props.castHistory[e].style)]+=1}));var p={catchRate:m/e.length,timeCasted:h,bites:S,catches:m,heaviestCatch:d,filteredCastTotal:e.length};a.splice(61,1),a.splice(62,1),a.splice(124,1),a.splice(186,1),a.splice(279,1),a.splice(341,1),s.setState({generalStats:p,daysOfYearArray:a,baitUsage:r,styleUsage:c,catchSpecies:o})},s.updateFilterList=function(e,t,a){var n=[];s.props.castHistory.map((function(s,r){null!==e&&e!==s.lakeIndex||null!==t&&t!==s.bait||null!==a&&a!==s.style||n.push(r)})),s.mapStats(n)},s.setLakeFilter=function(e){var t=s.state.lakeIndexFilter;t=e,s.setState({lakeIndexFilter:t}),s.updateFilterList(t,s.state.baitFilter,s.state.styleFilter)},s.setBaitFilter=function(e){var t=s.state.baitFilter;t=e,s.setState({baitFilter:t}),s.updateFilterList(s.state.lakeIndexFilter,t,s.state.styleFilter)},s.setStyleFilter=function(e){var t=s.state.styleFilter;t=e,s.setState({styleFilter:t}),s.updateFilterList(s.state.lakeIndexFilter,s.state.baitFilter,t)},s.state={styleUsage:[],baitUsage:[],catchSpecies:[],daysOfYearArray:[],filteredCastList:[],generalStats:{catchRate:null,timeCasted:null,bites:null,catches:null,heaviestCatch:null},isCastStats:!1,isFishStats:!1,lakeIndexFilter:null,baitFilter:null,styleFilter:null},s}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.state.isCastStats?n.a.createElement("div",{className:D.a.container},n.a.createElement("div",{className:D.a.filterContainer},n.a.createElement(O.a,{as:B.a,variant:"info",title:null!==this.state.lakeIndexFilter?this.props.lakes[this.state.lakeIndexFilter].name:"All lakes"},n.a.createElement(T.a.Item,{eventKey:0,onClick:function(){e.setLakeFilter(null)}},"All lakes"),this.props.lakes.map((function(t,a){return n.a.createElement(T.a.Item,{eventKey:a+1,onClick:function(){e.setLakeFilter(a),console.log(a)}},t.name)}))),n.a.createElement(O.a,{as:B.a,variant:"info",title:null!==this.state.baitFilter?this.state.baitFilter:"All baits"},n.a.createElement(T.a.Item,{eventKey:0,onClick:function(){e.setBaitFilter(null)}},"All baits"),this.props.baits.map((function(t,a){return n.a.createElement(T.a.Item,{eventKey:a+1,onClick:function(){e.setBaitFilter(t)}},t)}))),n.a.createElement(O.a,{as:B.a,variant:"info",title:null!==this.state.styleFilter?this.state.styleFilter:"All styles"},n.a.createElement(T.a.Item,{eventKey:0,onClick:function(){e.setStyleFilter(null)}},"All styles"),this.props.styles.map((function(t,a){return n.a.createElement(T.a.Item,{eventKey:a+1,onClick:function(){e.setStyleFilter(t)}},t)})))),n.a.createElement("div",{className:D.a.generalStats},n.a.createElement("div",{className:D.a.generalStat},n.a.createElement("div",{className:D.a.generalStatHeader},"Time casted:")," ",this.props.mSToReadable(this.state.generalStats.timeCasted)),n.a.createElement("div",{className:D.a.generalStat},n.a.createElement("div",{className:D.a.generalStatHeader},"Heaviest catch:")," ",this.props.kilosToPoundsReadable(this.state.generalStats.heaviestCatch)),n.a.createElement("div",{className:D.a.generalStat},n.a.createElement("div",{className:D.a.generalStatHeader},"Catches:")," ",this.state.generalStats.catches),n.a.createElement("div",{className:D.a.generalStat},n.a.createElement("div",{className:D.a.generalStatHeader},"Catch rate:")," ",(100*this.state.generalStats.catchRate).toFixed(0),"%"),n.a.createElement("div",{className:D.a.generalStat},n.a.createElement("div",{className:D.a.generalStatHeader},"Bites:")," ",this.state.generalStats.bites),n.a.createElement("div",{className:D.a.generalStat},n.a.createElement("div",{className:D.a.generalStatHeader},"Casts:")," ",this.state.generalStats.filteredCastTotal)),n.a.createElement("div",{className:D.a.categoryStats},n.a.createElement("div",{className:D.a.timeGraphContainer},n.a.createElement("div",{className:D.a.year},this.state.daysOfYearArray.map((function(e,t){return n.a.createElement("div",{className:D.a.day},n.a.createElement("div",{style:{backgroundColor:"white",width:"0.2vw",height:e<10?"".concat(8-.8*e,"vh"):"8vh"}}),n.a.createElement("div",{style:{backgroundColor:"green",width:"0.2vw",height:e<10?"".concat(.8*e,"vh"):"8vh"}}))})))),n.a.createElement("div",{className:D.a.graphContainer},this.state.baitUsage.map((function(t,a){return t?n.a.createElement("div",{style:{width:"".concat(80/e.state.baitUsage.reduce((function(e,t){return e+t}),0)*t,"vw"),color:"white",backgroundColor:a%4===0?"blue":a%4===1?"red":a%4===2?"green":"yellow",fontSize:"small",textAlign:"center"}},a===e.props.baits.length?"NA":e.props.baits[a]):null}))),n.a.createElement("div",{className:D.a.graphContainer},this.state.styleUsage.map((function(t,a){return t?n.a.createElement("div",{style:{width:"".concat(80/e.state.styleUsage.reduce((function(e,t){return e+t}),0)*t,"vw"),color:"white",backgroundColor:a%4===0?"blue":a%4===1?"red":a%4===2?"green":"yellow",fontSize:"small",textAlign:"center"}},a===e.props.styles.length?"NA":e.props.styles[a]):null}))),n.a.createElement("div",{className:D.a.graphContainer},this.state.catchSpecies.map((function(t,a){return t?n.a.createElement("div",{style:{width:"".concat(80/e.state.catchSpecies.reduce((function(e,t){return e+t}),0)*t,"vw"),color:"white",backgroundColor:a%4===0?"blue":a%4===1?"red":a%4===2?"green":"yellow",fontSize:"small",textAlign:"center"}},a===e.props.species.length?"NA":e.props.species[a]):null})))),n.a.createElement(g.a,{className:D.a.backButton,variant:"primary",onClick:this.resetStatsScreen},"Back")):this.state.isFishStats?n.a.createElement("div",{className:D.a.container},n.a.createElement("div",{className:D.a.statsContainer},"fishStats"),n.a.createElement(g.a,{variant:"primary",onClick:this.resetStatsScreen},"back")):n.a.createElement("div",{className:D.a.container},n.a.createElement("div",{className:D.a.statsOptions},n.a.createElement(g.a,{className:D.a.statSelectorButton,variant:"primary",onClick:this.showCastStats},"Cast stats"),n.a.createElement(g.a,{className:D.a.statSelectorButton,variant:"primary"},"Fish stats")),n.a.createElement(S.b,{to:"/fishv2/"},n.a.createElement(g.a,{className:D.a.backButton,variant:"primary"},"Back"))))}}]),a}(n.a.Component),R=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).addLake=function(){var e=window.prompt("Lake:","");if(e){var t={name:e},a=Object(l.a)(s.state.lakes);a.push(t),s.setState({lakes:a},localStorage.setItem("lakes",JSON.stringify(a)))}},s.editLake=function(e){var t=window.prompt("Lake:","");if(t){var a={name:t},n=Object(l.a)(s.state.lakes);n[e]=a,s.setState({lakes:n},localStorage.setItem("lakes",JSON.stringify(n)))}},s.deleteLake=function(e){if(window.confirm("Delete this lake?")){var t=s.state.lakes;t.splice(e,1),s.setState({lakes:t},localStorage.setItem("lakes",JSON.stringify(t)))}},s.startSession=function(e){var t=s.state.currentSession;t={lakeIndex:e,casting:!1,casts:0,catches:0,castingDuration:0,bait:null,style:null,currentCast:{catchSuccess:null,castTime:null,reelInTime:null,bites:0},castHistory:[]},s.setState({currentSession:t},localStorage.setItem("currentSession",JSON.stringify(t)))},s.endSession=function(){var e=Object(l.a)(s.state.castHistory);e=e.concat(s.state.currentSession.castHistory);s.state;s.setState({castHistory:e,currentSession:null},localStorage.setItem("castHistory",JSON.stringify(e)),localStorage.setItem("currentSession",JSON.stringify(null)))},s.cast=function(){var e=s.state.currentSession;e.casting=!0,e.casts++;var t=new Date;e.currentCast.castTime=t.getTime(),s.setState({currentSession:e},localStorage.setItem("currentSession",JSON.stringify(e)))},s.recordReelIn=function(){var e=s.state.currentSession,t=new Date;e.currentCast.reelInTime=t.getTime(),s.setState({currentSession:e},localStorage.setItem("currentSession",JSON.stringify(e)))},s.recordCatchSuccess=function(e,t){var a=s.state.currentSession.currentCast,n={bites:a.bites+1,castTime:a.castTime,reelInTime:a.reelInTime,duration:a.reelInTime-a.castTime,lakeName:s.state.lakes[s.state.currentSession.lakeIndex].name,lakeIndex:s.state.currentSession.lakeIndex,bait:s.state.currentSession.bait,style:s.state.currentSession.style,species:e,weight:t,catchSuccess:!0},r=s.state.currentSession;r.castHistory.push(n),s.setState({currentSession:r},localStorage.setItem("currentSession",JSON.stringify(r)))},s.recordCatchFail=function(){var e=s.state.currentSession.currentCast,t={bites:e.bites,castTime:e.castTime,reelInTime:e.reelInTime,duration:e.reelInTime-e.castTime,lakeName:s.state.lakes[s.state.currentSession.lakeIndex].name,lakeIndex:s.state.currentSession.lakeIndex,bait:s.state.currentSession.bait,style:s.state.currentSession.style,catchSuccess:!1},a=s.state.currentSession;a.castHistory.push(t),s.setState({currentSession:a},localStorage.setItem("currentSession",JSON.stringify(a)))},s.endCast=function(){var e=s.state.currentSession;e.casting=!1,e.currentCast.bites=0,s.setState({currentSession:e},localStorage.setItem("currentSession",JSON.stringify(e)))},s.addBite=function(){var e=s.state.currentSession;e.currentCast.bites++,s.setState({currentSession:e},localStorage.setItem("currentSession",JSON.stringify(e)))},s.changeBait=function(e){var t=s.state.currentSession;t.bait=e,s.setState({currentSession:t},localStorage.setItem("currentSession",JSON.stringify(t)))},s.changeStyle=function(e){var t=s.state.currentSession;t.style=e,s.setState({currentSession:t},localStorage.setItem("currentSession",JSON.stringify(t)))},s.mSToDate=function(e){var t=new Date;return t.setTime(e),t},s.mSToReadable=function(e){var t=e/1e3%60,a=t.toFixed(),s=(e/1e3-t)/60%60,n=((e/1e3-t)/60-s)/60;return"".concat(n<10?"0".concat(n):n,":").concat(s<10?"0".concat(s):s,":").concat(a<10?"0".concat(a):a)},s.kilosToPoundsReadable=function(e){var t=e/.028349,a=t%16;return"".concat((t-a)/16," lbs ").concat(a.toFixed(0)," ounces")},s.state={lakes:[Object(c.a)({name:"Holton"},"name","Alderby")],castHistory:[],species:["Roach","Pike","Carp","Perch"],baits:["Maggot","Corn"],styles:["Ledger","Float"],currentSession:null},s}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(S.a,null,n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/fishv2/",exact:!0,render:function(t){return n.a.createElement(y,{currentSession:e.state.currentSession})}})),n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/fishv2/lakes",exact:!0,render:function(t){return n.a.createElement(_,{lakes:e.state.lakes,addLake:e.addLake,editLake:e.editLake,deleteLake:e.deleteLake,startSession:e.startSession,currentSession:e.state.currentSession})}})),n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/fishv2/session",render:function(t){return n.a.createElement(w,{lakes:e.state.lakes,currentSession:e.state.currentSession,baits:e.state.baits,styles:e.state.styles,endSession:e.endSession,cast:e.cast,endCast:e.endCast,recordCatchFail:e.recordCatchFail,addBite:e.addBite,recordReelIn:e.recordReelIn,changeBait:e.changeBait,changeStyle:e.changeStyle})}})),n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/fishv2/catch",render:function(t){return n.a.createElement(L,{lakes:e.state.lakes,currentSession:e.state.currentSession,species:e.state.species,changeSpecies:e.changeSpecies,recordCatchSuccess:e.recordCatchSuccess,endCast:e.endCast,mSToDate:e.mSToDate,kilosToPoundsReadable:e.kilosToPoundsReadable})}})),n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/fishv2/stats",render:function(t){return n.a.createElement(j,{castHistory:e.state.castHistory,lakes:e.state.lakes,baits:e.state.baits,styles:e.state.styles,species:e.state.species,mSToReadable:e.mSToReadable,kilosToPoundsReadable:e.kilosToPoundsReadable,mSToDate:e.mSToDate})}})))}},{key:"componentDidMount",value:function(){if(localStorage.getItem("currentSession")){var e=localStorage.getItem("currentSession");e=JSON.parse(e),this.setState({currentSession:e})}if(localStorage.getItem("lakes")){var t=localStorage.getItem("lakes");t=JSON.parse(t),this.setState({lakes:t})}if(localStorage.getItem("castHistory")){var a=localStorage.getItem("castHistory");a=JSON.parse(a),this.setState({castHistory:a})}if(localStorage.getItem("baits")){var s=localStorage.getItem("baits");s=JSON.parse(s),this.setState({baits:s})}if(localStorage.getItem("styles")){var n=localStorage.getItem("styles");n=JSON.parse(n),this.setState({styles:n})}if(localStorage.getItem("species")){var r=localStorage.getItem("species");r=JSON.parse(r),this.setState({species:r})}}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.71f8d680.chunk.js.map