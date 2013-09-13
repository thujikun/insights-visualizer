<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>${ title }</title>
    <%block name="css">
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Aldrich|Varela|Rock+Salt">
        <link rel="stylesheet" href="/static/css/style.css">
    </%block>
</head>
<body>

    <%block name="content" />

    <%block name="js">
        <script src="http://localhost:35729/livereload.js"></script>
        <script src="/socket.io/socket.io.js"></script>
        <script src="https://www.google.com/jsapi"></script>
    </%block>

    <%block name="js_app" />

</body>
</html>