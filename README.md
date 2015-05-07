# Multiple Progress for your Web Pages
Multiple progress bar, based on http://workshop.rs/2012/12/animated-progress-bar-in-4-lines-of-jquery/

Live at </br>
First option <b>HTML5 + CSS3</b></br>
http://bgdos.github.io/progress </br>
Second option works on <b>IE animated</b></br>
http://bgdos.github.io/progress/demo-2.html 
<div>
<!DOCTYPE HTML>
<html>
<head>
    <title>Multiple Progress Bars</title>
    <meta http-equiv="cache-control" content="no-cache">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="UTF-8" />
    <link href="http://bgdos.github.io/progress/css/style.css" rel="stylesheet">
    <script src="http://bgdos.github.io/progress/js/jquery.min.js"></script>
    <script src="http://bgdos.github.io/progress/js/progress.js"></script>
    <script src="http://bgdos.github.io/progress/js/funciones.js"></script>
</head>
    <body onload="progress()">
    <table  class="prod-status" onload="progress()">
      <thead>
        <tr>
        <th>Progress</th>
        </tr>
      </thead>
      <!--[if lte IE 9]>
      </table>
      <div class="old_ie_wrapper">
        <table style=border-top:none;margin-top:0px;  class="prod-status"><!-- -->
      <tbody>
        <tr>
          <td><div id="progress"><div></div></div>
          </td>
        </tr>
        <tr>
          <td><div id="progress"><div></div></div>
          </td>
        </tr>
        <tr>
          <td><div id="progress"><div></div></div>
          </td>
        </tr>
        <tr>
          <td><div id="progress"><div></div></div>
          </td>
        </tr>
        <tr>
          <td><div id="progress"><div></div></div>
          </td>
        </tr>
        <tr>
          <td><div id="progress"><div></div></div>
          </td>
        </tr>
        <tr>
          <td><div id="progress"><div></div></div>
          </td>
        </tr>
     </tbody>
    </table>
</body>
</html>
</div>
