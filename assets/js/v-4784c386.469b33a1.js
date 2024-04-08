"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3474],{212237:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-4784c386","path":"/devices/E2213.html","title":"IKEA E2213 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2213 control via MQTT","description":"Integrate your IKEA E2213 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-12-26T18:35:42.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Printing Template","slug":"printing-template","link":"#printing-template","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Troubleshooting: Device didn\'t respond to OTA request","slug":"troubleshooting-device-didn-t-respond-to-ota-request","link":"#troubleshooting-device-didn-t-respond-to-ota-request","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1712566264000},"filePathRelative":"devices/E2213.md"}')},605633:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var o=i(166252);const n=(0,o._)("h1",{id:"ikea-e2213",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ikea-e2213","aria-hidden":"true"},"#"),(0,o.Uk)(" IKEA E2213")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"E2213")],-1),d=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"SOMRIG shortcut button")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, action, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2213.png",alt:"IKEA E2213"})])],-1),c=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),h=(0,o._)("h3",{id:"printing-template",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#printing-template","aria-hidden":"true"},"#"),(0,o.Uk)(" Printing Template")],-1),p={href:"https://github.com/thatslolo/IKEA-SOMRIG-template",target:"_blank",rel:"noopener noreferrer"},g=(0,o._)("h3",{id:"pairing",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,o.Uk)(" Pairing")],-1),m=(0,o._)("p",null,"Pair the remote to Zigbee2MQTT by holding it close to the coordinator and pressing the inside button 4 times. The red light on the (front of the) remote will now flash a few times.",-1),_=(0,o._)("h3",{id:"troubleshooting-device-didn-t-respond-to-ota-request",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#troubleshooting-device-didn-t-respond-to-ota-request","aria-hidden":"true"},"#"),(0,o.Uk)(" Troubleshooting: Device didn't respond to OTA request")],-1),b=(0,o._)("p",null,[(0,o.Uk)("To resolve the "),(0,o._)("code",null,"Device didn't respond to OTA request"),(0,o.Uk)(' error, you can try to push a button on it, shortly before you start the update, to wake up the Remote. Sometimes it also helps keeping the device awake, by pushing a button repeatedly until you read the first "Updating... 0.00%" message (about 5s).')],-1),k=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),v=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>1_initial_press</code>, <code>2_initial_press</code>, <code>1_long_press</code>, <code>2_long_press</code>, <code>1_short_release</code>, <code>2_short_release</code>, <code>1_long_release</code>, <code>2_long_release</code>, <code>1_double_press</code>, <code>2_double_press</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),y={},f=(0,i(983744).Z)(y,[["render",function(e,t){const i=(0,o.up)("RouterLink"),y=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[a,(0,o._)("tbody",null,[r,(0,o._)("tr",null,[d,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,o.w5)((()=>[(0,o.Uk)("IKEA")])),_:1})])]),l,s,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,h,(0,o._)("p",null,[(0,o.Uk)("Template to print own covers is provided "),(0,o._)("a",p,[(0,o.Uk)("here"),(0,o.Wm)(y)]),(0,o.Uk)(".")]),g,m,_,b,(0,o.kq)(" Notes END: Do not edit below this line "),k,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),v])}]])}}]);