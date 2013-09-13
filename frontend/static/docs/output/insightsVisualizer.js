Ext.data.JsonP.insightsVisualizer({"tagname":"class","name":"insightsVisualizer","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-insightsVisualizer","members":{"cfg":[],"property":[{"name":"CONST","tagname":"property","owner":"insightsVisualizer","meta":{},"id":"property-CONST"},{"name":"channels","tagname":"property","owner":"insightsVisualizer","meta":{},"id":"property-channels"},{"name":"socket","tagname":"property","owner":"insightsVisualizer","meta":{},"id":"property-socket"}],"method":[{"name":"analyzePerformance","tagname":"method","owner":"insightsVisualizer","meta":{},"id":"method-analyzePerformance"},{"name":"getImpactChartData","tagname":"method","owner":"insightsVisualizer","meta":{},"id":"method-getImpactChartData"},{"name":"gradeScore","tagname":"method","owner":"insightsVisualizer","meta":{},"id":"method-gradeScore"},{"name":"renderChart","tagname":"method","owner":"insightsVisualizer","meta":{},"id":"method-renderChart"},{"name":"visualizeInsightsResult","tagname":"method","owner":"insightsVisualizer","meta":{},"id":"method-visualizeInsightsResult"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":184,"files":[{"filename":"visualize.js","href":"visualize.html#insightsVisualizer"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/visualize.html#insightsVisualizer' target='_blank'>visualize.js</a></div></pre><div class='doc-contents'><p>visualize pagespeed insights result</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CONST' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='insightsVisualizer'>insightsVisualizer</span><br/><a href='source/visualize.html#insightsVisualizer-property-CONST' target='_blank' class='view-source'>view source</a></div><a href='#!/api/insightsVisualizer-property-CONST' class='name expandable'>CONST</a><span> : Object</span></div><div class='description'><div class='short'>constants of insightsVisualizer ...</div><div class='long'><p>constants of insightsVisualizer</p>\n<ul><li><span class='pre'>INSIGHTS_API_URL</span> : String<div class='sub-desc'><p>insight API URL</p>\n</div></li><li><span class='pre'>SCORE_CLASS</span> : String<div class='sub-desc'><p>score element class name</p>\n</div></li></ul></div></div></div><div id='property-channels' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='insightsVisualizer'>insightsVisualizer</span><br/><a href='source/visualize.html#insightsVisualizer-property-channels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/insightsVisualizer-property-channels' class='name expandable'>channels</a><span> : Object</span></div><div class='description'><div class='short'>socket.io channel Info ...</div><div class='long'><p>socket.io channel Info</p>\n<ul><li><span class='pre'>get</span> : String<div class='sub-desc'><p>get insights result channel</p>\n</div></li><li><span class='pre'>set</span> : String<div class='sub-desc'><p>set insights result channel</p>\n</div></li></ul></div></div></div><div id='property-socket' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='insightsVisualizer'>insightsVisualizer</span><br/><a href='source/visualize.html#insightsVisualizer-property-socket' target='_blank' class='view-source'>view source</a></div><a href='#!/api/insightsVisualizer-property-socket' class='name not-expandable'>socket</a><span> : Object</span></div><div class='description'><div class='short'><p>socket.io manager instance</p>\n</div><div class='long'><p>socket.io manager instance</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-analyzePerformance' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='insightsVisualizer'>insightsVisualizer</span><br/><a href='source/visualize.html#insightsVisualizer-method-analyzePerformance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/insightsVisualizer-method-analyzePerformance' class='name expandable'>analyzePerformance</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>execute pagespeed insight API ...</div><div class='long'><p>execute pagespeed insight API</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>Event object</p>\n</div></li></ul></div></div></div><div id='method-getImpactChartData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='insightsVisualizer'>insightsVisualizer</span><br/><a href='source/visualize.html#insightsVisualizer-method-getImpactChartData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/insightsVisualizer-method-getImpactChartData' class='name expandable'>getImpactChartData</a>( <span class='pre'>ruleResults</span> ) : Object</div><div class='description'><div class='short'>make data for impact chart from insight result ...</div><div class='long'><p>make data for impact chart from insight result</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ruleResults</span> : Object<div class='sub-desc'><p>insight result</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>data for impact chart data</p>\n</div></li></ul></div></div></div><div id='method-gradeScore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='insightsVisualizer'>insightsVisualizer</span><br/><a href='source/visualize.html#insightsVisualizer-method-gradeScore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/insightsVisualizer-method-gradeScore' class='name expandable'>gradeScore</a>( <span class='pre'>score</span> ) : String</div><div class='description'><div class='short'>devide grade rank by score ...</div><div class='long'><p>devide grade rank by score</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>score</span> : Number<div class='sub-desc'><p>performance score</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>grade rank</p>\n</div></li></ul></div></div></div><div id='method-renderChart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='insightsVisualizer'>insightsVisualizer</span><br/><a href='source/visualize.html#insightsVisualizer-method-renderChart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/insightsVisualizer-method-renderChart' class='name expandable'>renderChart</a>( <span class='pre'>type, data, element</span> )</div><div class='description'><div class='short'>render chart from data ...</div><div class='long'><p>render chart from data</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>chart type</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>data for chart</p>\n</div></li><li><span class='pre'>element</span> : Object<div class='sub-desc'><p>DOM element of chart</p>\n</div></li></ul></div></div></div><div id='method-visualizeInsightsResult' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='insightsVisualizer'>insightsVisualizer</span><br/><a href='source/visualize.html#insightsVisualizer-method-visualizeInsightsResult' target='_blank' class='view-source'>view source</a></div><a href='#!/api/insightsVisualizer-method-visualizeInsightsResult' class='name expandable'>visualizeInsightsResult</a>( <span class='pre'>response</span> )</div><div class='description'><div class='short'>callback of pagespeed insight API ...</div><div class='long'><p>callback of pagespeed insight API</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>API response</p>\n</div></li></ul></div></div></div></div></div></div></div>"});