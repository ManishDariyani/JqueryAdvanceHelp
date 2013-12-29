Jquery Advance Help
=================

Library for showing help, tips on HTML elements, with ease and minimal configuration.

Just include the css and js file in your code, call the below code whenever you want to show the help.

<code>
$('#DemoDiv').advanceHelp({
		'helpText':'This is help text!'
});
</code>

<h3>Options.</h3>
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
      <th>Possible Values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>helpText</td>
      <td>Shows the text inside help box</td>
      <td>String or HTML</td>
      <td>This is help text!</td>
      <td>Any valid HTML</td>
    </tr>
    <tr>
      <td>model</td>
      <td>Semitransaparent overlay on other elelments</td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td><code>true</code> or <code>false</code></td>
    </tr>
    <tr>
      <td>helpBgColor</td>
      <td>Help box background color</td>
      <td>RGB color code</td>
      <td><code>#075698</code></td>
      <td>Any valid RGB color code or name</td>
    </tr>
    <tr>
      <td>helpTextColor</td>
      <td>Help box text color</td>
      <td>RGB color code</td>
      <td><code>#075698</code></td>
      <td>Any valid RGB color code or name</td>
    </tr>
    <tr>
      <td>helpTextSize</td>
      <td>Help box text size</td>
      <td>String</td>
      <td>small</td>
      <td>Any valid value of css attribute font-size</td>
    </tr>
    <tr>
      <td>helpBoxPosition</td>
      <td>Help box position relative to the element</td>
      <td>String</td>
      <td><code>auto</code></td>
      <td><code>auto</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></td>
    </tr>
    <tr>
      <td>elementBgColor</td>
      <td>Element's background color when its highlighted</td>
      <td>RGB color code</td>
      <td><code>#FFF</code></td>
      <td>Any valid RGB color code or name</td>
    </tr>
    <tr>
      <td>closeButton</td>
      <td>Close link on top-right corner</td>
      <td>Boolean</td>
      <td><code>true</code></td>
      <td><code>true</code> or <code>false</code></td>
    </tr>
    <tr>
      <td>closeButtonText</td>
      <td>Text of close link</td>
      <td>String</td>
      <td>Close</td>
      <td>String or Valid HTML</td>
    </tr>
  </tbody>
</table>

<h3>Events.</h3>
<ol>
	<li><code>onShow</code></li>
	<li><code>onHide</code></li>
</ol>

<h3>Example.</h3>
<pre>
$('#DemoDiv').advanceHelp({
	'helpText':'This is help text!',
	'model':false,
	'position':'left',
	'onShow':function(){
		console.log('Show event of advance help');
	},
	'onHide':function(){
		console.log('Hide event of advance help');
	}
});
</pre>
