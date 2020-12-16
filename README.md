# Easy Accordion

Accordion plugin written purely in JavaScript.

## Setup

So, to start using the <b>Easy Accordion</b> plugin in your project, you can include the script in your head/body section as shown below.

```
<script src="https://cdn.jsdelivr.net/gh/farhanhalai30/easy-accordion/js/easy-accordion.min.js">
```

## Usage

Once you have included the script in your code, you can start using <b>Easy Accordion</b> as shown in the code below. For more list of options [refer here](#options)

## Options

Below is the list of options available.

<table>
    <tr>
        <th>Option</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional/Mandatory</th>
    </tr>
    <tr>
        <td>target</td>
        <td>Selector name of the target element.</td>
        <td>String</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>blockClass</td>
        <td>Class name for the block element</td>
        <td>String</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>triggerClass</td>
        <td>Class name for the trigger element (the one which is clickable).</td>
        <td>String</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>contentClass</td>
        <td>Class name for the content.</td>
        <td>String</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>transitionDuration</td>
        <td>Amount of time to transite (in seconds).</td>
        <td>Number</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>triggerActiveClass</td>
        <td>Class name for the trigger element in the active state (active means accordion is open).</td>
        <td>String</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>contentActiveClass</td>
        <td>Class name for the trigger element in the active state.</td>
        <td>String</td>
        <td>Optional</td>
    </tr>
</table>

## Examples

- Basic Example  
  A basic demo of using <b>Easy Accordion</b> for the first time.  
  [Click here](/examples/basic-example.html) check out in action</div>

- Custom Active Classes  
  Using custom active classes for trigger & content elements. Classes get added when the accordion is in active state.  
  [Click here](/examples/custom-active-classes.html) check out in action</div>
