<%inherit file="/layouts/base.mak" />

<%block name="content">
    <h1>${ title }</h1>
    <form action="" class="search-form" name="search-form">
        <input type="url" name="url" autocomplete="on" placeholder="http://example.com">
    </form>

    <div class="result">
        <section>
            <h2>Total Score</h2>
            <div class="score"></div>
        </section>
        <section>
            <h2>Performance Impact</h2>
            <div id="performance-impact-chart"></div>
        </section>
    </div>
</%block>

<%block name="js_app">
    <script src="/static/js/app/visualize.js"></script>
</%block>